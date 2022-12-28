import { useSelector } from "react-redux";

function useUser() {
  const { profile } = useSelector(({ user }) => user.userData);

  return {
    get fullName() {
      return profile.first_name + " " + profile.last_name;
    },
    get isBusinessProfileStageChangeAllowed() {
      return profile.isBusinessProfileStageChangeAllowed;
    },
    get email() {
      return profile.email;
    },
    get designation() {
      return profile.designation;
    },
    get mobile() {
      if (!profile?.mobile?.mobile_number) return "";
      return profile.mobile.countryCode + "- " + profile.mobile.mobile_number;
    },
    get profileUrl() {
      return profile.imageUrl;
    },
    get country() {
      return profile.country;
    },

    get address() {
      let address = "";
      if (profile.address_line1) {
        address += profile.address_line1;
      }
      if (profile.address_line2) {
        address += ", " + profile.address_line2;
      }
      if (profile.city) {
        address += " " + profile.city;
      }
      if (profile.state) {
        address += ", " + profile.state;
      }
      if (profile.country) {
        address += " " + profile.country;
      }
      if (profile.zip_code) {
        address += ", " + profile.zip_code;
      }
      return address;
    },
    get first_name() {
      return profile.first_name;
    },
    get last_name() {
      return profile.last_name;
    },
    get id() {
      return profile.id;
    },
    get displayName() {
      if (profile.first_name) {
        return profile.first_name + " " + profile.last_name;
      }
      if (profile?.mobile?.mobile_number) {
        return (
          profile.mobile.country_code + "- " + profile.mobile.mobile_number
        );
      }
      return "User";
    },
  };
}

export default useUser;
