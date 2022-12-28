import { useSelector } from "react-redux";

function usePermission(key) {
  const { permissions } = useSelector(({ init }) => init);
  return permissions[key];
}

export default usePermission;
