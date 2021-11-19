import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import StepContent from "@material-ui/core/StepContent";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Typography,
  Step,
  StepLabel,
  Stepper,
  Button,
  Paper,
} from "../../mui";

import NewInstrumentLocation from "../AuthDashboard/NewInstrumentLocation";
import InstrumentDetails from "../AuthDashboard/InstrumentDetails";
import InstrumentStatus from "../AuthDashboard/InstrumentStatus";

import {
  updateBreadcrumbs,
  getStates,
  getMeasurement,
  registerInstrument,
  registerInstrumentRefresh,
} from "../../store/actions";

import Snackbars from "../../helpers/Snackbar/Snackbar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [range, setRange] = React.useState({});
  const steps = getSteps();
  const dispatch = useDispatch();
  const { error, message, success } = useSelector(
    (state) => state.instrument || []
  );
  const { measurementcapacity } = useSelector(
    (state) => state.measurementCapacity || []
  );
  const { data } = useSelector((state) => state.isAuthenticated);

  const [values, setValues] = React.useState({
    state: "",
    localGovt: "",
    city: "",
    geoZone: "",
    contactAddress: "",
    sector: "",
    instrument: "",
    instrumentType: "",
    unitMeasure: "",
    measurementCap: "",
    actualMeasurement: "",
    instrumentModelName: "",
    modelNumber: "",
    serialNumber: "",
    tagNumber: "",
    approvalCertificate: "",
    verificationCertificate: "",
    // Add three more field
  });

  console.log(values, "values-");

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  function getSteps() {
    return [
      "Instrument Location",
      "Instrument Details",
      "Instrument Certification Status",
    ];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <NewInstrumentLocation
            values={values}
            setValues={setValues}
            handleChange={handleChange}
          />
        );
      case 1:
        return (
          <InstrumentDetails
            values={values}
            setValues={setValues}
            handleChange={handleChange}
          />
        );
      case 2:
        return (
          <InstrumentStatus
            values={values}
            setValues={setValues}
            handleChange={handleChange}
          />
        );
      default:
        return "Unknown step";
    }
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onHandleSnack = () => {
    dispatch(registerInstrumentRefresh());
  };

  React.useEffect(() => {
    dispatch(
      updateBreadcrumbs({
        name: "New Instrument Registration",
        link: "/defaultlayout/newinstrument",
      })
    );
    dispatch(getStates());
    dispatch(getMeasurement());
  }, []);

  const onSubmitHandler = () => {
    const {
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
      verificationCertificate,
    } = values;
    dispatch(getMeasurement());
    const filteredMeasurementCapacity = measurementcapacity?.length
      ? measurementcapacity?.filter(
          (data) => data.measureRange === values.measurementCap
        )
      : null;

    dispatch(
      registerInstrument(
        {
          companyId: data._id,
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
          verificationCertificate,
        },
        filteredMeasurementCapacity
      )
    );
  };

  return (
    <Box className={classes.root}>
      <form>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    {activeStep === steps.length - 1 ? (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={onSubmitHandler}
                        className={classes.button}
                      >
                        {" "}
                        <span style={{ color: "#fff" }}>{"Register"}</span>
                      </Button>
                    ) : null}
                    {activeStep !== steps.length - 1 ? (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {" "}
                        <span style={{ color: "#fff" }}>Next</span>
                      </Button>
                    ) : null}
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </form>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}

      <Snackbars
        variant={"success"}
        handleClose={onHandleSnack}
        message={message}
        isOpen={success === true}
      />
      <Snackbars
        variant={"error"}
        handleClose={onHandleSnack}
        message={message}
        isOpen={error === true}
      />
    </Box>
  );
}
