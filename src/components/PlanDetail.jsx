import {
  FormControl,
  FormHelperText,
  Grid2 as Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { PLAN_TYPES } from "../constants/FormConstant";

const PlanDetail = ({ formik }) => {
  const calculateTotalprice = () => {
    const fetchPlan = PLAN_TYPES[formik.values.planType]["plans"].filter(
      (p) => p.type === formik.values.plan
    )[0];
    return fetchPlan && formik.values.numberOfUsers
      ? fetchPlan["price"] * formik.values.numberOfUsers
      : 0;
  };
  return (
    <Grid
      container
      spacing={2}
      display="flex"
      flexDirection="column"
      alignContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={6}>
        <DatePicker
          label="Plan Date"
          value={formik.values.date}
          onChange={(dateValue) => formik.setFieldValue("date", dateValue)}
        />
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth sx={{ minWidth: 120 }}>
          <InputLabel variant="standard" htmlFor="plan-type-select">
            Select Plan Type
          </InputLabel>
          <Select
            id="plan-type-select"
            label="Select Plan Type"
            value={formik.values.planType}
            onChange={(e) => formik.setFieldValue("planType", e.target.value)}
          >
            <MenuItem value="month">Month</MenuItem>
            <MenuItem value="year">Year</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl
          fullWidth
          sx={{ minWidth: 120 }}
          error={formik.touched.plan && Boolean(formik.errors.plan)}
        >
          <InputLabel variant="standard" htmlFor="plan-select">
            Select Plan
          </InputLabel>
          <Select
            id="plan-select"
            label="Select Plan"
            value={formik.values.plan}
            onChange={(e) => {
              formik.setFieldValue("plan", e.target.value);
            }}
          >
            {PLAN_TYPES[formik.values.planType]["plans"].map((plan) => (
              <MenuItem value={plan.type} key={plan.type}>
                {plan.name} {plan.price}$
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {formik.touched.plan && formik.errors.plan}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="numberOfUsers"
          label="Number of users"
          variant="outlined"
          size="small"
          fullWidth
          type="number"
          value={formik.values.numberOfUsers}
          onChange={formik.handleChange}
          error={
            formik.touched.numberOfUsers && Boolean(formik.errors.numberOfUsers)
          }
          helperText={
            formik.touched.numberOfUsers && formik.errors.numberOfUsers
          }
        />
      </Grid>
      <Typography>
        Total is {calculateTotalprice()}
        {" $"}
      </Typography>
    </Grid>
  );
};

export default PlanDetail;
