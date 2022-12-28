import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchVendorShortlistingProfileByFilterThunk,
  getRecommendedVendorsThunk,
} from "../store/slices/shortlisting/shortlisting.slice";
import { permissionEnum, shortlistingFilterFieldType } from "../utils/enum";

const INIT_STATE = {
  city: {},
  state: {},
  service: {},
  tech_stack: {},
  tag: {},
  industry: {},
};

function useShortListingFilter({ initValues }) {
  const { permissions } = useSelector(({ init }) => init);
  const [state, setState] = useState({ ...INIT_STATE, ...initValues });
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [serviceSelected, setSelectedServiceId] = useState([]);
  const dispatch = useDispatch();
  const params = useParams();

  function applyFilter() {
    let isFieldSet = false;
    let newFilterState = [];
    Object.keys(state).forEach((key) => {
      const filterObj = state[key];
      if (
        Object.keys(filterObj).length > 0 &&
        filterObj.values &&
        filterObj.values?.length > 0
      ) {
        isFieldSet = true;
        newFilterState.push({
          field_name: key,
          search_type: "is",
          ...filterObj,
        });
      }
    });
    if (!isFieldSet) return;
    setIsFilterApplied(true);
    dispatch(
      fetchVendorShortlistingProfileByFilterThunk({
        filter_data: newFilterState,
        page: 1,
        limit: 10,
        deal_id: params.id,
        permToken: permissions[permissionEnum.deals_shortlist],
      })
    );
  }

  function resetFilter() {
    setState({
      city: {},
      state: {},
      tech_stack: {},
      tag: {},
      industry: {},
      service: {},
    });
    setIsFilterApplied(false);
    dispatch(
      getRecommendedVendorsThunk({
        id: params.id,
        page: 1,
        rowperpage: 10,
      })
    );
  }

  useEffect(() => {
    if (initValues?.service && initValues?.service?.values) {
      setState({ ...INIT_STATE, ...initValues });
    }
  }, [initValues.service.values[0]]);

  useEffect(() => {
    if (initValues.selectedService) {
      setSelectedServiceId(initValues.selectedService);
    }
  }, [initValues?.selectedService]);

  function _getNewFieldValuesForTextType(fieldName, value) {
    let fieldObj = state[fieldName];
    if (value || value === "") {
      fieldObj.values = [value];
    }
    return fieldObj;
  }

  function _getNewFieldValuesForDropdownType(field_name, value, type = "ADD") {
    let fieldObj = state[field_name];
    if (type === "ADD") {
      if (value) {
        if (typeof fieldObj.values === "undefined") {
          fieldObj.values = [value.value];
        } else {
          fieldObj.values.push(value.value);
        }
      }
      return fieldObj;
    }

    fieldObj.values = fieldObj.values.filter((ele) => ele !== value);
    return fieldObj;
  }

  function handleFilterValueChange(type, field_name, value) {
    if (type === shortlistingFilterFieldType.text) {
      setState((data) => ({
        ...data,
        [field_name]: _getNewFieldValuesForTextType(field_name, value),
      }));
    }

    if (type === shortlistingFilterFieldType.dropdown) {
      setState((data) => ({
        ...data,
        [field_name]: _getNewFieldValuesForDropdownType(field_name, value),
      }));
    }
  }

  function deleteFilterValue(_, field_name, value) {
    setState((data) => ({
      ...data,
      [field_name]: _getNewFieldValuesForDropdownType(
        field_name,
        value,
        "DELETE"
      ),
    }));
  }

  return {
    state,
    applyFilter,
    resetFilter,
    handleFilterValueChange,
    deleteFilterValue,
    isFilterApplied,
    serviceSelected,
    setSelectedServiceId,
  };
}

export default useShortListingFilter;
