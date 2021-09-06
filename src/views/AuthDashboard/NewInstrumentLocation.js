import React from 'react';


import { FormControlLabel,withStyles, Grid, Box, TextField, MenuItem, ListItemText } from '../../mui';
import Checkbox from '@material-ui/core/Checkbox';
import {getLgas} from '../../store/actions'
import {useDispatch, useSelector} from 'react-redux'

const GreenCheckbox = withStyles({
    root: {
      color: '#1a237e',
      '&$checked': {
        color: '#1a237e',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const zone = ['North Central', 'North East', 'North West', 'South East', 'South South', 'South West']

export default function Review(props) {


 const { state} = useSelector(state => state.pollingUnitState || [])
 const { lga} = useSelector(state => state.pollingUnitLGA || [])
 const {values, setValues, handleChange} = props

 const dispatch = useDispatch()

 
 


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
        <TextField id="state" 
             select label="State"  variant="outlined" fullWidth>
          {Array.isArray(state) ? state.map((item)=>
          <MenuItem onClick={()=> {
          dispatch(getLgas({state: item}))
          setValues({state: item})}
           } value={item} key={item}>
            <ListItemText>{item}</ListItemText>
          </MenuItem>): null}
          
        </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField id="city" value={values.city} onChange={handleChange} variant="outlined" label='City'  fullWidth/>
        </Grid>
        
        <Grid item xs={12} sm={6} >
        <TextField id="localGovt" select value={values.localGovt}  variant="outlined" label='Local Government'  fullWidth>
        {Array.isArray(lga) ? lga.map((item)=><MenuItem  onClick={()=> setValues({...values, localGovt: item})}  value={item || ''} key={item}>{item}</MenuItem>): null}
        </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField id="geoZone" select variant="outlined" value={values.geoZone}   label='Geo-Political Zone'  fullWidth>
                {zone.map((item)=> <MenuItem onClick={()=> setValues({...values, geoZone: item})} value={item}  key={item}>{item}</MenuItem>)}
              </TextField>
        </Grid>


        <Grid item xs={12} sm={12}>
        <TextField id="contactAddress" value={values.contactAddress} onChange={handleChange} rows={4} multiline label="Contact Address" variant="outlined" fullWidth/>

        </Grid> 
      
      </Grid>
      </form>
    </Box>
  );
}

