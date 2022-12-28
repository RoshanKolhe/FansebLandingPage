import {
  userAddress,
  updatePasswordsApi,
  uploadUserProfileApi,
  customerApi,
} from "../../../utils/apis.utils";
// import {
//   startDashboardLoader,
//   stopDashboardLoader,
// } from "../dashboard/dashboard.slice";
import { showFailureToast, showSuccessToast } from "../toast/toast.slice";
import { createQueryString } from "../../../utils/global/global";
import { formatUserResponse } from "../../../utils/global/user.global";

export const userAddressHandler = async (__, thunkApi) => {
  const { user } = thunkApi.extra.apiService;
  const response = await user.get(userAddress);
  return response.data;
};

export const updatePasswordHandler = async ({ data, permToken }, thunkApi) => {
  var query = createQueryString({
    permToken,
  });
  const { user } = thunkApi.extra.apiService;
  const response = await user.post(updatePasswordsApi + query, data);
  thunkApi.dispatch(
    showSuccessToast({
      message: response.message,
      vertical: "top",
      horizontal: "right",
    })
  );
  return response;
};

export const uploadProfileHandler = async (data, thunkApi) => {
  try {
    // thunkApi.dispatch(startDashboardLoader());
    const { protectedAuthAxios } = thunkApi.extra.apiService;
    const response = await protectedAuthAxios.post(uploadUserProfileApi, data);
    thunkApi.dispatch(
      showSuccessToast({
        message: response?.message,
        vertical: "top",
        horizontal: "right",
      })
    );
    return response.data;
  } catch (err) {
    thunkApi.dispatch(showFailureToast(err));
    return Promise.reject(err);
  } finally {
    // thunkApi.dispatch(stopDashboardLoader());
  }
};

export const setUserProfileHandler = async (data, thunkApi) => {
  try {
    const { user } = thunkApi.extra.apiService;
    const response = await user.get(customerApi);
    return formatUserResponse(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateUserProfileHandler = async (data, thunkApi) => {
  try {
    // thunkApi.dispatch(startDashboardLoader());
    console.log(data);
    const { user } = thunkApi.extra.apiService;
    const response = await user.put(customerApi, {
      data,
    });
    const formatedData = formatUserResponse(response.data);
    return formatedData;
  } catch (err) {
    return Promise.reject(err);
  } finally {
    // thunkApi.dispatch(stopDashboardLoader());
  }
};
