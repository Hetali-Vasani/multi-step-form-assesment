export const COMPANY_SIZE = ["1-10", "10-20", "20-30", "40+"];
export const COMPANY_WORKING_FIELDS = [
  {
    label: "Web Development",
    name: "web_development",
    defaultValue: false,
  },
  {
    label: "Mobile Application",
    name: "mobile_application",
    defaultValue: false,
  },
  {
    label: "Graphics Design",
    name: "graphics_design",
    defaultValue: false,
  },
  {
    label: "Digital Marketing",
    name: "digital_marketing",
    defaultValue: false,
  },
];
export const COMPANY_WFH_POLICY = [
  {
    name: "yes",
    label: "Yes",
    value: "yes",
  },
  {
    name: "no",
    label: "No",
    value: "no",
  },
];
export const STATES = {
  AN: "Andaman and Nicobar Islands",
  AP: "Andhra Pradesh",
  AR: "Arunachal Pradesh",
  AS: "Assam",
  BR: "Bihar",
  CG: "Chandigarh",
  CH: "Chhattisgarh",
  DN: "Dadra and Nagar Haveli",
  DD: "Daman and Diu",
  DL: "Delhi",
  GA: "Goa",
  GJ: "Gujarat",
  HR: "Haryana",
  HP: "Himachal Pradesh",
  JK: "Jammu and Kashmir",
  JH: "Jharkhand",
  KA: "Karnataka",
  KL: "Kerala",
  LA: "Ladakh",
  LD: "Lakshadweep",
  MP: "Madhya Pradesh",
  MH: "Maharashtra",
  MN: "Manipur",
  ML: "Meghalaya",
  MZ: "Mizoram",
  NL: "Nagaland",
  OR: "Odisha",
  PY: "Puducherry",
  PB: "Punjab",
  RJ: "Rajasthan",
  SK: "Sikkim",
  TN: "Tamil Nadu",
  TS: "Telangana",
  TR: "Tripura",
  UP: "Uttar Pradesh",
  UK: "Uttarakhand",
  WB: "West Bengal",
};
export const personalFields = [
  {
    label: "First Name",
    name: "first_name",
    type: "text",
    placeholder: "Enter first name",
    defaultValue: "",
  },
  {
    label: "Last Name",
    name: "last_name",
    type: "text",
    placeholder: "Enter last name",
    defaultValue: "",
  },
  {
    label: "Email",
    name: "email",
    type: "text",
    placeholder: "Enter email",
    defaultValue: "",
  },
  {
    label: "Company Name",
    name: "company_name",
    type: "text",
    placeholder: "Enter company name",
    defaultValue: "",
  },
  {
    label: "Company Website",
    name: "company_website",
    type: "text",
    placeholder: "Enter Company Website",
    defaultValue: "",
  },
  {
    label: "State",
    name: "state",
    type: "select",
    placeholder: "Select State",
    defaultValue: "",
    options: STATES,
  },
  {
    label: "Zip Code",
    name: "zip_code",
    type: "text",
    placeholder: "Enter Zip Code",
    defaultValue: "",
  },
];
export const companyFields = [
  {
    label: "In which field you company is working ?",
    type: "checkbox",
    radioGroup: COMPANY_WORKING_FIELDS,
  },
  {
    label: "Company size",
    name: "company_size",
    type: "select",
    placeholder: "Select Company size",
    defaultValue: "",
    options: COMPANY_SIZE,
  },
  {
    label: "Does company have WFH policy ?",
    name: "wfh_policy",
    type: "radio",
    radioGroup: COMPANY_WFH_POLICY,
  },
];
export const PLAN_TYPES = {
  year: {
    name: "Year",
    plans: [
      { type: "gold", name: "Gold", price: 20 },
      { type: "titanium", name: "Titanium", price: 50 },
    ],
  },
  month: {
    name: "Month",
    plans: [
      { type: "gold", name: "Gold", price: 5 },
      { type: "titanium", name: "Titanium", price: 10 },
    ],
  },
};
export const STEPS = [
  {
    key: "personal_info",
    name: "Personal Information",
  },
  {
    key: "company_info",
    name: "Company Information",
  },
  {
    key: "plan_selection",
    name: "Plan Selection",
  },
];
