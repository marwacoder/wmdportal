import React from 'react'
import { Typography, Box, Grid} from '../../mui'

import nnl from '../../assets/NNLLOGO.png'

export default function Downloads() {
    return (
      <Box width='100%' position='fixed'  left={0} bottom={0}  bgcolor='white'>
         
              <Grid container spacing={1} justifyContent='flex-end' alignItems='center'>
                <Grid>
                  <Box  >
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
