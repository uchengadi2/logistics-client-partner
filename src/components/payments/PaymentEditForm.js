import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
  },
  formStyles: {
    width: 600,
  },
  submitButton: {
    borderRadius: 10,
    height: 40,
    width: 150,
    marginLeft: 180,
    marginTop: 20,
    marginBottom: 20,
    color: "white",
    backgroundColor: theme.palette.common.blue,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
    },
  },
}));

function PaymentEditForm(props) {
  const classes = useStyles();

  const [orderPayment, setOrderPayment] = useState();
  const [operationalCurrency, setOperationalCurrency] = useState();
  const [preferredCurrency, setPreferredCurrency] = useState();

  const handleOrderPaymentChange = (event) => {
    setOrderPayment(event.target.value);
  };

  const handleOperationalCurrencyChange = (event) => {
    setOperationalCurrency(event.target.value);
  };

  const handlePreferredCurrencyChange = (event) => {
    setPreferredCurrency(event.target.value);
  };

  const params = props.params;

  const renderOrderForPaymentField = ({
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
        helperText="Order Number"
        variant="outlined"
        //label={label}
        id={input.name}
        value={params.orderNumberForPayment}
        fullWidth
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const renderOrderedCustomerid = ({
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
        helperText="Customer that made the Order"
        variant="outlined"
        //label={label}
        id={input.name}
        value={params.orderedCustomer}
        fullWidth
        //required
        type={type}
        {...custom}

        //onChange={handleInput}
      />
    );
  };

  const renderSelectablePaymentPhaseField = ({
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
          <FormLabel component="legend">Choose the payment phase</FormLabel>
          <RadioGroup
            aria-label="orderPayment"
            name="orderPayment"
            value={orderPayment}
            onChange={handleOrderPaymentChange}
          >
            <Grid item container direction="row">
              <Grid item>
                <FormControlLabel
                  value="city"
                  control={<Radio />}
                  label="Initial Installment Payment"
                />
              </Grid>

              <Grid item>
                <FormControlLabel
                  value="state"
                  control={<Radio />}
                  label="Second Installment Payment"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  value="country"
                  control={<Radio />}
                  label="Third Installment Payment"
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
      </Box>
    );
  };

  const PaymentStatusField = ({
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
        helperText="Payment Status"
        variant="outlined"
        //label={label}
        id={input.name}
        value={params.paymentStatus}
        fullWidth
        //required
        type={type}
        {...custom}
        style={{ marginTop: 10 }}
        disabled

        //onChange={handleInput}
      />
    );
  };

  const rendertotalExpectedAmountField = ({
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
        helperText="Total Amount Expected"
        variant="outlined"
        //label={label}
        id={input.name}
        value={params.totalExpectedAmount}
        fullWidth
        //required
        type={type}
        {...custom}
        style={{ marginTop: 10 }}
        disabled

        //onChange={handleInput}
      />
    );
  };

  const renderRemainingAmountField = ({
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
        helperText="Remaining Amount"
        variant="outlined"
        //label={label}
        id={input.name}
        value={params.totalRemainingAmount}
        fullWidth
        //required
        type={type}
        {...custom}
        style={{ marginTop: 10 }}
        disabled

        //onChange={handleInput}
      />
    );
  };

  const renderAmountToBePaidField = ({
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
        helperText="Enter the Amount to be paid"
        variant="outlined"
        //label={label}
        id={input.name}
        value={params.amountToBePaid}
        fullWidth
        //required
        type={type}
        {...custom}
        style={{ marginTop: 10 }}

        //onChange={handleInput}
      />
    );
  };

  const renderOperationalCurrencyField = ({
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
            labelId="operationalcurrency"
            id="operationalcurrency"
            value={operationalCurrency}
            onChange={handleOperationalCurrencyChange}
            label="Category"
            style={{ marginTop: 10, width: 200 }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"nigeria"}>Nigeria</MenuItem>
            <MenuItem value={"ghana"}>Ghana</MenuItem>
            <MenuItem value={"Togo"}>Togo</MenuItem>
          </Select>
          <FormHelperText>Select Operational Currency</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderPrefferedCurrencyField = ({
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
            labelId="preferredcurrency"
            id="preferredcurrency"
            value={preferredCurrency}
            onChange={handlePreferredCurrencyChange}
            label="Prefered Currency"
            style={{ marginTop: 10, width: 500 }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"nigeria"}>Nigeria</MenuItem>
            <MenuItem value={"ghana"}>Ghana</MenuItem>
            <MenuItem value={"Togo"}>Togo</MenuItem>
          </Select>
          <FormHelperText>Select Preferred Currency</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };

  return (
    <div className={classes.root}>
      <Grid item container justifyContent="center">
        <FormLabel
          style={{ color: "blue", fontSize: "1.5em" }}
          component="legend"
        >
          Order Payment
        </FormLabel>
      </Grid>
      <Box
        component="form"
        id="addPaymentForm"
        // onSubmit={onSubmit}
        sx={{
          width: 500,
          height: 420,
        }}
        noValidate
        autoComplete="off"
        style={{ marginTop: 10 }}
      >
        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item style={{ width: "40%" }}>
            <Field
              label=""
              id="orderforpayment"
              name="orderforpayment"
              type="text"
              component={renderOrderForPaymentField}
            />
          </Grid>
          <Grid item style={{ width: "57%", marginLeft: 10 }}>
            <Field
              label=""
              id="ordercustomer"
              name="ordercustomer"
              type="text"
              component={renderOrderedCustomerid}
            />
          </Grid>
        </Grid>
        <Field
          label=""
          id="preferredcurrency"
          name="preferredcurrency"
          type="text"
          component={renderPrefferedCurrencyField}
          style={{ marginTop: 10 }}
        />
        <Grid item style={{ marginTop: 10 }}>
          <Field
            label=""
            id="paymentphase"
            name="paymentphase"
            type="text"
            component={renderSelectablePaymentPhaseField}
          />
        </Grid>
        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item style={{ width: "30%" }}>
            <Field
              label=""
              id="paymentstatus"
              name="paymentstatus"
              type="text"
              component={PaymentStatusField}
            />
          </Grid>
          <Grid item style={{ width: "33%", marginLeft: 10 }}>
            <Field
              label=""
              id="totalexpectedamount"
              name="totalexpectedamount"
              type="text"
              component={rendertotalExpectedAmountField}
            />
          </Grid>
          <Grid item style={{ width: "33%", marginLeft: 10 }}>
            <Field
              label=""
              id="remainingamount"
              name="remainingamount"
              type="text"
              component={renderRemainingAmountField}
            />
          </Grid>
        </Grid>
        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item style={{ width: "40%" }}>
            <Field
              label=""
              id="operationalcurrency"
              name="operationalcurrency"
              type="text"
              component={renderOperationalCurrencyField}
            />
          </Grid>
          <Grid item style={{ width: "58%", marginLeft: 10 }}>
            <Field
              label=""
              id="amounttobepaid"
              name="amounttobepaid"
              type="number"
              component={renderAmountToBePaidField}
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          className={classes.submitButton}
          onClick={props.handleSubmit(onSubmit)}
        >
          Close
        </Button>
      </Box>
      {/* </form> */}
    </div>
  );
}

export default reduxForm({
  form: "paymentForm",
})(PaymentEditForm);
