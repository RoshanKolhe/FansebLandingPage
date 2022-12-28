import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useBusinessId from "../hooks/useBusinessId";

function withBusinessId(Component) {
  return function BusinessAuthCheck(props) {
    const businessId = useBusinessId();
    const navigate = useNavigate();

    useEffect(() => {
      if (!businessId) {
        navigate("/dashboard/profiles/new/basic");
      }
    }, []);

    return <Component {...props} />;
  };
}

export default withBusinessId;
