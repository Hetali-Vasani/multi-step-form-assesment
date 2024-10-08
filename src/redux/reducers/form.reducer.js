import dayjs from "dayjs";
import {
  SAVE_COMPANY_DETAIL,
  SAVE_PERSONAL_DETAIL,
  SAVE_PLAN_DETAIL,
} from "../constants/form.constant";

const personalDetailInitialvalues = {
  firstName: "",
  lastName: "",
  email: "",
  companyName: "",
  companyWebsite: "",
  state: "",
  zipCode: "",
};
const companyDetailInitialvalues = {
  fields: [],
  companySize: "",
  wfhPolicy: "no",
};
const planDetailInitialvalues = {
  date: dayjs(new Date()),
  numberOfUsers: 0,
  planType: "month",
  plan: "",
  planPrice: 0,
};

const initialState = {
  personalDetail: personalDetailInitialvalues,
  companyDetail: companyDetailInitialvalues,
  planDetail: planDetailInitialvalues,
};
export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PERSONAL_DETAIL:
      return {
        ...state,
        personalDetail: {
          ...state.personalDetail,
          ...action.payload,
        },
      };
    case SAVE_COMPANY_DETAIL:
      return {
        ...state,
        companyDetail: {
          ...state.companyDetail,
          ...action.payload,
        },
      };
    case SAVE_PLAN_DETAIL:
      return {
        ...state,
        planDetail: {
          ...state.planDetail,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
