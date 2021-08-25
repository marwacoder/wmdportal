import React from 'react'
import { Typography, Toolbar, Box, Grid} from '../../mui'

import nnl from '../../assets/NNLLOGO.png'

export default function Downloads() {
    return (
      <Box pr={'45%'} position='fixed' bottom={0}>
          <Toolbar >
              <Grid container spacing={1} justifyContent='center' alignItems='center'>
                <Grid>
                <Typography variant="body3" >
              © Copyright 2021 All rights Reserved:
            </Typography>
                </Grid>
                <Grid>
                <img  src={nnl} style={{width: 190}} alt='nnl'/>
                </Grid>
              </Grid>
            
          </Toolbar>
          </Box>
    )
}
