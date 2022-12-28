import { useMemo } from "react";
import { getVirtualElement } from "../utils/global/global";

const INIT_STATE = {
  phoneNumber: "",
  isdCode: "",
  mobile: "",
};

function useMobile({
  initialValue = INIT_STATE,
  name,
  onChange,
  onBlur,
  value,
}) {
  const refElement = useMemo(() => {
    return getVirtualElement({
      name,
      onChange: onChange,
      onBlur: onBlur,
      type: "text",
    });
  }, []);

  function handleChange(...data) {
    const [phoneWithISOCode, isoData] = data;
    const { dialCode } = isoData;

    const number = phoneWithISOCode.substring(
      dialCode.length,
      phoneWithISOCode.length
    );

    refElement.setValue({
      country_code: "+" + dialCode,
      mobile_number: number,
    });
  }

  function handleBlur() {
    refElement.blurElement();
  }

  return {
    handleChange,
    handleBlur,
  };
}

export default useMobile;
