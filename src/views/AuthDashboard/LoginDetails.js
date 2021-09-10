import React from 'react'
import {  Grid, Box, TextField, MenuItem } from '../../mui';

export default function LoginDetails() {
    return (
        <Box>
            <Grid container spacing={2} justifyContent='flex-start' alignItems='center'>
          
          <Grid item xs={12} sm={6}>
          <TextField id="username"  label="Username"  variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField id="password"  label="Password"  variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField id="confirmPassword"  label="Confirm Passord"  variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField id="question"  label="Security Question"  variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField id="answer"  label="Answer"  variant="outlined" fullWidth/>
          </Grid>
          </Grid>
        </Box>
    )
}
