import React from 'react'

import {  Grid, Box, TextField, MenuItem } from '../../mui';

export default function CompanyAddress() {
    return (
        <Box>
        <Grid container spacing={2} justifyContent='flex-start' alignItems='center'>
      
      <Grid item xs={12} sm={6}>
      <TextField id="companyName"  label="Company Name"  variant="outlined" fullWidth/>
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField id="rcNumber"  label="RC Number"  variant="outlined" fullWidth/>
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField id="phoneNumber"  label="Telephpne/Mobile Number"  variant="outlined" fullWidth/>
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField id="email"  label="Email"  variant="outlined" fullWidth/>
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField id="lga"  label="Local Government"  variant="outlined" fullWidth/>
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField id="address"  label="Address"  variant="outlined" fullWidth/>
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField id="country"  label="Country"  variant="outlined" fullWidth/>
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField id="state"  label="State"  variant="outlined" fullWidth/>
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField id="city"  label="City"  variant="outlined" fullWidth/>
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField id="country"  label="Country"  variant="outlined" fullWidth/>
      </Grid>
      </Grid>
    </Box>
    )
}
