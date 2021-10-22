import axios from "axios";

import setAuthToken from "../../API";
import * as actionTypes from "./actionTypes";

export const updateBreadcrumbs = (payload) => {
  return {
    type: actionTypes.UPDATE_BREADCRUMBS,
    payload,
  };
};

export const toggleBreadcrumbs = (payload) => {
  return {
    type: actionTypes.TOGGLE_BREADCRUMBS,
    payload,
  };
};

//AUTHENTICATION ACTION
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (payload) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload,
  };
};

export const authFail = (payload) => {
  return {
    type: actionTypes.AUTH_FAIL,
    payload,
  };
};

export const authRefresh = () => {
  return {
    type: actionTypes.AUTH_REFRESH,
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOG_OUT,
  };
};

export const checkAuthTimeOut = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(userLogout());
    }, expirationTime);
  };
};
export const clearSession = () => {
  try {
    localStorage.removeItem("user-token");
  } catch (error) {
    console.log(error);
  }
};

export const userLogout = () => (dispatch) => {
  dispatch(logout());
  clearSession();
};
//LOGIN
export const auth = ({ email, password }) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("http://api.wmd.ng/v1/login", { email, password })
      .then((resp) => {
        setTimeout(() => {
          dispatch(authSuccess(resp.data));
          dispatch(checkAuthTimeOut(1209600000));
          const token = resp.data.token;
          localStorage.setItem("user-token", token);
          setAuthToken(token);
        }, 2000);
      })
      .catch((err) => {
        console.log(err, "error");
        dispatch(
          authFail(
            err.response !== undefined
              ? err.response.data.message
              : "Network Failed"
          )
        );
      });
  };
};

//REGISTER

export const registerStart = () => {
  return {
    type: actionTypes.REGISTER_START,
  };
};

export const registerSuccess = (payload) => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    payload,
  };
};

export const registerFail = (payload) => {
  return {
    type: actionTypes.REGISTER_FAIL,
    payload,
  };
};

export const registerRefresh = () => {
  return {
    type: actionTypes.REGISTER_REFRESH,
  };
};

export const register = ({ email, name, password }) => {
  return (dispatch) => {
    dispatch(registerStart());
    axios
      .post("http://api.wmd.ng/v1/register", { name, email, password })
      .then((resp) => {
        console.log(resp, "resp");
        setTimeout(() => {
          dispatch(registerSuccess(resp.data));
          const token = resp.data.token;
          localStorage.setItem("user-token", token);
          setAuthToken(token);
        }, 2000);
      })
      .catch((err) => {
        console.log(err.response.data.message, "error");
        dispatch(
          registerFail(
            err.response !== undefined
              ? err.response.data.message
              : "Network Failed"
          )
        );
      });
  };
};

export const getCompanyStart = () => {
  return {
    type: actionTypes.GET_COMPANY_START,
  };
};

export const getCompanySuccess = (payload) => {
  return {
    type: actionTypes.GET_COMPANY_SUCCESS,
    payload,
  };
};

export const getCompanyFail = (payload) => {
  return {
    type: actionTypes.GET_COMPANY_FAIL,
    payload,
  };
};

export const getCompanyRefresh = () => {
  return {
    type: actionTypes.GET_COMPANY_REFRESH,
  };
};

export const getCompany = ({ id }) => {
  return (dispatch) => {
    dispatch(getCompanyStart());
    axios
      .get(`http://api.wmd.ng/v1/company/${id}`)
      .then((resp) => {
        setTimeout(() => {
          dispatch(getCompanySuccess(resp.data));
        }, 1000);
      })
      .catch((err) => {
        dispatch(
          getCompanyFail(
            err.response !== undefined
              ? err.response.data.message
              : "Network Failed"
          )
        );
      });
  };
};

//REGISTERED INSTRUMENT

export const registerInstrumentStart = () => {
  return {
    type: actionTypes.ADD_INSTRUMENT_START,
  };
};

export const registerInstrumentSuccess = (payload) => {
  return {
    type: actionTypes.ADD_INSTRUMENT_SUCCESS,
    payload,
  };
};

