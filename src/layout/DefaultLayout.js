import React from 'react';
import clsx from 'clsx'
import { Switch, Route, withRouter } from 'react-router-dom'
import {defaultlayout} from './routes'
import {  useTheme } from '@material-ui/core/styles';



import Footer from '../views/Dashboard/Footer';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ReportIcon from '@material-ui/icons/ReportOutlined';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';
import {Box, List, MenuIcon, Collapse,  ListItemIcon, ChevronLeftIcon,
    IconButton, Toolbar, AppBar,AccountCircle, ChevronRightIcon, CssBaseline,
    makeStyles, ListItem,Divider, Grid, ListItemText, ReceiptIcon, ExpandLess, ExpandMore,
    SwipeableDrawer, Hidden, ExitToApp} from '../mui'


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
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
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
}));



const authDashboard = [
    { name: 'New Instrument Registration', link: '/defaultlayout/newinstrument', icon: <AddCircleIcon/> },
    { name: 'Registered Instrument(s)',link: '/defaultlayout/registeredinstrument', icon: <CloudUploadIcon/>  },
    { name: 'Uploads',link: '/defaultlayout/uploads', icon: <CloudUploadIcon/> },
    { name: 'Report',link: '/defaultlayout/reports', icon: <ReportIcon/>  },
    { name: 'Invoices' , icon: <ReceiptIcon/>, children: [
      { name: 'Outstanding Bill',link: '/defaultlayout/outstandingbill' },
      { name: 'Paid Bill',link: '/defaultlayout/paidbill' },
    ]},
    { name: 'Apply for Pattern Approval Certificate',link: '/defaultlayout/applyapproval' , icon: <CheckCircleIcon/> },
    { name: 'Apply for Instrument Verification',link: '/defaultlayout/applyinstverification', icon: <CloudUploadIcon/>  }


    
]

 function DefaultLayout(props) {

    const [openNest, setOpenNest] = React.useState(null);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const {  history, location } = props

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const handleClick = (item, index) => {

    if (item.children) {
      openNest === index ?
          setOpenNest(null) :
          setOpenNest(index)
  } else {
      history.push(item.link);
  } 
  
      }

  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar   position='fixed'  className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
          <Hidden xsDown>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          
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
       
        </Toolbar>
        </Hidden>
      </AppBar>
     
      
      <SwipeableDrawer
        variant="permanent"
        className={clsx(classes.drawer, {
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <Box mt={5}/>
        <List>
        {authDashboard.map((item, index)=> {
       return <>
       <ListItem button className={"sidebarBtn"} style={{ '&:focus': { outline: "none" } }} onClick={ () => handleClick(item, index)} selected={location.pathname === item.link}  >
           <ListItemIcon style={{ color: "#07121F"}}>{item.icon}</ListItemIcon>
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
                       <Box pl={10}>
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
        <Box >
        <Tooltip title="Logout">
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                
                color="inherit"
              >
                <ExitToApp style={{color: 'white'}}/>
              </IconButton>
              </Tooltip>
         </Box>

           </List>
       </Collapse>
       </>
    })}
        </List>
      </SwipeableDrawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />  
        <Switch>
                        {defaultlayout.map((route) => {
                            return route.component ? (
                                <Route key={route.path} path={route.path} exact={route.exact} name={route.name} render={props => (
                                    <route.component {...props} />
                                )} />
                            ) : (null);
                        })}
                    </Switch> 
                    <Box  width='100%'> <Footer/></Box>
                   
      </main>
    </div>
  );
}


export default withRouter(DefaultLayout)