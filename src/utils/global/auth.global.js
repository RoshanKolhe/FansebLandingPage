import { ACCESS_TOKEN, SESSION_ID } from "../constant";

export const storeAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token);
export const storeSessionId = (id) => {
  localStorage.setItem(SESSION_ID, id);
};
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const getSessionId = () => localStorage.getItem(SESSION_ID);
export const removeAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};
