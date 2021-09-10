import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import StepContent from '@material-ui/core/StepContent';
import {useDispatch, useSelector} from 'react-redux'

import {Box, Typography, Step, StepLabel, Stepper, Button, Paper} from '../../mui'

import LoginDetails from '../AuthDashboard/LoginDetails'
import CompanyAddress from '../AuthDashboard/CompanyAddress'
import RepresentDetails from '../AuthDashboard/RepresentDetails'

import {updateBreadcrumbs} from '../../store/actions'

import Snackbars from '../../helpers/Snackbar/Snackbar'

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



export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const dispatch = useDispatch()
  const { error, message, success} = useSelector(state => state.instrument || [])
  const { data} = useSelector(state => state.isAuthenticated)

 

  const [values, setValues] = React.useState({
   
  });


  console.log(values,'values')
   
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  

  function getSteps() {
    return ['Company Login Details', 'Company Address Details', 'Company Representative Details'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <LoginDetails values={values} setValues={setValues} handleChange={handleChange}/>;
      case 1:
        return <CompanyAddress values={values} setValues={setValues} handleChange={handleChange}/>;
      case 2:
        return <RepresentDetails values={values} setValues={setValues} handleChange={handleChange}/>;
      default:
        return 'Unknown step';
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

  React.useEffect(()=> {
    dispatch(updateBreadcrumbs({name: "Company Profile", link: '/defaultlayout/profile'}))
   
  })

//   const onHandleSnack = () => {
//     dispatch(registerInstrumentRefresh())
// }



  const onSubmitHandler =()=> {
   
  }

  
  return (
    <Box   className={classes.root}>
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
                  {activeStep === steps.length - 1 ? <Button
                    variant="contained"
                    color="primary"
                    onClick={onSubmitHandler}
                    className={classes.button}
                  >  <span style={{color: '#fff'}}>{'Register'}</span> 
                    
                  </Button>: null}
                  {activeStep !== steps.length - 1 ? <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >  <span style={{color: '#fff'}}>Next</span> 
                    
                  </Button>: null}
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

          {/* <Snackbars
                    variant={'success'}
                    handleClose={onHandleSnack}
                    message={message}
                    isOpen={success === true}
            />
                  <Snackbars
                    variant={"error"}
                    handleClose={onHandleSnack}
                    message={message}
                    isOpen={error === true}
                /> */}
    </Box>
  );
}
