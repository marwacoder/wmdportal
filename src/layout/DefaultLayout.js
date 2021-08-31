import React from 'react';
import clsx from 'clsx'
import {useDispatch, useSelector} from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import {defaultlayout} from './routes'

import TimelineIcon from '@material-ui/icons/Timeline';

import Footer from '../views/Dashboard/Footer';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ReportIcon from '@material-ui/icons/ReportOutlined';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';
import {Box, List, MenuIcon, Collapse,  ListItemIcon, Typography,
    IconButton, Toolbar, AppBar,AccountCircle, CssBaseline, DashboardIcon,
    makeStyles, ListItem,Divider, Grid, ListItemText, ReceiptIcon, ExpandLess, ExpandMore,
    SwipeableDrawer, Hidden, ExitToApp} from '../mui'
import {userLogout} from '../store/actions'

import coat from '../assets/Coat_of_arms_of_Nigeria.png'
import ellipse from '../assets/Ellipse 20.png'

const drawerWidth = 380;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
    marginTop: 20
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.paper
  },

}));



const authDashboard = [
  { name: 'HOME',icon: <DashboardIcon/>, link: '/defaultlayout/home'},
    { name: 'New Instrument Registration', link: '/defaultlayout/newinstrument', icon: <AddCircleIcon/> },
    { name: 'Registered Instrument(s)',link: '/defaultlayout/registeredinstrument', icon: <CloudUploadIcon/>  },
    { name: 'Uploads',link: '/defaultlayout/uploads', icon: <CloudUploadIcon/> },
    { name: 'Report',link: '/defaultlayout/reports', icon: <ReportIcon/>  },
    { name: 'Invoices' , icon: <ReceiptIcon/>, children: [
      { name: 'Outstanding Bill',link: '/defaultlayout/outstandingbill' },
      { name: 'Paid Bill',link: '/defaultlayout/paidbill' },
    ]},
    { name: 'Apply for Pattern Approval Certificate',link: '/defaultlayout/applyapproval' , icon: <CheckCircleIcon/> },
    { name: 'Apply for Instrument Verification',link: '/defaultlayout/applyinstverification', icon: <CloudUploadIcon/>  },
    { name: 'Periodic Instrument Verification',link: '/defaultlayout/periodicinstrumentv', icon: <TimelineIcon/>  }


    
]




 function DefaultLayout(props) {
const dispatch = useDispatch()
const {data} = useSelector(state => state.isAuthenticated)
    const [openNest, setOpenNest] = React.useState(null);
  const classes = useStyles();


  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {  history, location, container } = props

 
  const handleDrawerToggle = () => {
    setMobileOpen(mobileOpen=> !mobileOpen)
}

  const handleClick = (item, index) => {

    if (item.children) {
      openNest === index ?
          setOpenNest(null) :
          setOpenNest(index)
  } else {
      history.push(item.link);
  } 
  
      }

      const onLogout = ()=> {
        dispatch(userLogout())
        history.push('/dashboard/home')
      }
      const mobileMenuId = 'primary-search-account-menu-mobile';
    
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar   position='fixed'  className={clsx(classes.appBar, {
        
        })}>
          
        <Toolbar>
        <Hidden smUp>
        <Box className={classes.sectionMobile}>
            <IconButton
              onClick={handleDrawerToggle}
            edge="start"
            aria-controls={mobileMenuId}
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon style={{color:'white'}}/>
            </IconButton>
          </Box>
          </Hidden>
          <Hidden xsDown>
          <Grid container justifyContent='center' alignItems='center' spacing={4}>
          
              <Grid item>
              <Box my={2}>
                  <img style={{width: 60,  height: 60}} src={coat} alt='coat'/>
              </Box>
                   
              </Grid>
              <Grid item>
              <Box  textAlign='center'>
            <Box textAlign='center'  fontWeight='bold' fontSize={18}>
                FEDERAL MINISTRY OF INDUSTRY TRADE AND INVESTMENT
            </Box>
            <Box fontStyle='Nexa' textAlign='center' fontWeight='bold' fontSize={18}>
                WEIGHTS AND MEASURES DEPARTMENT PORTAL
            </Box>
          </Box>
              </Grid>
              <Grid item>
                  <img style={{width: 60,  height: 60}} src={ellipse} alt='ellipse'/>
              </Grid>
              
          </Grid>
          <Box pr={5}> 
            <Grid container justifyContent='space-around' alignItems='center' spacing={2}>
            <Grid item sm={6}>
                <Typography noWrap={true}>{data.name|| 'Company'}</Typography>
              </Grid>
              <Grid item sm={3}>
                <Box>
                <Tooltip title="Profile">
        <IconButton
        
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                
                color="inherit"
              >
                <AccountCircle style={{color: 'white'}}/>
              </IconButton>
              </Tooltip>
                </Box>
              </Grid>
              <Grid item sm={3}>
                <Box>
                <Tooltip title="Logout">
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={onLogout}
                color="inherit"
              >
                <ExitToApp style={{color: 'white'}}/>
              </IconButton>
              </Tooltip>
                </Box>
              </Grid>
            </Grid>    
        </Box> 
        </Hidden>   
        </Toolbar>
        
      </AppBar>
     
      <Hidden xsDown>
         <SwipeableDrawer
        variant="permanent"
        className={clsx(classes.drawer, {
         
        })}
        classes={{
          paper: clsx({
            
          }),
        }}
      >
        <div className={classes.toolbar}>
         
        </div>
        <Divider />
        <Box mt={10}/>
        <List  component="div" disablePadding>
        {authDashboard.map((item, index)=> {
       return <>
       <ListItem button style={{ '&:focus': { outline: "none" } }} onClick={ () => handleClick(item, index)} selected={location.pathname === item.link}  >
           <ListItemIcon color='inherit' style={{ color: "#07121F"}}>{item.icon}</ListItemIcon>
           <ListItemText primary={item.name} classes={{ primary: classes.sidebarText }} />
           {item.children ? <ListItemIcon className={classes.nestedIcon}>{openNest === index ? <ExpandLess /> : <ExpandMore />}</ListItemIcon> : null}

       </ListItem>
       <Collapse key={item.name} in={openNest === index} timeout="auto" unmountOnExit>
           <List component="div" disablePadding>
               {
                   item.children ? item.children.map((item, index) => (
                       <ListItem key={item.name} button className={classes.nested} onClick={ () => handleClick(item, index)} selected={location.pathname === item.link}   >
                           <ListItemIcon style={{ color: "#fff", margin: 0 }}>{item.icon}</ListItemIcon>
                           {<ListItemText primary={item.name} key={index} classes={{ primary: classes.sidebarText }} />}
                       </ListItem>
                   ))
                       : null}
            

           </List>
       </Collapse>
       
       </>
    })}
    
        </List>
        
      </SwipeableDrawer>
      </Hidden>
      <Hidden smUp>
              
              <SwipeableDrawer
                            onOpen={handleDrawerToggle}
                            container={container}
                            variant="temporary"
                            anchor={'left'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
              >
                <Box m={2}>
            <Grid container alignItems='center' justifyContent='center' alignContent='center'>
           <Grid item xs>
            <img style={{width: 50, marginRight: 5, height: 50}} src={coat} alt='coat'/>
        </Grid>
        <Grid> <img style={{width: 50, height: 50}}  src={ellipse} alt='ellipse'/></Grid>
        <Grid container alignItems='center' justifyContent='center' alignContent='center'>
            <Grid>
               <Box mt={2} fontWeight='bold'  fontSize={10}>
               FEDERAL MINISTRY OF INDUSTRY TRADE AND INVESTMENT
            </Box> 
            </Grid>
            <Grid>
            <Box fontStyle='Nexa'  fontWeight='bold' fontSize={10}>
            WEIGHTS AND MEASURES DEPARTMENT PORTAL
            </Box>
            </Grid>
        </Grid>
         </Grid>
         </Box>
                <Divider />
        <Box mt={5}/>
        <List  component="div" disablePadding>
        {authDashboard.map((item, index)=> {
       return <>
       <ListItem button style={{ '&:focus': { outline: "none" } }} onClick={ () => handleClick(item, index)} selected={location.pathname === item.link}  >
           <ListItemIcon color='inherit' style={{ color: "#07121F"}}>{item.icon}</ListItemIcon>
           <ListItemText primary={item.name} classes={{ primary: classes.sidebarText }} />
           {item.children ? <ListItemIcon className={classes.nestedIcon}>{openNest === index ? <ExpandLess /> : <ExpandMore />}</ListItemIcon> : null}

       </ListItem>
       <Collapse key={item.name} in={openNest === index} timeout="auto" unmountOnExit>
           <List component="div" disablePadding>
               {
                   item.children ? item.children.map((item, index) => (
                       <ListItem key={item.name} button className={classes.nested} onClick={ () => handleClick(item, index)} selected={location.pathname === item.link}   >
                           <ListItemIcon style={{ color: "#fff", margin: 0 }}>{item.icon}</ListItemIcon>
                           {<ListItemText primary={item.name} key={index} classes={{ primary: classes.sidebarText }} />}
                       </ListItem>
                   ))
                       : null}
            

           </List>
       </Collapse>
       
       </>
    })}
    
        </List>
        
                </SwipeableDrawer>
                
                    </Hidden>
      <main className={classes.content}>
      <Box  >
        <Switch>
                        {defaultlayout.map((route) => {
                            return route.component ? (
                                <Route key={route.path} path={route.path} exact={route.exact} name={route.name} render={props => (
                                    <route.component {...props} />
                                )} />
                            ) : (null);
                        })}
                    </Switch> 
                    </Box>
                    <Box  width='100%'> <Footer/></Box>
                   
      </main>
    </div>
  );
}


export default withRouter(DefaultLayout)