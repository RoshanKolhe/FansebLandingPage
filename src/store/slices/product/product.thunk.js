import {
  emailLogin,
  getAllProducts,
  getAllProductsByID,
} from "../../../utils/apis.utils";
import { showFailureToast, showSuccessToast } from "../toast/toast.slice";

export const getProductsBySearch = async (data, thunkApi) => {
  try {
    const { default: defaultAxios } = thunkApi.extra.apiService;
    const response = await defaultAxios.post(emailLogin, {
      ...data,
      user_type: "exmyb",
      department_type: "supply",
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

export const getAllProductsSlice = async (email, thunkApi) => {
  try {
    const { default: defaultAxios } = thunkApi.extra.apiService;
    const response = await defaultAxios.get(getAllProducts);
    const responseData = response.data;
    return responseData;
  } catch (err) {
    // thunkApi.dispatch(showFailureToast({ message: err }));
    return Promise.reject();
  }
};

export const getProductDetailsByProductIDSlice = async (id, thunkApi) => {
  try {
    const { default: defaultAxios } = thunkApi.extra.apiService;
    const response = await defaultAxios.get(getAllProductsByID + "/" + id);
    debugger;
    const responseData = response.data;
    return responseData;
  } catch (err) {
    // thunkApi.dispatch(showFailureToast({ message: err }));
    return Promise.reject();
  }
};
