import {
  TextField,
  Grid2 as Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { STATES } from "../constants/FormConstant";

const PersonalDetail = ({ formik }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          name="firstName"
          label="First Name"
          variant="outlined"
          size="small"
          fullWidth
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="lastName"
          label="Last Name"
          variant="outlined"
          size="small"
          fullWidth
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          size="small"
          type="email"
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="companyName"
          label="Company Name"
          variant="outlined"
          fullWidth
          size="small"
          value={formik.values.companyName}
          onChange={formik.handleChange}
          error={
            formik.touched.companyName && Boolean(formik.errors.companyName)
          }
          helperText={formik.touched.companyName && formik.errors.companyName}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="companyWebsite"
          label="Company Website"
          variant="outlined"
          fullWidth
          size="small"
          value={formik.values.companyWebsite}
          onChange={formik.handleChange}
          error={
            formik.touched.companyWebsite &&
            Boolean(formik.errors.companyWebsite)
          }
          helperText={
            formik.touched.companyWebsite && formik.errors.companyWebsite
          }
        />
      </Grid>
      <Grid item xs={6}>
        <FormControl
          sx={{ minWidth: 120 }}
          size="small"
          error={formik.touched.state && Boolean(formik.errors.state)}
        >
          <InputLabel id="state-label">State</InputLabel>
          <Select
            labelId="state-label"
            label="State"
            value={formik.values.state}
            onChange={(e) => formik.setFieldValue("state", e.target.value)}
          >
            {Object.entries(STATES).map(([stateKey, state]) => (
              <MenuItem key={stateKey} value={stateKey}>
                {state}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {formik.touched.state && formik.errors.state}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="zipCode"
          label="Zip Code"
          variant="outlined"
          size="small"
          fullWidth
          value={formik.values.zipCode}
          onChange={formik.handleChange}
          error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
          helperText={formik.touched.zipCode && formik.errors.zipCode}
        />
      </Grid>
    </Grid>
  );
};

export default PersonalDetail;
