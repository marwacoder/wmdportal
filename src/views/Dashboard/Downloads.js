import React from 'react'
import {Box} from '../../mui'
import {useDispatch} from 'react-redux'
import {updateBreadcrumbs} from '../../store/actions'

export default function Downloads() {

    const dispatch = useDispatch()
  
  React.useEffect(()=> {
    dispatch(updateBreadcrumbs({name: "Download(s)", link: '/dashboard/downloads'}))
  })

    return (
        <Box mt={{sm: '10%', md: '10%'}} mx={{sm: '50%', md: '50%'}} fontSize={100} >
        Downloads
        
     </Box>
    )
}
