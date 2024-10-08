import { useMemo, useState } from "react";
import * as Yup from "yup";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid2 as Grid,
  Button,
  Typography,
} from "@mui/material";
import PersonalDetail from "../components/PersonalDetail";
import CompanyDetail from "../components/CompanyDetail";
import PlanDetail from "../components/PlanDetail";
import { useFormik } from "formik";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { formAction } from "../redux/actions/form.action";
import {
  SAVE_COMPANY_DETAIL,
  SAVE_PERSONAL_DETAIL,
  SAVE_PLAN_DETAIL,
} from "../redux/constants/form.constant";
import { STEPS } from "../constants/FormConstant";
import {
  planValidationSchema,
  companyValidationSchema,
  personalValidationSchema,
} from "../utils/schema";

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmited, setIsSubmited] = useState(false);
  const dispatch = useDispatch();
  const { personalDetail, companyDetail, planDetail } = useSelector(
    (state) => state.mutiStepFrom
  );

  const handleBack = () => {
    formik.setSubmitting(true);
    setActiveStep((prevStep) => prevStep - 1);
    setTimeout(() => {
      formik.setSubmitting(false);
    }, 1000);
  };
  const personalDetailInitialvalues = {
    firstName: personalDetail.firstName ? personalDetail.firstName : "",
    lastName: personalDetail.lastName ? personalDetail.lastName : "",
    email: personalDetail.email ? personalDetail.email : "",
    companyName: personalDetail.companyName ? personalDetail.companyName : "",
    companyWebsite: personalDetail.companyWebsite
      ? personalDetail.companyWebsite
      : "",
    state: personalDetail.state ? personalDetail.state : "",
    zipCode: personalDetail.zipCode ? personalDetail.zipCode : "",
  };
  const companyDetailInitialvalues = {
    fields: companyDetail.fields ? companyDetail.fields : [],
    companySize: companyDetail.companySize ? companyDetail.companySize : "",
    wfhPolicy: companyDetail.wfhPolicy ? companyDetail.wfhPolicy : "no",
  };
  const planDetailInitialvalues = {
    date: companyDetail.date ? companyDetail.date : dayjs(new Date()),
    numberOfUsers: companyDetail.numberOfUsers
      ? companyDetail.numberOfUsers
      : 0,
    planType: companyDetail.planType ? companyDetail.planType : "month",
    plan: companyDetail.plan ? companyDetail.plan : "",
    planPrice: companyDetail.planPrice ? companyDetail.planPrice : 0,
  };

  const formInitialValue = useMemo(() => {
    switch (activeStep) {
      case 0:
        return personalDetailInitialvalues;
      case 1:
        return companyDetailInitialvalues;
      case 2:
        return planDetailInitialvalues;
      default:
        return personalDetailInitialvalues;
    }
  }, [activeStep]);
  const formValidationScheme = useMemo(() => {
    switch (activeStep) {
      case 0:
        return personalValidationSchema;
      case 1:
        return companyValidationSchema;
      case 2:
        return planValidationSchema;
      default:
        return personalValidationSchema;
    }
  }, [activeStep]);
  const actionType = useMemo(() => {
    switch (activeStep) {
      case 0:
        return SAVE_PERSONAL_DETAIL;
      case 1:
        return SAVE_COMPANY_DETAIL;
      case 2:
        return SAVE_PLAN_DETAIL;
      default:
        return SAVE_PERSONAL_DETAIL;
    }
  }, [activeStep]);

  const formik = useFormik({
    initialValues: formInitialValue,
    validationSchema: Yup.object().shape(formValidationScheme),
    validateOnChange: true,
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (activeStep === STEPS.length - 1) {
        alert("Form data has been submitted sucessfully !!");
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
      dispatch(formAction.saveForm(values, actionType));
    },
  });
  const handleFormSubmit = () => {
    formik.handleSubmit();
    setIsSubmited(true);
  };
  const formBody = (step) => {
    switch (step) {
      case 0:
        return <PersonalDetail formik={formik} />;
      case 1:
        return <CompanyDetail formik={formik} />;
      case 2:
        return <PlanDetail formik={formik} />;
      default:
        return <div>404: Not Found</div>;
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "600px",
        padding: 2,
      }}
    >
      <Stepper activeStep={activeStep} orientation="horizontal">
        {STEPS.map((step) => (
          <Step key={step.key}>
            <StepLabel>{step.name}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container display="flex" flexDirection="column">
        <Grid item xs={12} sx={{ padding: "20px" }}>
          {formik.isSubmitting ? "loading....." : formBody(activeStep)}
        </Grid>
      </Grid>
      <Grid container display="flex" flexDirection="row">
        <Grid item xs={12}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          {activeStep === STEPS.length - 1 ? (
            <Button onClick={handleFormSubmit}>Submit</Button>
          ) : (
            <Button onClick={formik.handleSubmit}>Next</Button>
          )}
        </Grid>
      </Grid>
      {isSubmited &&
        activeStep === STEPS.length - 1 &&
        Object.keys(formik.errors).length === 0 && (
          <Grid container>
            <Typography>Result is :</Typography>
            <Grid>Personal details : {JSON.stringify(personalDetail)}</Grid>
            <Grid>Company details: {JSON.stringify(companyDetail)}</Grid>
            <Grid>Plan details:{JSON.stringify(planDetail)}</Grid>
          </Grid>
        )}
    </Box>
  );
};

export default Form;
