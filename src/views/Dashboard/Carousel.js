import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';

import {Box, Button, Grid, Hidden} from '../../mui'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import machine from '../../assets/bg.png'
import slide1 from '../../assets/slide3.png'
import slide2 from '../../assets/slide5.png'
import slide3 from '../../assets/slide8.png'

import AuthContainer from '../Auth/mobileAuthContainer'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: machine
  },
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: slide1
  },
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: slide2
  },
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: slide3
  },
  
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        flexGrow: 1,
      },
      header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
      },
  img: {
    height: 255,
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  
  return (
    <Box className={classes.root} >
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item sm={12} xs={12}>
     <Box >
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
      variant="dots"
      steps={4}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
         
          
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
        </Button>
      }
    />
    </Box>
    </Grid>
    <Hidden mdUp>
      <Grid item sm={12} xs={12}>
      
      <Box mt={5} bgcolor='grey'>
        <AuthContainer/>
      </Box>
      
    </Grid>
    </Hidden>
    
      </Grid>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