export const registerInstrumentFail = (payload) => {
  return {
    type: actionTypes.ADD_INSTRUMENT_FAIL,
    payload,
  };
};

export const registerInstrumentRefresh = () => {
  return {
    type: actionTypes.ADD_INSTRUMENT_REFRESH,
  };
};

export const registerInstrument = ({
  companyId,
  state,
  localGovt,
  city,
  geoZone,
  contactAddress,
  sector,
  instrument,
  instrumentType,
  unitMeasure,
  measurementCap,
  actualMeasurement,
  instrumentModelName,
  modelNumber,
  serialNumber,
  tagNumber,
  approvalCertificate,
  verificationCertificate, additional,
  amount,
  maxFee,
  minFee,
}) => {
  return (dispatch) => {
    dispatch(registerInstrumentStart());
    axios
      .post(`http://api.wmd.ng/v1/instrument`, {
        state,
        localGovt,
        city,
        geoZone,
        contactAddress,
        sector,
        instrument,
        instrumentType,
        unitMeasure,
        measurementCap,
        actualMeasurement,
        instrumentModelName,
        modelNumber,
        serialNumber,
        tagNumber,
        approvalCertificate,
        verificationCertificate, additional,
        amount,
        maxFee,
        minFee,
      })
      .then((resp) => {
        console.log(resp, "resp");
        setTimeout(() => {
          dispatch(registerInstrumentSuccess(resp.data));
        }, 2000);
      })
      .catch((err) => {
        console.log(err.response.data.message, "error");
        dispatch(
          registerInstrumentFail(
            err.response !== undefined
              ? err.response.data.message
              : "Network Failed"
          )
        );
      });
  };
};

export const getRegisteredInstrumentStart = () => {
  return {
    type: actionTypes.GET_REGISTERED_INSTRUMENT_START,
  };
};

export const getRegisteredInstrumentSuccess = (payload) => {
  return {
    type: actionTypes.GET_REGISTERED_INSTRUMENT_SUCCESS,
    payload,
  };
};

export const getRegisteredInstrumentFail = (payload) => {
  return {
    type: actionTypes.GET_REGISTERED_INSTRUMENT_FAIL,
    payload,
  };
};

export const getRegisteredInstrumentRefresh = () => {
  return {
    type: actionTypes.GET_REGISTERED_INSTRUMENT_REFRESH,
  };
};

export const getRegisteredInstrument = () => {
  return (dispatch) => {
    dispatch(getRegisteredInstrumentStart());
    axios
      .get(`http://api.wmd.ng/v1/instrument/`, {})
      .then((resp) => {
        setTimeout(() => {
          dispatch(getRegisteredInstrumentSuccess(resp.data));
        }, 2000);
      })
      .catch((err) => {
        dispatch(
          getRegisteredInstrumentFail(
            err.response !== undefined
              ? err.response.data.message
              : "Network Failed"
          )
        );
      });
  };
};
//GET STATES

export const getStateStart = () => {
  return {
    type: actionTypes.GET_STATE_START,
  };
};

export const getStateSuccess = (payload) => {
  return {
    type: actionTypes.GET_STATE_SUCCESS,
    payload,
  };
};

export const getStateFail = (payload) => {
  return {
    type: actionTypes.GET_STATE_FAIL,
    payload,
  };
};

export const getStateRefresh = () => {
  return {
    type: actionTypes.GET_STATE_REFRESH,
  };
};

export const getStates = () => {
  return (dispatch) => {
    dispatch(getStateStart());
    axios
      .get(`https://polling-unit-api.herokuapp.com/api/v1/polling-unit/state`)
      .then((resp) => {
        setTimeout(() => {
          dispatch(getStateSuccess(resp.data));
        }, 2000);
      })
      .catch((err) => {
        dispatch(
          getStateFail(
            err.response !== undefined
              ? err.response.data.message
              : "Network Failed"
          )
        );
      });
  };
};

//GET STATES

export const getLgasStart = () => {
  return {
    type: actionTypes.GET_LGA_START,
  };
};

export const getLgasSuccess = (payload) => {
  return {
    type: actionTypes.GET_LGA_SUCCESS,
    payload,
  };
};

