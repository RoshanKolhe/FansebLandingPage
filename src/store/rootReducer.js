import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./slices/user/user.slice";
import initReducer from "./slices/init/init.slice";
import authReducer from "./slices/auth/auth.slice";
import toastReducer from "./slices/toast/toast.slice";
import usersReducer from "./slices/users/users.slice";
import productReducer from "./slices/product/product.slice";

const rootReducer = combineReducers({
  user: userReducer,
  init: initReducer,
  toast: toastReducer,
  toastReducer: authReducer,
  auth: authReducer,
  users: usersReducer,
  product: productReducer,
});

export default rootReducer;
