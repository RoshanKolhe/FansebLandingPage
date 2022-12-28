import { useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";

function withDashboardAuthLoader(Component) {
  return function AuthLoader(props) {
    const isLoading = useSelector(({ dashboard }) => dashboard.isLoading);

    return (
      <>
        {isLoading && <Loader />}
        <Component {...props} />
      </>
    );
  };
}

export default withDashboardAuthLoader;
