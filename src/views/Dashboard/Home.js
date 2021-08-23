import React from 'react'
import {Box, Grid, Card} from '../../mui'
import AuthComponent from '../Auth/AuthContainer'
import Carousel from '../Dashboard/Carousel'

export default function Home() {
    return (
        <Box mx={2}>
            <Grid container justifyContent='center' spacing={1} alignItems='space-between'>
            <Grid item xs={12} sm={8}>
                <Carousel/>
            </Grid>
               <Grid item  xs={12} sm={4}>
                    <AuthComponent/>   
            </Grid>
            
            </Grid>
            
          
        </Box>
    )
}
