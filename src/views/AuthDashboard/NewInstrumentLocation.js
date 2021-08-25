import React from 'react';


import { FormControlLabel,withStyles, Grid, Box, TextField } from '../../mui';
import Checkbox from '@material-ui/core/Checkbox';


const GreenCheckbox = withStyles({
    root: {
      color: '#07121F',
      '&$checked': {
        color: '#07121F',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

export default function Review() {
 

  
  
  // you can call this function anything
 

  return (
    <Box  >
        <form>
      <Grid container spacing={2} justifyContent='flex-start' alignItems='center'>
          <Grid item xs={12} sm={6}> <FormControlLabel
        control={<GreenCheckbox  name="Registered" />}
        label="Use Company Registered Email Address"
      /></Grid>
      <Grid item xs={12} sm={6}> <FormControlLabel
        control={<GreenCheckbox  name="Instrument" />}
        label="Bulk Instrument Registration"
      /></Grid>
               
        <Grid item xs={12} sm={6}>
        <TextField id="State" select label="State" variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField id="City" select variant="outlined" label='City'  fullWidth/>
        </Grid>
        
        <Grid item xs={12} sm={6} >
        <TextField id="Local" select variant="outlined" label='Local Government'  fullWidth/>
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField id="Zone" select variant="outlined" label='Geo-Political Zone'  fullWidth/>
        </Grid>


        <Grid item xs={12} sm={12}>
        <TextField id="Address" rows={4} multiline label="Contact Address" variant="outlined" fullWidth/>

        </Grid> 
      
      </Grid>
      </form>
    </Box>
  );
}

