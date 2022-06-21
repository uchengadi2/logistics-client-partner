import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import cityReducer from "./cityReducer";
import orderReducer from "./orderReducer";
import paymentReducer from "./paymentReducer";
import policyReducer from "./policyReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import vendorReducer from "./vendorReducer";
import countryReducer from "./countryReducer";
import stateReducer from "./stateReducer";
import currencyReducer from "./currencyReducer";
import clusterReducer from "./clusterReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  category: categoryReducer,
  city: cityReducer,
  order: orderReducer,
  payment: paymentReducer,
  policy: policyReducer,
  product: productReducer,
  user: userReducer,
  vendor: vendorReducer,
  country: countryReducer,
  state: stateReducer,
  currency: currencyReducer,
  cluster: clusterReducer,
});
