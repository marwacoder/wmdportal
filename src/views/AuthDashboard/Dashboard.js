import React from 'react'
import ellipse from '../../assets/Ellipse 20.png'
import {Box, Hidden} from '../../mui'

export default function Dashboard() {
  return (
    <Box bgcolor='white'>
      <Hidden smDown>
       
            <Box className='centered'>
      <img style={{width: 300, height: 300, opacity: 0.5 }}  src={ellipse} alt='ellipse'/>
    </Box>
    <Box textAlign='center' left={'28%'} fontWeight='bold' bottom={'10%'} position='fixed' color='red'>IT IS AN OFFENSE PURNISHABLE BY LAW IN THE FEDERAL REPUBLIC OF NIGERIA IF INSTRUMENTS USED FOR TRADE ARE NOT REGISTERED WITH THE WEIGHTS AND MEASURES DEPARTMENT</Box>

      </Hidden>
       
    <Hidden mdUp>
    <Box className='centeredmobile'>
      <img style={{width: 200, height: 200, opacity: 0.5 }}  src={ellipse} alt='ellipse'/>

    </Box>
    <Box fontSize={{xs: 10, sm: 10}} textAlign='center' left={0} fontWeight='bold' bottom={'10%'} position='fixed' color='red'>IT IS AN OFFENSE PURNISHABLE BY LAW IN THE FEDERAL REPUBLIC OF NIGERIA IF INSTRUMENTS USED FOR TRADE ARE NOT REGISTERED WITH THE WEIGHTS AND MEASURES DEPARTMENT</Box>

    </Hidden>
    </Box>
   
  )
}
