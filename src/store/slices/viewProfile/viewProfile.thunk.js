import { showFailureToast, showSuccessToast } from "../toast/toast.slice";
import {
  allVendorServices,
  vendorBusinessAddress,
  vendorNotes,
  addNotesByID,
  vendorViewPortFolio,
  viewVendorNotes,
} from "../../../utils/apis.utils";
import { createQueryString } from "../../../utils/global/global";
export const allVendorServicesHandler = async (__, thunkApi) => {
  const { vendor } = thunkApi.extra.apiService;
  const response = await vendor.get(allVendorServices);

  return response.data;
};

export const fetchVendorViewPortfolioHandler = async (__, thunkApi) => {
  const { vendor } = thunkApi.extra.apiService;
  const response = await vendor.get(vendorViewPortFolio);

  return response.data;
};

// export const fetchviewVendorNotesHandler = async (__, thunkApi) => {
//   const { vendor } = thunkApi.extra.apiService;
//   const response = await vendor.get(viewVendorNotes);

//   return response.data;
// };

export const vendorBusinessAddressHandler = async (__, thunkApi) => {
  const { vendor } = thunkApi.extra.apiService;
  const response = await vendor.get(vendorBusinessAddress);

  return response.data;
};

export const vendorNotesHandler = async (__, thunkApi) => {
  const { vendor } = thunkApi.extra.apiService;
  const response = await vendor.get(vendorNotes);

  return response.data;
};

export const addNotesByIdHandler = async (data, thunkApi) => {
  const { user } = thunkApi.extra.apiService;
  const response = await user.post(addNotesByID + "/" + data.id, {
    notes: data.name,
  });
  thunkApi.dispatch(
    showSuccessToast({
      message: response.message,
      vertical: "top",
      horizontal: "right",
    })
  );
  return response.data;
};
