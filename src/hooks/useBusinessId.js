import { useSelector } from "react-redux";

function useBusinessId() {
  const { profileData } = useSelector(({ vendor }) => vendor);
  return profileData.id;
}

export default useBusinessId;
