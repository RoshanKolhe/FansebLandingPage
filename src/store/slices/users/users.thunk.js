import { getAllRole, userApi, deletUserApi } from "../../../utils/apis.utils";
import { createQueryString } from "../../../utils/global/global";
import { showFailureToast, showSuccessToast } from "../toast/toast.slice";

export const fetchAllPermissionsHandler = async (permToken, thunkApi) => {
  const { user } = thunkApi.extra.apiService;
  const response = await user.get(getAllRole + "?permToken=" + permToken);

  return {
    data: response.data,
    total: response.total,
  };
};

export const fetchAllUsersHandler = async (permToken, thunkApi) => {
  const { permission } = thunkApi.extra.apiService;
  const query = createQueryString({
    permToken,
  });
  const response = await permission.get(userApi + query);
  return response.data;
};

export const createUserHandler = async ({ data, permToken }, thunkApi) => {
  try {
    const { permission } = thunkApi.extra.apiService;
    const query = createQueryString({
      permToken,
    });
    const response = await permission.post(userApi + query, {
      ...data,
      user_type: "exmyb",
      department_type: "supply",
      type: "supply",
    });
    thunkApi.dispatch(
      showSuccessToast({
        message: response.message,
        vertical: "top",
        horizontal: "right",
      })
    );
    return response.data;
  } catch (err) {
    thunkApi.dispatch(
      showFailureToast({
        message: err,
        vertical: "top",
        horizontal: "right",
      })
    );
    return Promise.reject();
  }
};

export const updateSubUserHandler = async ({ data, permToken }, thunkApi) => {
  try {
    const { permission } = thunkApi.extra.apiService;
    const query = createQueryString({
      permToken,
    });
    const response = await permission.put(userApi + query, {
      ...data,
      user_type: "exmyb",
      department_type: "supply",
      type: "supply",
    });
    thunkApi.dispatch(
      showSuccessToast({
        message: response.message,
        vertical: "top",
        horizontal: "right",
      })
    );
    return response.data;
  } catch (err) {
    thunkApi.dispatch(
      showFailureToast({
        message: err,
        vertical: "top",
        horizontal: "right",
      })
    );
    return Promise.reject();
  }
};

export const deleteSubUserHandler = async (data, thunkApi) => {
  try {
    const query = createQueryString({
      id: data.id,
      permToken: data.permToken,
      type: "supply",
    });
    const { permission } = thunkApi.extra.apiService;
    const response = await permission.delete(deletUserApi + query);
    thunkApi.dispatch(
      showSuccessToast({
        message: response.message,
        vertical: "top",
        horizontal: "right",
      })
    );
    return data.id;
  } catch (err) {
    thunkApi.dispatch(showFailureToast({ message: err }));
    return Promise.reject(err);
  } finally {
  }
};
