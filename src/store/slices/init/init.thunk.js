import _ from "lodash";
import {
  fetchAllNotificationsApi,
  getAllPermissionsApi,
  getUserPermissionsApi,
  markAllNotificationsAsReadApi,
  userApi,
} from "../../../utils/apis.utils";
import { strings } from "../../../utils/enum";
import { removeAccessToken } from "../../../utils/global/auth.global";
import {
  formatUserResponse,
  getPermissionOptions,
  tranformPermissions,
} from "../../../utils/global/user.global";
import { setUserAsLogin } from "../auth/auth.slice";
import { setUserProfileDetails } from "../user/user.slice";
// import {
//   startDashboardLoader,
//   stopDashboardLoader,
// } from "../dashboard/dashboard.slice";
import { showSuccessToast } from "../toast/toast.slice";
import {
  fetchAllUserPermissionsThunk,
  setPemissionOptions,
} from "./init.slice";
import { createQueryString } from "../../../utils/global/global";

export const checkTokenValidity = async (__, thunkApi) => {
  try {
    // thunkApi.dispatch(startDashboardLoader());
    const { protectedAuthAxios } = thunkApi.extra.apiService;
    const response = await protectedAuthAxios.get(userApi);
    const responseData = response.data;
    if (_.get(responseData, strings.email_verify)) {
      const userDetails = formatUserResponse(responseData);
      thunkApi.dispatch(setUserProfileDetails(userDetails));
      thunkApi.dispatch(setUserAsLogin());
      await thunkApi.dispatch(fetchAllUserPermissionsThunk());
      return;
    }
    removeAccessToken();
    return Promise.reject();
  } catch (err) {
    return Promise.reject(err);
  } finally {
    // thunkApi.dispatch(stopDashboardLoader());
  }
};

export const fetchAllNotificationsHandler = async (__, thunkApi) => {
  try {
    // thunkApi.dispatch(startDashboardLoader());
    const { user } = thunkApi.extra.apiService;
    const response = await user.get(fetchAllNotificationsApi);
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  } finally {
    // thunkApi.dispatch(stopDashboardLoader());
  }
};

export const markAllNotificationsAsReadHandler = async (__, thunkApi) => {
  try {
    const { user } = thunkApi.extra.apiService;
    const response = await user.post(markAllNotificationsAsReadApi);
    thunkApi.dispatch(
      showSuccessToast({
        message: response.message,
        vertical: "top",
        horizontal: "right",
      })
    );
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  } finally {
    // thunkApi.dispatch(stopDashboardLoader());
  }
};

export const fetchAllUserPermissionsHandler = async (__, thunkApi) => {
  try {
    const { permission } = thunkApi.extra.apiService;
    const query = createQueryString({
      type: "supply",
    });
    const response = await permission.get(getUserPermissionsApi + query);
    const allPermissions = await permission.get(getAllPermissionsApi);
    thunkApi.dispatch(
      setPemissionOptions(getPermissionOptions(allPermissions.data))
    );
    return tranformPermissions(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
