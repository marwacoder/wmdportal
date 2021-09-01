import React from 'react'
import ellipse from '../../assets/Ellipse 20.png'
import {Box, Hidden} from '../../mui'

export default function Dashboard() {
  return (
    <Box bgcolor='white'>
      <Hidden xsDown>
        <Box position='fixed' top='35%' left='50%'>
      <img style={{width: 300, height: 300, opacity: 0.5 }}  src={ellipse} alt='ellipse'/>
    </Box>
      </Hidden>
       
    <Hidden smUp>
    <Box position='fixed' top='40%' left='33%'>
      <img style={{width: 200, height: 200, opacity: 0.5 }}  src={ellipse} alt='ellipse'/>
    </Box>
    </Hidden>
    
    </Box>
   
  )
}
