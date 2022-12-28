import { DateTime } from "luxon";
import { userAxios } from "../../utils/axios/user.axios";
import {
  searchLanguageApi,
  searchSkillApi,
  searchServiceApi,
  searchIndustryApi,
  getOrgIdByProfileIdApi,
  getServiceTeckStacksApi,
  fetchTeckStackBySearchApi,
  addServices,
  deleteServices,
  allFunctionIndustry,
  fetchTagsBySearchApi,
  getServiceTagsApi,
  getAssignedVendorApi,
  selectVerifiedVendorApi,
  getVendorByPortfolioIds,
} from "../apis.utils";
import { ORG_ID } from "../constant";
import { fetchAllNotificationsApi } from "../apis.utils";
import { createQueryString } from "./global";
import { vendorAxios } from "../axios/vendor.axios";

export const modifyBusinessProfiles = (data) => {
  return data.map((profile) => ({
    ...profile,
    created_at: DateTime.fromISO(profile.created_at).toFormat("DD"),
    updated_at: DateTime.fromISO(profile.updated_at).toFormat("DD"),
    mobile: profile.country_code + "-" + profile.mobile_number,
  }));
};

export const addTechstack = (data) => {
  return userAxios.post("/tech_stack", { data });
};

export const searchLanguageHandler = (term) => {
  const query = createQueryString({
    term,
  });
  return userAxios.get(searchLanguageApi + query);
};

export const searchSkillHandler = (term) => {
  const query = createQueryString({
    term,
  });
  return userAxios.get(searchSkillApi + query);
};

export const searchIndustryHandler = (query) => {
  const term = createQueryString({
    query,
  });
  return userAxios.get(searchIndustryApi + term);
};

export const searchServiceHandler = (query) => {
  const term = createQueryString({
    query,
  });
  return userAxios.get(searchServiceApi + term);
};

export const storeOrgId = (token) => localStorage.setItem(ORG_ID, token);

export const getOrgId = () => localStorage.getItem(ORG_ID);

export const removeOrgId = () => {
  localStorage.removeItem(ORG_ID);
};
export const getAllNotificationHandler = (offset) => {
  const term = createQueryString({
    offset,
  });
  return userAxios.get(fetchAllNotificationsApi + term);
};

export const getOrgIdByProfileId = (id, permToken) => {
  const term = createQueryString({
    profile_id: id,
    profile_type: "vendor",
    permToken: permToken,
  });
  return userAxios.get(getOrgIdByProfileIdApi + term);
};

export const serviceFormatter = (data) => {
  const sortedData = data.sort((a, b) => (a.path > b.path ? 1 : -1));
  var arr = [];

  sortedData.forEach((ele) => {
    if (!ele.parent_id) {
      return arr.push({
        path: [ele.title],
        id: ele._id,
        title: ele.title,
      });
    }
    arr.push({
      path: ele.path?.split("/"),
      id: ele._id,
      title: ele.title,
    });
  });

  return arr;
};

export const fetchAllTechStackByService = async (id, permToken) => {
  const query = createQueryString({
    service_id: id,
    permToken,
  });
  return userAxios.get(getServiceTeckStacksApi + query);
};

export const fetchAllTageByService = async (id, permToken) => {
  const query = createQueryString({
    service_id: id,
    permToken,
  });
  return userAxios.get(getServiceTagsApi + query);
};

export const fetchAllTechStackBySearch = async (search, permToken) => {
  const query = createQueryString({
    query: search,
    permToken,
  });
  return userAxios.get(fetchTeckStackBySearchApi + query);
};

export const fetchAllTagsBySearch = async (search, permToken) => {
  const query = createQueryString({
    query: search,
    permToken,
  });
  return userAxios.get(fetchTagsBySearchApi + query);
};

export const updateServiceHandler = async (data, permToken) => {
  const query = createQueryString({
    permToken,
  });
  return userAxios.put(addServices + "/" + data._id + query, { data });
};

export const serviceSlugValidate = async (search) => {};

export const industrySlugValidate = async (search) => {};

export const deleteServiceHandler = async (id, permToken) => {
  const query = createQueryString({
    permToken,
  });
  return userAxios.delete(deleteServices + "/" + id + query);
};

export const addService = async (data, permToken) => {
  const query = createQueryString({
    permToken,
  });
  return userAxios.post(addServices + query, { data });
};

export const deleteIndustryHandler = async (id, permToken) => {
  return userAxios.delete(
    allFunctionIndustry + "/" + id + "?permToken=" + permToken
  );
};

export const addIndustry = async (data, permToken) => {
  return userAxios.post(allFunctionIndustry + "?permToken=" + permToken, {
    data,
  });
};

export const selectVerifiedVendor = async (data) => {
  return vendorAxios.put(selectVerifiedVendorApi, { ...data });
};

export const updateIndustryHandler = (data, permToken) => {
  return userAxios.put(
    allFunctionIndustry + "/" + data._id + "?permToken=" + permToken,
    { data }
  );
};

export const fetchAssignedVendorHandler = (permToken) => {
  return vendorAxios.get(getAssignedVendorApi + "?permToken=" + permToken);
};

export const assignVendorToProfileHandler = (data) => {
  return vendorAxios.put(getAssignedVendorApi, data);
};

export const deleteAssignVendorHandler = (id) => {
  return vendorAxios.delete(getAssignedVendorApi + "/" + id);
};

export const getVenodorPortifoliosByIDHandler = (data, permToken) => {
  return vendorAxios.get(
    getVendorByPortfolioIds + "=[" + data + "]" + "&permToken=" + permToken
  );
};
