import React,{Suspense} from 'react';
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

import Breadcrumb from '../helpers/Breadcrumb'

import coat from '../assets/Coat_of_arms_of_Nigeria.png'
import ellipse from '../assets/Ellipse 20.png'

import Spinner from '../helpers/Spinner/Spinner'

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
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
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
    background: '#1a237e',
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
    padding: theme.spacing(3),
    marginTop: 20
  },
  drawerPaper: {
    width: drawerWidth,
    background: theme.palette.primary.main
  },
  sidebarText: {
    color: 'white'
  },
  sidebarTextm: {
    color: 'white',
    fontFamily: 'Nexa',
    fontSize: 14
  }

}));



const authDashboard = [
  { name: 'HOME',icon: <DashboardIcon color='white'/>, link: '/defaultlayout/home'},
    { name: 'New Instrument Registration', link: '/defaultlayout/newinstrument', icon: <AddCircleIcon color='white'/> },
    { name: 'Registered Instrument(s)',link: '/defaultlayout/registeredinstrument', icon: <CloudUploadIcon color='white'/>  },
    { name: 'Uploads',link: '/defaultlayout/uploads', icon: <CloudUploadIcon color='white'/> },
    { name: 'Report',link: '/defaultlayout/reports', icon: <ReportIcon color='white'/>  },
    { name: 'Invoices' , icon: <ReceiptIcon color='white'/>, children: [
      { name: 'Outstanding Bill',link: '/defaultlayout/outstandingbill' },
      { name: 'Paid Bill',link: '/defaultlayout/paidbill' },
    ]},
    { name: 'Apply for Pattern Approval Certificate',link: '/defaultlayout/applyapproval' , icon: <CheckCircleIcon color='white'/> },
    { name: 'Apply for Instrument Verification',link: '/defaultlayout/applyinstverification', icon: <CloudUploadIcon color='white'/>  },
    { name: 'Apply for Periodic Instrument Verification',link: '/defaultlayout/periodicinstrumentv', icon: <TimelineIcon color='white'/>  }


    
]




 function DefaultLayout(props) {
const dispatch = useDispatch()
const {data} = useSelector(state => state.isAuthenticated)
    const [openNest, setOpenNest] = React.useState(null);
  const classes = useStyles();


  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open] = React.useState(true);
  const {  history, location, container } = props

 
  const mobileAuthDashboard = [
    { name: 'HOME',icon: <DashboardIcon color='white'/>, link: '/defaultlayout/home'},
      { name: 'New Instrument Registration', link: '/defaultlayout/newinstrument', icon: <AddCircleIcon color='white'/> },
      { name: 'Registered Instrument(s)',link: '/defaultlayout/registeredinstrument', icon: <CloudUploadIcon color='white'/>  },
      { name: 'Uploads',link: '/defaultlayout/uploads', icon: <CloudUploadIcon color='white'/> },
      { name: 'Report',link: '/defaultlayout/reports', icon: <ReportIcon color='white'/>  },
      { name: 'Invoices' , icon: <ReceiptIcon color='white'/>, children: [
        { name: 'Outstanding Bill',link: '/defaultlayout/outstandingbill' },
        { name: 'Paid Bill',link: '/defaultlayout/paidbill' },
      ]},
      { name: 'Apply for Pattern Approval Certificate',link: '/defaultlayout/applyapproval' , icon: <CheckCircleIcon color='white'/> },
      { name: 'Apply for Instrument Verification',link: '/defaultlayout/applyinstverification', icon: <CloudUploadIcon color='white'/>  },
      { name: 'Periodic Instrument Verification',link: '/defaultlayout/periodicinstrumentv', icon: <TimelineIcon color='white'/>  },
      { name: 'Company Profile',link: '/defaultlayout/profile', icon: <AccountCircle color='white'/>},
      { name: 'Logout',icon: <ExitToApp color='white'/>}
  
  
      
  ]


  


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
      handleDrawerToggle()
      
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
        <Hidden mdUp>
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
          <Hidden smDown>
          <Grid container justifyContent='center' alignItems='center' spacing={4}>
          
              <Grid item>
              <Box my={2}>
                  <img style={{width: 70,  height: 70}} src={coat} alt='coat'/>
              </Box>
                   
              </Grid>
              <Grid item>
              <Box  textAlign='center'>
            <Box textAlign='center' color='white'  fontWeight='bold' fontSize={18}>
                FEDERAL MINISTRY OF INDUSTRY TRADE AND INVESTMENT
            </Box>
            <Box fontStyle='Nexa' color='white' textAlign='center' fontWeight='bold' fontSize={18}>
                WEIGHTS AND MEASURES DEPARTMENT PORTAL
            </Box>
          </Box>
              </Grid>
              <Grid item>
                  <img style={{width: 70,  height: 70}} src={ellipse} alt='ellipse'/>
              </Grid>
              
          </Grid>
           </Hidden>   
        </Toolbar>
        
      </AppBar>
     
      <Hidden smDown>
         <SwipeableDrawer
        variant="permanent"
        className={clsx(classes.drawerPaper, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
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
           <ListItemIcon style={{ margin: 0, color: 'white' }}>{item.icon}</ListItemIcon>
           <ListItemText primary={item.name} classes={{ primary: classes.sidebarText }} />
           {item.children ? <ListItemIcon className={classes.sidebarText}>{openNest === index ? <ExpandLess color='white'/> : <ExpandMore color='white'/>}</ListItemIcon> : null}
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
      <Hidden mdUp>
              
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
               <Box mt={2} fontWeight='bold' color='white'   fontSize={11}>
               FEDERAL MINISTRY OF INDUSTRY TRADE AND INVESTMENT
            </Box> 
            </Grid>
            <Grid>
            <Box fontStyle='Nexa'  fontWeight='bold' color='white'  fontSize={11}>
            WEIGHTS AND MEASURES DEPARTMENT PORTAL
            </Box>
            </Grid>
        </Grid>
         </Grid>
         </Box>
                <Divider />
        <Box mt={2}/>
        <List  component="div" disablePadding>
        {mobileAuthDashboard.map((item, index)=> {
       return <>
       <ListItem button style={{ '&:focus': { outline: "none" } }} onClick={ item.name === 'Logout' ? onLogout : () => handleClick(item, index)} selected={location.pathname === item.link}  >
           <ListItemIcon  style={{ margin: 0, color: 'white' }}>{item.icon}</ListItemIcon>
           <ListItemText  style={{fontSize: 12}} primary={item.name} classes={{ primary: classes.sidebarTextm }} />
           {item.children ? <ListItemIcon className={classes.sidebarText}>{openNest === index ? <ExpandLess color='white'/> : <ExpandMore color='white'/>}</ListItemIcon> : null}

       </ListItem>
       <Collapse key={item.name} in={openNest === index} timeout="auto" unmountOnExit>
           <List component="div" disablePadding>
               {
                   item.children ? item.children.map((item, index) => (
                       <ListItem key={item.name} button className={classes.nested} onClick={ () => handleClick(item, index)} selected={location.pathname === item.link}   >
                           <ListItemIcon style={{ color: "#fff", margin: 0 }}>{item.icon}</ListItemIcon>
                           {<ListItemText primary={item.name} key={index} classes={{ primary: classes.sidebarTextm }} />}
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
        <div className={classes.toolbar} />
        <Hidden smDown>
        <AppBar elevation={0}  style={{marginTop: 108}} position="fixed" color='white'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        
      })}>
      <Toolbar>
      
      <Grid container justifyContent='center' alignItems='center' spacing={1}>
        <Grid item md={10}>
          <Box fontWeight='bold' color='primary' flexWrap={true} fontSize={20}>Welcome! back <Box component='span' >  {data.name|| 'Company'}</Box></Box>
        </Grid>
      
        <Grid item md={1}>
           <Tooltip title="Profile">
        <IconButton
        onClick={()=> history.push('/defaultlayout/profile')}
          edge="end"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                
                color="inherit"
              >
                <AccountCircle color='primary' />
              </IconButton>
              </Tooltip>
        </Grid>
        <Grid item md={1}>
        <Tooltip title="Logout">
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={onLogout}
                color="inherit"
              >
                <ExitToApp color='primary'/>
              </IconButton>
              </Tooltip>
        </Grid>
      </Grid>
     

  
       
      </Toolbar>
        </AppBar>
        </Hidden>
          <Box  mt={{ xs: '-3%',sm: '-3%', md: '10%'}} mb={{ xs: '2%',sm: '2%', md: '2%'}}>
            <Breadcrumb/>
          </Box>
      <Box  >
        <Switch>
        <Suspense fallback= {<Spinner/>}>
                        {defaultlayout.map((route) => {
                            return route.component ? (
                                <Route key={route.path} path={route.path} exact={route.exact} name={route.name} render={props => (
                                    <route.component {...props} />
                                )} />
                            ) : (null);
                        })}
                        </Suspense>
                    </Switch> 
                    </Box>
                    <Box  > <Footer/></Box>
                   
      </main>
    </div>
  );
}


export default withRouter(DefaultLayout)
