import React from 'react'
import { Typography, Box, Grid} from '../../mui'

import nnl from '../../assets/NNLLOGO.png'

export default function Downloads() {
    return (
      <Box  position='fixed' right={39} bottom={0}   bgcolor='transparent'>
         
              <Grid container spacing={1} justifyContent='center' alignItems='center'>
                <Grid>
                  <Box>
                  <Typography variant="body3" >
              © Copyright 2021 All rights Reserved:
            </Typography>
                  </Box>
                
                </Grid>
                <Grid>
                <img  src={nnl} style={{width: 190}} alt='nnl'/>
                </Grid>
              </Grid>
          </Box>
    )
}
