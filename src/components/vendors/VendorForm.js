import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Typography } from "@mui/material";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
  formStyles: {
    width: 550,
  },
  formControl: {
    //margin: theme.spacing(1),
    minWidth: 150,
    marginTop: 20,
  },

  submitButton: {
    borderRadius: 10,
    height: 40,
    width: 100,
    marginLeft: 220,
    marginTop: 20,
    marginBottom: 20,
    color: "white",
    backgroundColor: theme.palette.common.blue,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
    },
    accountType: {
      minWidth: 150,
      marginTop: 30,
    },
    formSectionHeader: {
      color: theme.palette.common.blue,
    },
  },
}));

function VendorForm(props) {
  const classes = useStyles();
  const [value, setValue] = useState("corporate");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [accountType, setAccountType] = useState("");
  const [bankCountry, setBankCountry] = useState("");
  const [enforceGlobalPlatformPolicy, setEnforceGlobalPlatformPolicy] =
    useState("true");
  const [
    maxNumberOfPaymentInstallmentAllowed,
    setMaxNumberOfPaymentInstallmentAllowed,
  ] = useState("1");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };

  const handleBankCountryChange = (event) => {
    setBankCountry(event.target.value);
  };

  const handleGlobalPolicyChange = (event) => {
    setEnforceGlobalPlatformPolicy(event.target.value);
  };

  const handleMaximumPaymentInstallmentChange = (event) => {
    setMaxNumberOfPaymentInstallmentAllowed(event.target.value);
  };

  const renderNameField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Enter the name of the Vendor"
        variant="outlined"
        label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const renderDescriptionField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        error={touched && invalid}
        //placeholder="category description"
        variant="outlined"
        helperText="Describe the Vendor"
        label={label}
        id={input.name}
        // value={formInput.description}
        fullWidth
        type={type}
        style={{ marginTop: 20 }}
        multiline={true}
        minRows={8}
        {...custom}
        // onChange={handleInput}
      />
    );
  };

  const renderImageField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        id={input.name}
        variant="outlined"
        type={type}
        fullWidth
        style={{ marginTop: 20 }}
        helperText="Upload Category Image"
      />
    );
  };

  const renderTypeRadioField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl component="fieldset">
          <FormLabel style={{ color: "blue" }} component="legend">
            Vendor Type
          </FormLabel>
          <RadioGroup
            aria-label="type"
            name="type"
            value={value}
            onChange={handleChange}
          >
            <Grid item container direction="row">
              <Grid item>
                <FormControlLabel
                  value="corporate"
                  control={<Radio />}
                  label="Corporate"
                />
              </Grid>

              <Grid item></Grid>
              <FormControlLabel
                value="individual"
                control={<Radio />}
                label="individual"
              />
            </Grid>
          </RadioGroup>
        </FormControl>
      </Box>
    );
  };

  const renderVendorAddressField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Enter the Vendor Address Location"
        variant="outlined"
        label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        multiline={true}
        minRows={2}
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const renderVendorLocationCityField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined" className={classes.formControl}>
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="city"
            id="city_id"
            value={city}
            onChange={handleCityChange}
            label="City"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"apapa"}>Apapa</MenuItem>
            <MenuItem value={"aba"}>Aba</MenuItem>
            <MenuItem value={"kano"}>Kano</MenuItem>
          </Select>
          <FormHelperText>Select City</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderVendorLocationStateField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined" className={classes.formControl}>
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="state"
            id="state_id"
            value={state}
            onChange={handleStateChange}
            label="State"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"lagos"}>Lagos</MenuItem>
            <MenuItem value={"abia"}>Abia</MenuItem>
            <MenuItem value={"kano"}>Kano</MenuItem>
          </Select>
          <FormHelperText>Select State/Region/Province</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderVendorLocationCountryField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined" className={classes.formControl}>
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="country"
            id="country_id"
            value={country}
            onChange={handleCountryChange}
            label="country"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"nigeria"}>Nigeria</MenuItem>
            <MenuItem value={"ghana"}>Ghana</MenuItem>
            <MenuItem value={"Togo"}>Togo</MenuItem>
          </Select>
          <FormHelperText>Select Country</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderVendorContactNameField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Enter the contact Person's Name"
        variant="outlined"
        label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const renderVendorPhoneNumberField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Enter the contact person's phone numbers"
        variant="outlined"
        label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const renderVendorEmailAddressField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Enter the contact Person's email address"
        variant="outlined"
        label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const renderBankAccountTypeField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined" className={classes.accountType}>
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="accountType"
            id="accountType"
            value={accountType}
            onChange={handleAccountTypeChange}
            label="accountType"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"savings"}>Savings</MenuItem>
            <MenuItem value={"current"}>Current</MenuItem>
            <MenuItem value={"domicilary"}>Domicilary</MenuItem>
          </Select>
          <FormHelperText>Select Account Type</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderBankAccountNumberField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Enter the bank account number"
        variant="outlined"
        label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const renderBankAccountNameField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Enter the bank account name"
        variant="outlined"
        label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const renderBankCountryField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="backCountry"
            id="bankCountry"
            value={bankCountry}
            onChange={handleBankCountryChange}
            label="Bank Country"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"nigeria"}>Nigeria</MenuItem>
            <MenuItem value={"ghana"}>Ghana</MenuItem>
            <MenuItem value={"Togo"}>Togo</MenuItem>
          </Select>
          <FormHelperText>Select Bank Country</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderBankSwiftCodeNumberField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Enter the bank Swift code"
        variant="outlined"
        label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const renderBankIBANField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Enter the bank IBAN number"
        variant="outlined"
        label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const renderBankNameField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Enter the bank name"
        variant="outlined"
        label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const renderEnforceGlobalPlatformPolicyField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Enforce Platform Global Policy Contract?
          </FormLabel>
          <RadioGroup
            aria-label="enforceGlobalPlatformPolicy"
            name="enforceGlobalPlatformPolicy"
            value={enforceGlobalPlatformPolicy}
            onChange={handleGlobalPolicyChange}
          >
            <Grid item container direction="row">
              <Grid item>
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Yes"
                />
              </Grid>

              <Grid item></Grid>
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </Grid>
          </RadioGroup>
        </FormControl>
      </Box>
    );
  };

  const rendermaxNumberOfPaymentInstallmentAllowed = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Choose maximum number of payment installments
          </FormLabel>
          <RadioGroup
            aria-label="maxNumberOfPaymentInstallmentAllowed"
            name="maxNumberOfPaymentInstallmentAllowed"
            value={maxNumberOfPaymentInstallmentAllowed}
            onChange={handleMaximumPaymentInstallmentChange}
          >
            <Grid item container direction="row">
              <Grid item>
                <FormControlLabel value="1" control={<Radio />} label="One" />
              </Grid>

              <Grid item>
                <FormControlLabel value="2" control={<Radio />} label="Two" />
              </Grid>
              <Grid item>
                <FormControlLabel value="3" control={<Radio />} label="Three" />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
      </Box>
    );
  };

  const renderAgreedInitialPercentagePaymentField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Enter initial % payment"
        variant="outlined"
        //label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const renderAgreedDaysToPaymentRemittanceField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Days from payment to remittance"
        variant="outlined"
        //label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const renderPlatformPercentageChargeField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Platform percentage charge"
        variant="outlined"
        //label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const renderAgreedSecondPercentagePaymentField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Enter second % payment"
        variant="outlined"
        //label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const renderAgreedSecondDaysToPaymentRemittanceField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Days from payment to remittance"
        variant="outlined"
        //label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const renderSecondPlatformPercentageChargeField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Platform percentage charge"
        variant="outlined"
        //label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const renderAgreedThirdPercentagePaymentField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Enter third % payment"
        variant="outlined"
        //label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const renderAgreedThirdDaysToPaymentRemittanceField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Days from payment to remittance"
        variant="outlined"
        //label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const renderThirdPlatformPercentageChargeField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Platform percentage charge"
        variant="outlined"
        //label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };

  return (
    <div className={classes.root}>
      <form id="vendorCategory" className={classes.formStyles}>
        <Grid container style={{ marginTop: 20 }} justifyContent="center">
          <FormLabel
            style={{ color: "blue", fontSize: "1.5em" }}
            component="legend"
          >
            Enter Vendor Details
          </FormLabel>
        </Grid>
        <Box
          sx={{
            width: 550,

            height: 420,
          }}
          noValidate
          autoComplete="off"
        >
          <Field
            label=""
            id="name"
            name="name"
            type="text"
            component={renderNameField}
            autoComplete="off"
            style={{ marginTop: 20 }}
          />

          <Field
            label=""
            id="name"
            name="name"
            type="text"
            component={renderDescriptionField}
          />

          <Grid container direction="column" style={{ marginTop: 30 }}>
            <Grid item>
              <Field
                label=""
                id="type"
                name="type"
                component={renderTypeRadioField}
              />
            </Grid>

            <Grid container style={{ marginTop: 20 }}>
              <FormLabel style={{ color: "blue" }} component="legend">
                Enter Vendor Contacts
              </FormLabel>
            </Grid>
            <Grid container direction="column" style={{ marginTop: 30 }}>
              <Grid item>
                <Field
                  label=""
                  id="address"
                  name="address"
                  type="text"
                  component={renderVendorAddressField}
                />
              </Grid>
              <Grid container direction="row" style={{ marginTop: 20 }}>
                <Grid item>
                  <Field
                    label=""
                    id="city"
                    name="city"
                    component={renderVendorLocationCityField}
                  />
                </Grid>

                <Grid item style={{ marginLeft: 30 }}>
                  <Field
                    label=""
                    id="state"
                    name="state"
                    component={renderVendorLocationStateField}
                  />
                </Grid>

                <Grid item style={{ marginLeft: 30 }}>
                  <Field
                    label=""
                    id="country"
                    name="country"
                    component={renderVendorLocationCountryField}
                  />
                </Grid>
              </Grid>
              <Grid item style={{ marginTop: 30 }}>
                <Field
                  label=""
                  id="contactName"
                  name="contactName"
                  component={renderVendorContactNameField}
                />
              </Grid>
              <Grid item container direction="row" style={{ marginTop: 30 }}>
                <Grid item>
                  <Field
                    label=""
                    id="phoneNumber"
                    name="phoneNumber"
                    component={renderVendorPhoneNumberField}
                  />
                </Grid>
                <Grid item style={{ marginLeft: 30, minWidth: "50%" }}>
                  <Field
                    label=""
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    component={renderVendorEmailAddressField}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item container style={{ marginTop: 20 }}>
              <FormLabel style={{ color: "blue" }} component="legend">
                Enter Vendor Bank Details
              </FormLabel>
            </Grid>
            <Grid item container direction="row" style={{ marginTop: 20 }}>
              <Grid item style={{ marginTop: 20 }}>
                <Field
                  label=""
                  id="bankAccountType"
                  name="bankAccountType"
                  component={renderBankAccountTypeField}
                  className={classes.dropDown}
                />
              </Grid>
              <Grid item style={{ marginLeft: 20, marginTop: 20 }}>
                <Field
                  label=""
                  id="bankAccountNumber"
                  name="bankAccountNumber"
                  type="number"
                  component={renderBankAccountNumberField}
                />
              </Grid>
              <Grid item style={{ marginLeft: 20, marginTop: 20 }}>
                <Field
                  label=""
                  id="bankAccountName"
                  name="bankAccountName"
                  type="text"
                  component={renderBankAccountNameField}
                />
              </Grid>
            </Grid>
            <Grid item container direction="row">
              <Grid item style={{ marginTop: 20 }}>
                <Field
                  label=""
                  id="bankCountry"
                  name="bankCountry"
                  component={renderBankCountryField}
                />
              </Grid>
              <Grid item style={{ marginLeft: 20, marginTop: 20 }}>
                <Field
                  label=""
                  id="bankSwiftCodeNumber"
                  name="bankSwiftCodeNumber"
                  type="text"
                  component={renderBankSwiftCodeNumberField}
                />
              </Grid>
              <Grid item style={{ marginLeft: 20, marginTop: 20 }}>
                <Field
                  label=""
                  id="bankIBAN"
                  name="bankIBAN"
                  type="text"
                  component={renderBankIBANField}
                />
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: 20 }}>
              <Field
                label=""
                id="bankName"
                name="bankName"
                type="text"
                component={renderBankNameField}
              />
            </Grid>
            <FormLabel
              style={{ color: "blue", marginTop: 30 }}
              component="legend"
            >
              Vendor Contract
            </FormLabel>

            <Grid item style={{ marginTop: 20 }}>
              <Field
                label=""
                id="enforceGlobalPlatformPolicy"
                name="enforceGlobalPlatformPolicy"
                component={renderEnforceGlobalPlatformPolicyField}
              />
            </Grid>
            <Grid item style={{ marginTop: 20 }}>
              <Field
                label=""
                id="maxNumberOfPaymentInstallmentAllowed"
                name="maxNumberOfPaymentInstallmentAllowed"
                type="number"
                component={rendermaxNumberOfPaymentInstallmentAllowed}
              />
            </Grid>
            <FormLabel style={{ marginTop: 20 }} component="legend">
              Initial Payment Details
            </FormLabel>
            <Grid item container direction="row">
              <Grid item container direction="row">
                <Grid item style={{ marginTop: 20, width: "28%" }}>
                  <Field
                    label="Enter agreed initial percentage payment"
                    id="agreedInitialPercentagePayment"
                    name="agreedInitialPercentagePayment"
                    type="number"
                    component={renderAgreedInitialPercentagePaymentField}
                  />
                </Grid>
                <Grid
                  item
                  style={{ marginLeft: 5, marginTop: 20, width: "38%" }}
                >
                  <Field
                    label="Enter agreed number of days to remittance"
                    id="agreedDaysToPaymentRemittance"
                    name="agreedDaysToPaymentRemittance"
                    type="number"
                    component={renderAgreedDaysToPaymentRemittanceField}
                  />
                </Grid>
                <Grid
                  item
                  style={{ marginLeft: 5, marginTop: 20, width: "31%" }}
                >
                  <Field
                    label="Enter Platform Percentage Charge"
                    id="platformPercentageCharge"
                    name="platformPercentageCharge"
                    type="number"
                    component={renderPlatformPercentageChargeField}
                  />
                </Grid>
              </Grid>
            </Grid>
            <FormLabel style={{ marginTop: 20 }} component="legend">
              Second Payment Details
            </FormLabel>
            <Grid item container direction="row">
              <Grid item container direction="row">
                <Grid item style={{ marginTop: 20, width: "28%" }}>
                  <Field
                    label="Enter agreed initial percentage payment"
                    id="second_agreedInitialPercentagePayment"
                    name="second_agreedInitialPercentagePayment"
                    type="number"
                    component={renderAgreedSecondPercentagePaymentField}
                  />
                </Grid>
                <Grid
                  item
                  style={{ marginLeft: 5, marginTop: 20, width: "38%" }}
                >
                  <Field
                    label="Enter agreed number of days to remittance"
                    id="second_agreedDaysToPaymentRemittance"
                    name="second_agreedDaysToPaymentRemittance"
                    type="number"
                    component={renderAgreedSecondDaysToPaymentRemittanceField}
                  />
                </Grid>
                <Grid
                  item
                  style={{ marginLeft: 5, marginTop: 20, width: "31%" }}
                >
                  <Field
                    label="Enter Platform Percentage Charge"
                    id="second_platformPercentageCharge"
                    name="second_platformPercentageCharge"
                    type="number"
                    component={renderSecondPlatformPercentageChargeField}
                  />
                </Grid>
              </Grid>
            </Grid>
            <FormLabel style={{ marginTop: 20 }} component="legend">
              Third Payment Details
            </FormLabel>
            <Grid item container direction="row">
              <Grid item container direction="row">
                <Grid item style={{ marginTop: 20, width: "28%" }}>
                  <Field
                    label="Enter agreed initial percentage payment"
                    id="third_agreedInitialPercentagePayment"
                    name="third_agreedInitialPercentagePayment"
                    type="number"
                    component={renderAgreedThirdPercentagePaymentField}
                  />
                </Grid>
                <Grid
                  item
                  style={{ marginLeft: 5, marginTop: 20, width: "38%" }}
                >
                  <Field
                    label="Enter agreed number of days to remittance"
                    id="third_agreedDaysToPaymentRemittance"
                    name="third_agreedDaysToPaymentRemittance"
                    type="number"
                    component={renderAgreedThirdDaysToPaymentRemittanceField}
                  />
                </Grid>
                <Grid
                  item
                  style={{ marginLeft: 5, marginTop: 20, width: "31%" }}
                >
                  <Field
                    label="Enter Platform Percentage Charge"
                    id="third_platformPercentageCharge"
                    name="third_platformPercentageCharge"
                    type="number"
                    component={renderThirdPlatformPercentageChargeField}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            className={classes.submitButton}
            onClick={props.handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default reduxForm({
  form: "vendorForm",
})(VendorForm);
