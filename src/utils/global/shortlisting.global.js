import { allVendorServices, getAllPortfolio } from "../apis.utils";
import { vendorAxios } from "../axios/vendor.axios";

export const fetchAllServicesOfVendor = (permToken) => {
  return vendorAxios
    .get(allVendorServices + "?permToken=" + permToken)
    .then((response) => response.data);
};

export const fetchAllPortfoliosOfVendor = () => {
  return vendorAxios.get(getAllPortfolio).then((response) => response.data);
};
