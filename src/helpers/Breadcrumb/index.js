import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import {useSelector} from 'react-redux'

import { withRouter } from 'react-router-dom'

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591



function CustomizedBreadcrumbs(props) {
    const {location,history} = props
    console.log(location.pathname,"loc")
    const {breadcrumbs} = useSelector(state => state.breadCrumb)
  return (
   <Breadcrumbs aria-label="breadcrumb">
      <StyledBreadcrumb
        component="a"
        href={location.pathname}
        label="Home"
        icon={<HomeIcon fontSize="small" />}
        onClick={ location.pathname.includes('defaultlayout') ? ()=> history.push('/defaultlayout/home'): 
        location.pathname.includes('dashboard') ? ()=> history.push('/dashboard/home') : null}
      />
   
   {location.pathname === breadcrumbs.link ? <StyledBreadcrumb
        component="a"
        href={breadcrumbs.link}
        label={breadcrumbs.name}
        onClick={()=> history.push(breadcrumbs.link)}
      /> : null}
      {breadcrumbs.child !== undefined && location.pathname === breadcrumbs.link ? <StyledBreadcrumb
        component="a"
        href={breadcrumbs.link}
        label={breadcrumbs.child}
        onClick={()=> history.push(breadcrumbs.link)}
      /> : null}
       
    </Breadcrumbs>
  );
}

export default withRouter(CustomizedBreadcrumbs)