export const getLgasFail = (payload) => {
  return {
    type: actionTypes.GET_LGA_FAIL,
    payload,
  };
};

export const getLgasRefresh = () => {
  return {
    type: actionTypes.GET_LGA_REFRESH,
  };
};

export const getLgas = ({ state }) => {
  console.log(state, "from API");
  return (dispatch) => {
    dispatch(getLgasStart());
    axios
      .get(
        `https://polling-unit-api.herokuapp.com/api/v1/polling-unit/lga?state=${state}`
      )
      .then((resp) => {
        dispatch(getLgasSuccess(resp.data));
      })
      .catch((err) => {
        dispatch(
          getLgasFail(
            err.response !== undefined
              ? err.response.data.message
              : "Network Failed"
          )
        );
      });
  };
};

export const getMeasurementStart = () => {
  return {
    type: actionTypes.GET_MEASUREMENT_START,
  };
};

export const getMeasurementSuccess = (payload) => {
  return {
    type: actionTypes.GET_MEASUREMENT_SUCCESS,
    payload,
  };
};

export const getMeasurementFail = (payload) => {
  return {
    type: actionTypes.GET_MEASUREMENT_FAIL,
    payload,
  };
};

export const getMeasurementRefresh = () => {
  return {
    type: actionTypes.GET_MEASUREMENT_REFRESH,
  };
};

export const getMeasurement = () => {
  return (dispatch) => {
    dispatch(getMeasurementStart());
    axios
      .get(`http://api.wmd.ng/v1/feetable/group`)
      .then((resp) => {
        dispatch(getMeasurementSuccess(resp.data));
      })
      .catch((err) => {
        dispatch(
          getMeasurementFail(
            err.response !== undefined
              ? err.response.data.message
              : "Network Failed"
          )
        );
      });
  };
};

export const getUnitMeasurementStart = () => {
  return {
    type: actionTypes.GET_UNIT_MEASUREMENT_START,
  };
};

export const getUnitMeasurementSuccess = (payload) => {
  return {
    type: actionTypes.GET_UNIT_MEASUREMENT_SUCCESS,
    payload,
  };
};

export const getUnitMeasurementFail = (payload) => {
  return {
    type: actionTypes.GET_UNIT_MEASUREMENT_FAIL,
    payload,
  };
};

export const getUnitMeasurementRefresh = () => {
  return {
    type: actionTypes.GET_UNIT_MEASUREMENT_REFRESH,
  };
};

export const getUnitMeasurement = ({ unit }) => {
  console.log(unit, "unit");
  return (dispatch) => {
    dispatch(getUnitMeasurementStart());
    axios
      .get(`http://api.wmd.ng/v1/feetable/group/${unit}`)
      .then((resp) => {
        dispatch(getUnitMeasurementSuccess(resp.data));
      })
      .catch((err) => {
        dispatch(
          getUnitMeasurementFail(
            err.response !== undefined
              ? err.response.data.message
              : "Network Failed"
          )
        );
      });
  };
};

export const getMeasurementCapStart = () => {
  return {
    type: actionTypes.GET_MEASUREMENT_CAPACITY_START,
  };
};

export const getMeasurementCapSuccess = (payload) => {
  return {
    type: actionTypes.GET_MEASUREMENT_CAPACITY_SUCCESS,
    payload,
  };
};

export const getMeasurementCapFail = (payload) => {
  return {
    type: actionTypes.GET_MEASUREMENT_CAPACITY_FAIL,
    payload,
  };
};

export const getMeasurementCapRefresh = () => {
  return {
    type: actionTypes.GET_MEASUREMENT_CAPACITY_REFRESH,
  };
};

export const getMeasurementCapacity = ({ category, subcategory }) => {
  return (dispatch) => {
    dispatch(getMeasurementCapStart());
    axios
      .get(`http://api.wmd.ng/v1/feetable/group/${category}/${subcategory}`)
      .then((resp) => {
        dispatch(getMeasurementCapSuccess(resp.data));
      })
      .catch((err) => {
        dispatch(
          getMeasurementCapFail(
            err.response !== undefined
              ? err.response.data.message
              : "Network Failed"
          )
        );
      });
  };
};

// /

// /
// /

// /
