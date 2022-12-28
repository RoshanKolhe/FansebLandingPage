import { defaultAxios } from "../axios/default.axios";
import { setPasswordApi, userApi, validateTokenApi } from "../apis.utils";
// import { permissionAxios } from "../axios/permission.axios";

export const formatUserResponse = (response) => {
  return {
    first_name: response.first_name,
    last_name: response.last_name,
    id: response.id,
    street: response.street,
    zip_code: response.zip_code,
    state: response.state,
    city: response.city,
    mobile: {
      countryCode: response.country_code,
      mobile_number: response.mobile_number,
    },
    // isBusinessProfileStageChangeAllowed:
    //   response.vendor_profile_change_stage_perm,
  };
};

export const validateToken = async (token) => {
  return defaultAxios.post(validateTokenApi, { code: token });
};

export const setPasswordHandler = (password, code) => {
  return defaultAxios.post(setPasswordApi, { password, code });
};

export const tranformPermissions = (data) => {
  return Object.keys(data).reduce((acc, ele) => {
    return { ...acc, [data[ele].key]: ele };
  }, {});
};

export const getPermissionOptions = (data) => {
  return Object.keys(data).reduce((acc, ele) => {
    return [...acc, { label: data[ele].value, value: ele }];
  }, []);
};
