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
    width: 500,
  },
  submitButton: {
    borderRadius: 10,
    height: 40,
    width: 100,
    marginLeft: 200,
    marginTop: 20,
    marginBottom: 20,
    color: "white",
    backgroundColor: theme.palette.common.blue,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
    },
  },
  firstSection: {
    width: 300,
  },
}));

function ProductForm(props) {
  const classes = useStyles();
  const [vendor, setVendor] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState();

  const onImageChange = (e) => {
    setImage(e.target.value);
    console.log("the image is:", image);
  };

  const handleVendorChange = (event) => {
    setVendor(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const renderVendorField = ({
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
            labelId="vendor"
            id="vendor"
            value={vendor}
            onChange={handleVendorChange}
            label="Vendor"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"nigeria"}>Nigeria</MenuItem>
            <MenuItem value={"ghana"}>Ghana</MenuItem>
            <MenuItem value={"Togo"}>Togo</MenuItem>
          </Select>
          <FormHelperText>Select Vendor</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderCategoryField = ({
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
            labelId="category"
            id="category"
            value={category}
            onChange={handleCategoryChange}
            label="Category"
            style={{ marginTop: 20, width: 500 }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"nigeria"}>Nigeria</MenuItem>
            <MenuItem value={"ghana"}>Ghana</MenuItem>
            <MenuItem value={"Togo"}>Togo</MenuItem>
          </Select>
          <FormHelperText>Select Vehicle Category</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderVechicleNameField = ({
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
        helperText="Enter the name of the Vehicle"
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

  const renderVehicleUniqueIdField = ({
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
        helperText="Enter the unique number of the Vehicle"
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

  const renderShortDescriptionField = ({
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
        helperText="Enter the short description of the vehicle"
        label={label}
        id={input.name}
        // value={formInput.description}
        fullWidth
        type={type}
        style={{ marginTop: 20 }}
        multiline={true}
        minRows={4}
        {...custom}
        // onChange={handleInput}
      />
    );
  };

  const renderFullDescriptionField = ({
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
        helperText="Enter the full description of the vehicle"
        label={label}
        id={input.name}
        // value={formInput.description}
        fullWidth
        type={type}
        style={{ marginTop: 20 }}
        multiline={true}
        minRows={12}
        {...custom}
        // onChange={handleInput}
      />
    );
  };

  const renderVehiclePermanentAddressField = ({
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
        helperText="Enter the permanent address of this vehicle"
        label={label}
        id={input.name}
        // value={formInput.description}
        fullWidth
        type={type}
        style={{ marginTop: 20 }}
        multiline={true}
        minRows={4}
        {...custom}
        // onChange={handleInput}
      />
    );
  };

  const renderLocationCityField = ({
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
            style={{ marginTop: 20, width: 500 }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"apapa"}>Apapa</MenuItem>
            <MenuItem value={"aba"}>Aba</MenuItem>
            <MenuItem value={"kano"}>Kano</MenuItem>
          </Select>
          <FormHelperText>
            Select the city of the permanent address
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderLatituteField = ({
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
        helperText="Enter the address location latitute"
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

  const renderLongtituteField = ({
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
        helperText="Enter the address location longtitude"
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

  const renderVehicleMakeField = ({
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
        helperText="Enter the vehicle make"
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

  const renderVehicleModelField = ({
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
        helperText="Enter the vehicle model"
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

  const renderVehicleChassisField = ({
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
        helperText="Enter the vehicle Chasis"
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
        name={input.name}
        fullWidth
        style={{ marginTop: 20 }}
        onChange={onImageChange}
        helperText="Upload Vehicle Image"
      />
    );
  };

  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };

  return (
    <div>
      <form id="productForm" className={classes.formStyles}>
        <Grid item container style={{ marginTop: 20 }} justifyContent="center">
          <FormLabel
            style={{ color: "blue", fontSize: "1.5em" }}
            component="legend"
          >
            Enter Vehicle Details
          </FormLabel>
        </Grid>
        <Box
          sx={{
            width: 500,
            height: 420,
          }}
          noValidate
          autoComplete="off"
        >
          <Field
            label=""
            id="vehicleName"
            name="vehicleName"
            type="text"
            component={renderVechicleNameField}
            autoComplete="off"
            style={{ marginTop: 20 }}
          />
          <Field
            label=""
            id="vendorUniqueId"
            name="vendorUniqueId"
            type="text"
            component={renderVehicleUniqueIdField}
            autoComplete="off"
            style={{ marginTop: 20 }}
          />

          <Field
            label=""
            id="shortDescription"
            name="shortDescription"
            type="text"
            component={renderShortDescriptionField}
          />
          <Field
            label=""
            id="fullDescription"
            name="fullDescription"
            type="text"
            component={renderFullDescriptionField}
          />

          <Field
            label=""
            id="category"
            name="category"
            type="text"
            component={renderCategoryField}
          />
          <Grid item container style={{ marginTop: 20 }}>
            <FormLabel style={{ color: "blue" }} component="legend">
              Vehicle Permanent Location
            </FormLabel>
          </Grid>
          <Field
            label=""
            id="address"
            name="address"
            type="text"
            component={renderVehiclePermanentAddressField}
          />
          <Field
            label=""
            id="city"
            name="city"
            type="text"
            component={renderLocationCityField}
          />
          <Grid container direction="row" style={{ marginTop: 20 }}>
            <Grid item>
              <Field
                label=""
                id="latitute"
                name="latitute"
                type="number"
                component={renderLatituteField}
                style={{ width: 220 }}
              />
            </Grid>
            <Grid item>
              <Field
                label=""
                id="longtitude"
                name="longtitude"
                type="number"
                component={renderLongtituteField}
                style={{ width: 250, marginLeft: 30 }}
              />
            </Grid>
          </Grid>
          <Grid container direction="row" style={{ marginTop: 20 }}>
            <Grid item style={{ width: "30%" }}>
              <Field
                label=""
                id="make"
                name="make"
                type="text"
                component={renderVehicleMakeField}
              />
            </Grid>
            <Grid item style={{ width: "33%", marginLeft: 10 }}>
              <Field
                label=""
                id="model"
                name="model"
                type="text"
                component={renderVehicleModelField}
              />
            </Grid>
            <Grid item style={{ width: "33%", marginLeft: 10 }}>
              <Field
                label=""
                id="chassis"
                name="chassis"
                type="text"
                component={renderVehicleChassisField}
              />
            </Grid>
          </Grid>
          <Field name="image" type="file" component={renderImageField} />
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
  form: "productForm",
})(ProductForm);
