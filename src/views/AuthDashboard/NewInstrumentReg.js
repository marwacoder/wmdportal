import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import StepContent from '@material-ui/core/StepContent';

import {Box, Typography, Step, StepLabel, Stepper, Button, Paper} from '../../mui'

import NewInstrumentLocation from '../AuthDashboard/NewInstrumentLocation'
import InstrumentDetails from '../AuthDashboard/InstrumentDetails'
import InstrumentStatus from '../AuthDashboard/InstrumentStatus'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
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

function getSteps() {
  return ['Intrument Location', 'Instrument Details', 'Instrument Certification Status'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <NewInstrumentLocation/>;
    case 1:
      return <InstrumentDetails/>;
    case 2:
      return <InstrumentStatus/>;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box mt={{ xs: '-10%',sm: '-3%', md: '1%'}}  className={classes.root}>
      <Box my={{xs: 1, sm: 2}} fontWeight='bold' fontSize={{xs: 14, sm: 16, md: 16}}>New Instrument Registration</Box>
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
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >  <span style={{color: '#fff'}}>{activeStep === steps.length - 1 ? 'Register' : 'Next'}</span> 
                    
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
