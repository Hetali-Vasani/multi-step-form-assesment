import {
  Grid2 as Grid,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import {
  COMPANY_SIZE,
  COMPANY_WFH_POLICY,
  COMPANY_WORKING_FIELDS,
} from "../constants/FormConstant";

const CompanyDetail = ({ formik }) => {
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
        <FormControl
          component="fieldset"
          variant="standard"
          error={formik.touched.fields && Boolean(formik.errors.fields)}
        >
          <FormLabel component="legend">
            In which field you company is working ?
          </FormLabel>
          <FormGroup>
            {COMPANY_WORKING_FIELDS.map((field) => (
              <FormControlLabel
                key={field.name}
                control={
                  <Checkbox
                    checked={formik.values.fields?.includes(field.name)}
                    onChange={(e) =>
                      formik.setFieldValue(
                        "fields",
                        e.target.checked
                          ? [...formik.values.fields, e.target.name]
                          : formik.values.fields.filter(
                              (f) => f !== e.target.name
                            )
                      )
                    }
                    name={field.name}
                  />
                }
                label={field.label}
              />
            ))}
          </FormGroup>
          <FormHelperText>
            {formik.touched.fields && formik.errors.fields}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl
          sx={{ minWidth: 120 }}
          size="small"
          error={
            formik.touched.companySize && Boolean(formik.errors.companySize)
          }
        >
          <InputLabel id="company-size-label">Company Size</InputLabel>
          <Select
            labelId="company-size-label"
            id="companySize"
            label="Company Size"
            name="companySize"
            value={formik.values.companySize}
            onChange={formik.handleChange}
          >
            {COMPANY_SIZE.map((size) => (
              <MenuItem key={size} value={size}>
                {size}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {formik.touched.companySize && formik.errors.companySize}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl>
          <FormLabel id="wfh-radio-label">
            Does company have WFH policy ?
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="wfh-radio-label"
            name="wfhPolicy"
            value={formik.values.wfhPolicy}
            onChange={formik.handleChange}
          >
            {COMPANY_WFH_POLICY.map((option) => (
              <FormControlLabel
                value={option.value}
                control={<Radio />}
                label={option.label}
                key={option.name}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default CompanyDetail;
