import * as Yup from "yup";

export const addUserValidation = Yup.object({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email Id is required"),
  designation: Yup.string().required("Designation is Required"),
});

export const addressInfovalidation = Yup.object({
  address_line1: Yup.string().required("Address1 is required"),
  address_line2: Yup.string().required("Address2 is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  zip_code: Yup.string()
    .required("Zip code is Required")
    .matches(/^[0-9]{6}$/, "Please Enter a Valid ZIP Code"),
});

export const bankDetailsValidation = Yup.object({
  cancelled_cheque_file: Yup.object({
    url: Yup.string().required("Cancelled Cheque is required"),
  }),
});

export const reasonValidation = Yup.object({
  reason: Yup.array().min(1, "Reason is Required"),
});

export const customServicesValidation = Yup.object({
  service_name: Yup.string().required("Service name is required"),
  minimum_price: Yup.string().required("Minimum price is required"),
  maximum_price: Yup.string().required("Maximum price is required"),
});

export const serviceValidation = Yup.object({
  service_name: Yup.object({
    service_name: Yup.string().required("Service name is required"),
  }),
  minimum_price: Yup.string().required("Minimum price is required"),
  maximum_price: Yup.string().required("Maximum price is required"),
});

export const passwordvalidation = Yup.object().shape({
  old_password: Yup.string().required("Old password is required"),
  new_password: Yup.string().required("New password is required"),
  confirmpass: Yup.string()
    .required("Confirm password is required")
    .when("new_password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("new_password")],
        "Both password need to be the same"
      ),
    }),
});

export const roleValidation = Yup.object({
  permissions: Yup.array().min(1, "Permission is Required"),
  name: Yup.string().required("Role is required"),
});

export const portfolioValidation = Yup.object({
  client_name: Yup.string().required("Client Name is required"),
  // website_link: Yup.string().url("Please Enter a Valid url"),
  // app_link: Yup.string().url("Please Enter a Valid url"),
  // client_budget: Yup.string().required("Project budget is required"),
  // description: Yup.string().required("Description is required"),
  service: Yup.object({
    service_name: Yup.string().required("Service name is Required"),
  }),
  industry: Yup.array().min(1, "Industry is Required"),
});

export const verificationValidation = Yup.object({});

export const basicInfoValidations = Yup.object({
  brand_name: Yup.string().required("Brand Name is required"),
  registered_business_name: Yup.string().required("Business Name is required"),
  // company_type: Yup.string().required("Company Type is required"),
  // mobile: Yup.object({
  //   mobile_number: Yup.string()
  //     .required("Mobile is required")
  //     .test(
  //       "len",
  //       "Please Enter a Valid Mobile Number",
  //       (val) => val.length === 10
  //     ),
  // }),
  // year_of_establishment: Yup.string().required(
  //   "Year of Establishment is required"
  // ),
  // turnover: Yup.string().required("TurnOver is required"),
  // number_of_employees: Yup.string().required("Number of Employees is required"),
  // number_of_clients: Yup.string().required("Number of Clients is required"),
  // website: Yup.string().url("Please enter a Valid Url"),
  // logo: Yup.object({
  //   url: Yup.string().required("Logo is required"),
  // }),
  // rating: Yup.string().required("Rating is required"),
  // description: Yup.string().required("Description is required"),
});

export const languageValidations = Yup.object({
  language: Yup.string().required("Language is required"),
});

export const skillsValidations = Yup.object({
  skills: Yup.string().required("Skills is required"),
});

export const techStackValidations = Yup.object({
  tech: Yup.string().required("Tech Stack is required"),
});

export const tagValidations = Yup.object({
  tag: Yup.string().required("Tag is required"),
});
export const notesValidations = Yup.object({
  note: Yup.string().required("Notes is required"),
});

// export const expertiseValidator = Yup.object({
//   expertise_breakup: Yup.array().of(
//     Yup.object({
//       stack_tash: Yup.string().required("Stack tash is equired"),
//       noe_1_3: Yup.number()
//         .typeError("you must specify a number")
//         .required("NOE is required"),
//       noe_4_8: Yup.number()
//         .typeError("you must specify a number")
//         .required("NOE is required"),
//       noe_8_above: Yup.number()
//         .typeError("you must specify a number")
//         .required("NOE is required"),
//     })
//   ),
// });
export const pocValidations = Yup.object({
  first_name: Yup.string().required("First Name is required"),
  // last_name: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email Id is required"),
  // designation: Yup.string().required("Designation is required"),
  // age_range: Yup.string().required("Age Range  is required"),
  mobile: Yup.object({
    mobile_number: Yup.string().required("Mobile Number is Required"),
  }),
  // personality: Yup.string().required("Personality is required"),
});

export const expertiseValidations = Yup.object({
  stack_tash: Yup.string().required("Stack Tash is required"),
  NOE_1_3: Yup.number()
    .typeError("Must be a number")
    .required("Number of Employees is required"),
  NOE_4_8: Yup.number()
    .typeError("Must be a number")
    .required("Number of Employees is required"),
  NOE_8_plus: Yup.number()
    .typeError("Must be a number")
    .required("Number of Employees  is required"),
});

export const teaminfoValidations = Yup.object({
  role: Yup.string().required("Role is required"),
  nop: Yup.number()
    .required("Number of people is required")
    .typeError("you must specify a number"),
});

export const turnoverValidations = Yup.object({
  year: Yup.string().required("Year is required"),
  turnover: Yup.string().required("Turnover is required"),
});

export const createNewAccountValidation = Yup.object({
  first_name: Yup.string().required("First Name is Required"),
  last_name: Yup.string().required("Last Name is Required"),
  email: Yup.string()
    .required("Email is Required")
    .email("Please Enter a Valid email"),
  mobile: Yup.object({
    mobile_number: Yup.string()
      .required("Mobile is Required")
      .max(10, "Please Enter a Valid Mobile Number")
      .min(10, "Please Enter a Valid Mobile Number"),
  }),
});
