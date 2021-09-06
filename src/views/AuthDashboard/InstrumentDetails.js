import React from 'react';

import {useDispatch, useSelector} from 'react-redux'
import {  Grid, Box, TextField, MenuItem, ListItemText } from '../../mui';
import {getUnitMeasurement} from '../../store/actions'





export default function Review(props) {
      const dispatch = useDispatch()
      const { measurement} = useSelector(state => state.measurement || [])
      const { unitmeasurement} = useSelector(state => state.unitmeasurement || [])
      const {values, setValues, handleChange} = props

  
  // you can call this function anything
 

  return (
    <Box  >
        <form>
      <Grid container spacing={2} justifyContent='center' alignItems='center'>
          
        <Grid item xs={12} sm={6}>
        <TextField id="sector"  label="Sector" value={values.sector} onChange={handleChange} variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField id="instrument" value={values.instrument} onChange={handleChange} variant="outlined" label='Instrument'  fullWidth/>
        </Grid>
        
        <Grid item xs={12} sm={6} >
        <TextField id="Instrument Type" select variant="outlined" label='Instrument Type'  fullWidth>
        {Array.isArray(measurement) ? measurement.map((item)=><MenuItem  onClick={()=>{ 
              setValues({unitMeasure: item.HeaderName})
              dispatch(getUnitMeasurement({unit: item.HeaderName}))
              }}  value={item.HeaderName || ''} key={item}>{item.HeaderName}</MenuItem>): null}
        </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField id="unitMeasure" select value={values.unitMeasure}  variant="outlined" label='Unit of Measurement'  fullWidth>
        {Array.isArray(unitmeasurement) ? unitmeasurement.map((item)=><MenuItem  onClick={()=> setValues({unitMeasure: item.measureRange})}  value={item.measureRange || ''} key={item}>{item.measureRange}</MenuItem>): null}
        </TextField>
        </Grid>


        <Grid item xs={12} sm={6}>
              <TextField id="measurementCap" value={values.measurementCap} onChange={handleChange}  variant="outlined" label='Measurement Capacity'  fullWidth>

              </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
              <TextField id="actualMeasurement" value={values.actualMeasurement} onChange={handleChange} variant="outlined" label='Actual Measurement'  fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
              <TextField id="modelName" value={values.modelName} onChange={handleChange}    variant="outlined" label='Model Name'  fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
              <TextField id="modelnumber"  value={values.modelNumber} onChange={handleChange} variant="outlined" label='Model Number'  fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
              <TextField id="modelNumber" value={values.serialNumber} onChange={handleChange}  variant="outlined" label='Serial Number'  fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
              <TextField id="tagNumber" value={values.tagNumber} onChange={handleChange}  variant="outlined" label='Tag. Number'  fullWidth/>
        </Grid>
      
      </Grid>
      </form>
    </Box>
  );
}

