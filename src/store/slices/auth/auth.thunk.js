import {
  emailLogin,
  fetchAllForgotPasswordsApi,
  mobileLogin,
  verifyOtp,
} from "../../../utils/apis.utils";
import { formatUserResponse } from "../../../utils/global/user.global";
import { setUserProfileDetails } from "../user/user.slice";

import { showFailureToast, showSuccessToast } from "../toast/toast.slice";
import { fetchAllUserPermissionsThunk } from "../init/init.slice";
import {
  getSessionId,
  storeAccessToken,
  storeSessionId,
} from "../../../utils/global/auth.global";

export const signInWithEmail = async (data, thunkApi) => {
  try {
    const { default: defaultAxios } = thunkApi.extra.apiService;
    const response = await defaultAxios.post(emailLogin, {
      ...data,
      user_type: "exmyb",
      department_type: "supply",
    });

    const responseData = response.data;
    const userDetails = formatUserResponse(responseData);
    storeAccessToken(responseData.access_token);
    thunkApi.dispatch(setUserProfileDetails(userDetails));
    await thunkApi.dispatch(fetchAllUserPermissionsThunk());
    thunkApi.dispatch(
      showSuccessToast({
        message: response?.message,
        vertical: "top",
        horizontal: "right",
      })
    );
    return responseData;
  } catch (err) {
    thunkApi.dispatch(showFailureToast({ message: err }));
    return Promise.reject();
  }
};
export const signUpWithMobile = async (data, thunkApi) => {
  try {
    const { default: defaultAxios } = thunkApi.extra.apiService;
    const response = await defaultAxios.post(mobileLogin, {
      mobile_number: data.mobile_number,
      country_code: "+91",
    });
    console.log(response);
    storeSessionId(response.data.session_id);
    thunkApi.dispatch(
      showSuccessToast({
        message: response?.message,
        vertical: "top",
        horizontal: "right",
      })
    );
    return response.data;
  } catch (err) {
    return Promise.reject();
  }
};
export const verifyOtpHandler = async (data, thunkApi) => {
  try {
    const { default: defaultAxios } = thunkApi.extra.apiService;
    const session_id = getSessionId();
    const response = await defaultAxios.post(verifyOtp, {
      mobile_number: data.mobile_number,
      country_code: "+91",
      otp: data.otp,
      session_id,
    });
    const responseData = response.data;
    const userDetails = formatUserResponse(responseData);
    storeAccessToken(responseData.access_token);
    thunkApi.dispatch(setUserProfileDetails(userDetails));
    thunkApi.dispatch(
      showSuccessToast({
        message: response?.message,
        vertical: "top",
        horizontal: "right",
      })
    );
    console.log(response);
    return response.data;
  } catch (err) {
    return Promise.reject();
  }
};
export const forgotPassword = async (email, thunkApi) => {
  try {
    const { default: defaultAxios } = thunkApi.extra.apiService;
    const response = await defaultAxios.post(fetchAllForgotPasswordsApi, {
      email,
    });
    const responseData = response.data;
    thunkApi.dispatch(
      showSuccessToast({
        message: response?.message,
        vertical: "top",
        horizontal: "right",
      })
    );
    return responseData;
  } catch (err) {
    thunkApi.dispatch(showFailureToast({ message: err }));
    return Promise.reject();
  }
};
