import React from 'react'
import {Box} from '../../mui'
import {useDispatch} from 'react-redux'
import {updateBreadcrumbs} from '../../store/actions'


export default function WMD() {

    const dispatch = useDispatch()
  
    React.useEffect(()=> {
      dispatch(updateBreadcrumbs({name: "About Us", child: 'WMD', link: '/dashboard/wmd'}))
    })
    return (
        <Box >
            <Box fontSize={{xs: 16, md: 20}}> 
       Weights and Measures Department was created to play a decisive role in the diversification of the resource base of the economy by promoting trade and investment with special emphasis on increased production and export of non-oiland gas products that will lead to wealth and job creation, poverty reduction andensure enhanced service delivery in a manner that will stimulate the growth of thedomestic economy for self-reliance and export and its integration into the globalmarket taking full advantage of globalization.

<Box fontWeight='bold' mt={1}>Mission Statement</Box>
To formulate and implement policies and programmes to attract investment, boost industrialization, increase trade and exports and develop eenterprises

<Box fontWeight='bold' mt={1}>Vision Statement</Box>
To promote economic growth, create jobs and generate wealth


</Box>
     </Box>
    )
}
