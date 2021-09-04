import React from 'react'
import {Box} from '../../mui'

import {useDispatch} from 'react-redux'
import {updateBreadcrumbs} from '../../store/actions'

export default function FMITI() {

  const dispatch = useDispatch()
  
  React.useEffect(()=> {
    dispatch(updateBreadcrumbs({name: "About Us", child: 'FMITI', link: '/dashboard/fmiti'}))
  })


    return (
        <Box>
       <Box fontSize={{xs: 16, md: 20}} >
       Federal Ministry of Industry, Trade and Investment was created to play a decisive role in the diversification of the resource base of the economy by promoting trade and investment with special emphasis on increased production and export of non-oil and gas products that will lead to wealth and job creation, poverty reduction andensure enhanced service delivery in a manner that will stimulate the growth of thedomestic economy for self-reliance and export and its integration into the globalmarket taking full advantage of globalization.
<Box fontWeight='bold' mt={1}>
  Mission Statement  
</Box>

To formulate and implement policies and programmes to attract investment, boost industrialization, increase trade and exports and develop eenterprises

<Box fontWeight='bold' mt={1}>Vision Statement</Box>
To promote economic growth, create jobs and generate wealth


       </Box>
        
     </Box>
    )
}
