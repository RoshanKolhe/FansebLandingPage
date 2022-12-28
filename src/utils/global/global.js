export const getVirtualElement = function (args) {
  var { name, onChange, onBlur, type } = args;

  function getEvent() {
    let event = {};
    event.target = {
      type,
      name,
    };
    return event;
  }

  function setValue(value) {
    const event = getEvent();
    event.target.value = value;
    onChange(event);
  }

  function blurElement() {
    const event = getEvent();
    if (onBlur) {
      onBlur(event);
    }
  }

  function resetValue() {
    const event = getEvent();
    event.target.value = "";
    onChange(event, "");
  }

  return {
    setValue,
    blurElement,
    resetValue,
  };
};

export const formattedAddress = (
  address_line1,
  address_line2,
  city,
  country,
  state,
  zip_code
) => {
  let address = "";
  if (address_line1) {
    address += address_line1;
  }
  if (address_line2) {
    address += ", " + address_line2;
  }
  if (city) {
    address += " " + city;
  }
  if (state) {
    address += ", " + state;
  }
  if (country) {
    address += " " + country;
  }
  if (zip_code) {
    address += ", " + zip_code;
  }
  return address;
};

export function transformServices(data) {
  if (!data) return [];
  return data.map((service) => {
    var { children, ...rest } = service;
    return {
      ...rest,
      subRows: children.length === 0 ? [] : transformServices(children),
    };
  });
}

export const createQueryString = (data) => {
  return "?" + new URLSearchParams(data).toString();
};

export const checkForFilterValidity = (state) => {
  let isFieldSet = false;
  let newFilterState = [];
  Object.keys(state).forEach((key) => {
    const filterObj = state[key];
    if (
      Object.keys(filterObj).length > 0 &&
      filterObj.search_type &&
      filterObj.values &&
      filterObj.values.length > 0
    ) {
      isFieldSet = true;
      newFilterState.push({
        field_name: key,
        ...filterObj,
      });
    }
  });
  return {
    isAllowed: isFieldSet,
    data: newFilterState,
  };
};

export const getModifiedFilterState = (state) => {
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

  return [isFieldSet, newFilterState];
};
