import React from 'react';


import { FormControlLabel,withStyles, Grid, Box, TextField } from '../../mui';
import Checkbox from '@material-ui/core/Checkbox';
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

export default function Review(props) {
 

  
  
  // you can call this function anything
 

  return (
    <Box  >
        <form>
      <Grid container spacing={2} justifyContent='center' alignItems='center'>
          
        <Grid item xs={12} sm={6}>
        <TextField id="Sector" select label="Sector" variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField id="Instrument" select variant="outlined" label='Instrument'  fullWidth/>
        </Grid>
        
        <Grid xs={12} sm={6} >
        <TextField id="Instrument Type" select variant="outlined" label='Instrument Type'  fullWidth/>
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField id="UnitofMeasurement" select variant="outlined" label='Unit of Measurement'  fullWidth/>
        </Grid>


        <Grid item xs={12} sm={6}>
              <TextField id="measurementcapacity" select variant="outlined" label='Measurement Capacity'  fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
              <TextField id="actualmeasurement"  variant="outlined" label='Actual Measurement'  fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
              <TextField id="modelname"  variant="outlined" label='Model Name'  fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
              <TextField id="modelnumber"  variant="outlined" label='Model Number'  fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
              <TextField id="serialnumber"  variant="outlined" label='Serial Number'  fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
              <TextField id="tagnumber"  variant="outlined" label='Tag. Number'  fullWidth/>
        </Grid>
      
      </Grid>
      </form>
    </Box>
  );
}

