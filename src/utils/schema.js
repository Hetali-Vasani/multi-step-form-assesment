import * as Yup from "yup";

export const personalValidationSchema = {
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  companyName: Yup.string().required("Company Name is required"),
  companyWebsite: Yup.string()
    .url("Please enter a valid URL")
    .required("Company website is required"),
  state: Yup.string().required("State is required"),
  zipCode: Yup.string().required("Zipcode is required"),
};
export const companyValidationSchema = {
  fields: Yup.array()
    .min(1, "Please check at least one checkbox")
    .required("Please check the checkbox"),
  companySize: Yup.string().required("Please select company size"),
};
export const planValidationSchema = {
  date: Yup.string().required("Please check the checkbox"),
  numberOfUsers: Yup.number()
    .required("Please enter the number of users")
    .min(1, "Number of users must be greater than 0")
    .max(99, "Number of users must be less than 100")
    .typeError("Please enter a valid number"),
  plan: Yup.string().required("Select plan"),
};
