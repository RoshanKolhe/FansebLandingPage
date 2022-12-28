import _ from "lodash";

function useSearch(data, ...args) {
  const handleTextChange = (searchValue, otherData) => {
    if (otherData) {
      data = otherData;
    }
    if (!searchValue) return data;
    const comparedVal = searchValue.toLowerCase();
    return data.filter((ele) => {
      let flag = false;
      args.forEach((key) => {
        if (flag) return;
        flag = ele[key]?.toLowerCase().includes(comparedVal);
      });
      return flag;
    });
  };

  return {
    handleTextChange,
  };
}

export default useSearch;
