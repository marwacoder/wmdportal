import React from 'react';

import {useDispatch, useSelector} from 'react-redux'
import {  Grid, Box, TextField, MenuItem } from '../../mui';
import {getUnitMeasurement, getMeasurementCapacity} from '../../store/actions'





export default function Review(props) {
      const dispatch = useDispatch()
      const { measurement} = useSelector(state => state.measurement || [])
      const { unitmeasurement} = useSelector(state => state.unitmeasurement || [])
      const { measurementcapacity} = useSelector(state => state.measurementCapacity || [])
      const {values, setValues, handleChange} = props

      
      const [category, setCategory] = React.useState('')
      const [fee, setFee] = React.useState(null)

  // you can call this function anything


  return (
    <Box  >
        <form>
      <Grid container spacing={2} justifyContent='flex-start' alignItems='center'>
          
        <Grid item xs={12} sm={6}>
        <TextField id="sector"  label="Sector" value={values.sector} onChange={handleChange('sector')} variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField id="instrument" value={values.instrument} onChange={handleChange('instrument')} variant="outlined" label='Instrument'  fullWidth/>
        </Grid>
        
        <Grid item xs={12} sm={6} >
        <TextField id="instrumentType" value={values.instrumentType} onChange={handleChange('instrumentType')} select variant="outlined" label='Instrument Type'  fullWidth>
        {Array.isArray(measurement) ? measurement.map((item)=><MenuItem  onClick={()=> {
        dispatch(getUnitMeasurement({unit: item.HeaderName}))
        setCategory(item.HeaderName)
        }}
        value={item.HeaderName} key={item}>{item.HeaderName}</MenuItem>): null}
      
        </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField id="unitMeasure" select value={values.unitMeasure}  onChange={handleChange('unitMeasure')} variant="outlined" label='Measurement Subcategory'  fullWidth>
        {Array.isArray(unitmeasurement) ? unitmeasurement.map((item)=><MenuItem onClick={()=> dispatch(getMeasurementCapacity({category, subcategory: item.subheading}))}
         value={item.subheading} key={item}>{item.subheading}</MenuItem>): null}
        </TextField>
        </Grid>


        <Grid item xs={12} sm={6}>
              <TextField id="measurementCap" value={values.measurementCap} select onChange={handleChange('measurementCap')}  variant="outlined" label='Measurement Capacity'  fullWidth>
              {Array.isArray(measurementcapacity) ? measurementcapacity.map((item)=><MenuItem onClick={()=> setValues({...values, amount: item.amount, minFee: item.minFee, maxFee: item.maxFee})} value={item.measureRange} key={item}>{item.measureRange}</MenuItem>): null}
              </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
              <TextField id="actualMeasurement" value={values.actualMeasurement} onChange={handleChange('actualMeasurement')} variant="outlined" label='Actual Measurement'  fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
              <TextField id="instrumentModelName" value={values.instrumentModelName} onChange={handleChange('instrumentModelName')}    variant="outlined" label='Model Name'  fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
              <TextField id="modelNumber"  value={values.modelNumber} onChange={handleChange('modelNumber')} variant="outlined" label='Model Number'  fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
              <TextField id="serialNumber" value={values.serialNumber} onChange={handleChange('serialNumber')}  variant="outlined" label='Serial Number'  fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
              <TextField id="tagNumber" value={values.tagNumber} onChange={handleChange('tagNumber')}  variant="outlined" label='Tag. Number'  fullWidth/>
        </Grid>
      
      </Grid>
      </form>
    </Box>
  );
}

