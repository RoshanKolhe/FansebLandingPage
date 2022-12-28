import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfilesByAdvanceFilterThunk } from "../store/slices/vendor/vendor.slice";
import { advanceFilterFieldType, permissionEnum } from "../utils/enum";

const INIT_STATE = {
  brand_name: {},
  registered_business_name: {},
  city: {},
  state: {},
  country: {},
  verified: {
    search_type: "is",
  },
  service_name: {},
  tech_stack: {},
  tag: {},
  industry: {},
  company_type: {},
  year_of_establishment: {
    values: [],
  },
};

function useAdvanceFilter({ search }) {
  const [state, setState] = useState(INIT_STATE);
  const dispatch = useDispatch();
  const { permissions } = useSelector(({ init }) => init);

  function applyFilter() {
    let isFieldSet = false;
    let newFilterState = [];
    Object.keys(state).forEach((key) => {
      const filterObj = state[key];
      if (
        Object.keys(filterObj).length > 0 &&
        filterObj.search_type &&
        filterObj.values
      ) {
        isFieldSet = true;
        newFilterState.push({
          field_name: key,
          ...filterObj,
        });
      }
    });
    if (!isFieldSet) return;
    dispatch(
      fetchProfilesByAdvanceFilterThunk({
        filter_data: newFilterState,
        page: 1,
        bus_profile: search,
        permToken: permissions[permissionEnum.vendor_profile_view],
      })
    );
  }

  function resetFilter() {
    setState(INIT_STATE);
  }

  function _getNewFieldValuesForTextType(fieldName, search_type, value) {
    let fieldObj = state[fieldName];
    if (search_type !== null) {
      fieldObj.search_type = search_type;
    }
    if (value || value === "") {
      fieldObj.values = [value];
    }
    return fieldObj;
  }

  function _getNewFieldValuesForDropdownType(
    field_name,
    search_type,
    value,
    type = "ADD"
  ) {
    let fieldObj = state[field_name];
    if (type === "ADD") {
      if (search_type !== null) {
        fieldObj.search_type = search_type;
      }
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

  function _getNewFieldValuesForDateType(field_name, search_type, value, max) {
    let fieldObj = state[field_name];
    if (search_type !== null) {
      fieldObj.search_type = search_type;
    }

    if (value && max) {
      fieldObj.values = [value, max];
    }

    if (value && !max) {
      fieldObj.values[0] = value;
    }

    if (!value && max) {
      fieldObj.values[1] = max;
    }

    return fieldObj;
  }

  function handleFilterValueChange(type, fieldName, search_type, value, max) {
    if (type === advanceFilterFieldType.text) {
      setState((data) => ({
        ...data,
        [fieldName]: _getNewFieldValuesForTextType(
          fieldName,
          search_type,
          value
        ),
      }));
    }

    if (type === advanceFilterFieldType.boolean) {
      setState((data) => ({
        ...data,
        [fieldName]: {
          ...data[fieldName],
          values: [search_type],
        },
      }));
    }

    if (type === advanceFilterFieldType.dropdown) {
      setState((data) => ({
        ...data,
        [fieldName]: _getNewFieldValuesForDropdownType(
          fieldName,
          search_type,
          value
        ),
      }));
    }

    if (type === advanceFilterFieldType.date) {
      setState((data) => ({
        ...data,
        [fieldName]: _getNewFieldValuesForDateType(
          fieldName,
          search_type,
          value,
          max
        ),
      }));
    }
  }

  function deleteFilterValue(type, fieldName, search_type, value) {
    setState((data) => ({
      ...data,
      [fieldName]: _getNewFieldValuesForDropdownType(
        fieldName,
        search_type,
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
  };
}

export default useAdvanceFilter;
