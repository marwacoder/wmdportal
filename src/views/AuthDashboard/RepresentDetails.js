import React from 'react'

import {  Grid, Box, TextField, MenuItem } from '../../mui';

export default function RepresentDetails() {
    return (
        <Box>
        <Grid container spacing={2} justifyContent='flex-start' alignItems='center'>
      
      <Grid item xs={12} sm={6}>
      <TextField id="title"  select label="Title"  variant="outlined" fullWidth/>
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField id="surname"  label="Surname"  variant="outlined" fullWidth/>
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField id="other"  label="Other Names"  variant="outlined" fullWidth/>
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField id="email"  label="Email"  variant="outlined" fullWidth/>
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField id="phone"  label="Phone Number"  variant="outlined" fullWidth/>
      </Grid>
      
      </Grid>
    </Box>
    )
}
