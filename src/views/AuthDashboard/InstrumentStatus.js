import React from 'react';


import { FormControlLabel,withStyles, Grid, Box, Button,makeStyles, IconButton } from '../../mui';
import Checkbox from '@material-ui/core/Checkbox';


import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { green } from '@material-ui/core/colors';

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);


  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));
export default function Review(props) {
 

    const classes = useStyles();
  
  // you can call this function anything
 

  return (
    <Box  >
        <form>
      <Grid container spacing={2} justifyContent='center' alignItems='center'>
          <Grid item xs={12}> 
          <FormControlLabel
        control={<GreenCheckbox  name="Registered" />}
        label='This instrument has Pattern of Approval Certificate from Weights and Measures Department'
      />
       <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="outlined" color="primary" component="span">
          Upload
        </Button>
      </label>
      </Grid>
      <Grid item xs={12}> <FormControlLabel
        control={<GreenCheckbox  name="Instrument" />}
        label="This instrument has Initial Verification Certificate from Weights and Measures Department"
      />
       <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant='outlined' color="primary" component="span">
          Upload
        </Button>
      </label>
      </Grid>
               
        
      
      </Grid>
    
      </form>
    </Box>
  );
}

