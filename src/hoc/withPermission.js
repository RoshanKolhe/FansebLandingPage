import { useSelector } from "react-redux";
import Unauthorized from "../components/Common/Unauthrorized";

function withPermission(Component, key) {
  return function PermissionGate(props) {
    const { permissions } = useSelector(({ init }) => init);
    if (permissions[key])
      return <Component {...props} permToken={permissions[key]} />;
    return <Unauthorized />;
  };
}

export default withPermission;
