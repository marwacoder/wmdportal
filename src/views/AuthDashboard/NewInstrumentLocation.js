import React from 'react';


import {  Grid, Box, TextField, MenuItem, ListItemText } from '../../mui';
import {getLgas} from '../../store/actions'
import {useDispatch, useSelector} from 'react-redux'
import Loader from 'react-loader-spinner'



  const zone = ['North Central', 'North East', 'North West', 'South East', 'South South', 'South West']

export default function Review(props) {


 const { state} = useSelector(state => state.pollingUnitState || [])
 const { lga, isLoading} = useSelector(state => state.pollingUnitLGA || [])
 const {values, handleChange} = props

 const dispatch = useDispatch()

 
 


  return (
    <Box  >
        <form>
      <Grid container spacing={2} justifyContent='flex-start' alignItems='center'>
         
        <Grid item xs={12} sm={6}>
        <TextField id="state" value={values.state} onChange={handleChange('state')}
             select label="State"  variant="outlined" fullWidth>
          {Array.isArray(state) ? state.map((item)=>
          <MenuItem onClick={()=> dispatch(getLgas({state: item}))} value={item} key={item}>
            <ListItemText>{item}</ListItemText>
          </MenuItem>): null}
          
        </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField id="city" value={values.city} onChange={handleChange('city')} variant="outlined" label='City'  fullWidth/>
        </Grid>
        
        <Grid item xs={12} sm={6} >
        <TextField id="localGovt" select value={values.localGovt} onChange={handleChange('localGovt')}  variant="outlined" label='Local Government'  fullWidth>
        {!isLoading && Array.isArray(lga) ? lga.map((item)=><MenuItem    value={item} key={item}>{item}</MenuItem>): 
        <Box px={20}>
          <Loader type='Circles' 
        color="#1a237e"
        height={30}
        width={30} />
        </Box>
}
        
        </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField id="geoZone" select variant="outlined" value={values.geoZone} onChange={handleChange('geoZone')}   label='Geo-Political Zone'  fullWidth>
                {zone.map((item)=> <MenuItem  value={item}  key={item}>{item}</MenuItem>)}
                
              </TextField>
        </Grid>


        <Grid item xs={12} sm={12}>
        <TextField id="contactAddress" value={values.contactAddress} onChange={handleChange('contactAddress')} rows={4} multiline label="Contact Address" variant="outlined" fullWidth/>

        </Grid> 
      
      </Grid>
      </form>
    </Box>
  );
}

