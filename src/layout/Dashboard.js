import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux'
import {routes} from './routes'

import InfoIcon from '@material-ui/icons/Info';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import FindInPageIcon from '@material-ui/icons/FindInPage';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import {Box, List, Menu, MenuIcon, Collapse,  useScrollTrigger,ListItemIcon,
    MenuItem, IconButton, Toolbar, AppBar, ExpandLess, ExpandMore,Fab, KeyboardArrowUpIcon,
    makeStyles, ListItem,Divider, Grid, ListItemText,Zoom,
    SwipeableDrawer,withStyles, Hidden, DashboardIcon, ExitToApp} from '../mui'

import coat from '../assets/Coat_of_arms_of_Nigeria.png'
import ellipse from '../assets/Ellipse 20.png'
import RegisterCompany from '../views/Dashboard/RegisterdCompany'
import RegisteredInstrument from '../views/Dashboard/RegisteredInstrument'
import SignIn from '../views/Auth/AuthContainer'

import Footer from '../views/Dashboard/Footer';

const drawerWidth = 320


const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);
const useStyles = makeStyles((theme) => ({
  
  grow: {
    flexGrow: 1,
    backgroundImage: ellipse
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.paper
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  selected: {
    borderRadius: 5,
    height: 40,
    
    '&.Mui-selected': {
      '&:hover': {
        backgroundColor: "white",
      },
        backgroundColor: "white",
        color: "#07121F",
        fontWeight: 600
    }
  },
  log: {
    borderRadius: 5,
    height: 40,
        backgroundColor: "#f44336",
        fontWeight: 600,
        '&:hover': {
          backgroundColor: "#4caf50",
        },
  }
}));


const menu = [
            { name: 'HOME', link: '/dashboard/home' },
            { name: 'DOWNLOADS',link: '/dashboard/downloads' },
            {
                name: "ABOUT US", children: [
                    { name: 'FMITI', link: '/dashboard/fmiti' },
                    {name: 'WMD', link: '/dashboard/wmd'}
            ] },
            {
                name: "QUICK SEARCH", children: [
                    { name: 'Registered Company' },
                    {name: 'Registered Instrument'}
            ] },
            { name: 'HELP', children: [
                { name: 'FAQ', link: '/dashboard/faq' },
                {name: 'Contact Us', link: '/dashboard/contactus'}
        ] } 
        ]





        const mobileMenu = [
            { name: 'HOME',icon: <DashboardIcon color='primary'/>, link: '/dashboard/home'},
            { name: 'DOWNLOADS' , icon: <CloudDownloadIcon color='primary'/>,link: '/dashboard/downloads'},
            {
                name: "ABOUT US", icon: <InfoIcon color='primary'/>, children: [
                    { name: 'FMITI', link: '/dashboard/fmiti' },
                    {name: 'WMD', link: '/dashboard/wmd'}
            ] },
            {
                name: "QUICK SEARCH", icon: <FindInPageIcon color='primary'/>, children: [
                    { name: 'Registered Company', link: '/dashboard/registerdcompany' },
                    {name: 'Registered Instrument', link: '/dashboard/registerdinstrument'}
            ] },
            { name: 'HELP', icon: <HelpOutlineIcon color='primary'/>, children: [
                { name: 'FAQ', link: '/dashboard/faq' },
                {name: 'Contact Us', link: '/dashboard/contactus'}
        ] },{ name: 'LOGOUT',icon: <ExitToApp color='primary'/>}
            
        ]
        
        
const Dashboard =(props)=> {
  const classes = useStyles();
  const [registeredCompany, setRegisteredCompany] =  React.useState(false)
  const [registeredInstrument, setRegisteredInstrument] =  React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [auth, setAuth] = React.useState(false);
  const [menuItem, setMenItem] = React.useState(null);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openNest, setOpenNest] = React.useState(null);

  const {isLoggedIn } = useSelector(state => state.isAuthenticated)
  const { container, history, location } = props



 

  const handleClickOpenAuth = () => {
    setAuth(true);
  };

  const handleCloseAuth = () => {
    setAuth(false);
  };

  const handleRegisteredCompany = () => {
    setRegisteredCompany((prev) => !prev)
}

const handleRegisteredInstrument = () => {
  setRegisteredInstrument((prev) => !prev)
}
  
  const handleDrawerToggle = () => {
    setMobileOpen(mobileOpen=> !mobileOpen)
}
 

  const handleClick = (item, index) => {
  
    if(item.name === 'Registered Company') return handleRegisteredCompany()
    if(item.name === 'Registered Instrument') return handleRegisteredInstrument()
    if (item.children) {
      openNest === index ?
          setOpenNest(null) :
          setOpenNest(index)
  } else {
      history.push(item.link);
  } 
  
      }

    const handleMenuClose = () => {
        setAnchorEl(null);
       
      };
     
      let authRedirect = null;
        if(isLoggedIn === true) {
            authRedirect = <Redirect to ='/defaultlayout/home'/>
         }
      const drawer = (
        <>
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
        
          
          <Divider color="inherit" />
            <Box mt={2}>
            <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
        {mobileMenu.map((item, index)=> {
           return <>
           <ListItem button className={"sidebarBtn"} style={{ '&:focus': { outline: "none" } }} onClick={ () => handleClick(item, index)} selected={location.pathname === item.link} >
               <ListItemIcon style={{ margin: 0 }}>{item.icon}</ListItemIcon>
               <ListItemText primary={item.name} classes={{ primary: classes.sidebarText }} />
               {item.children ? <ListItemIcon className={classes.nestedIcon}>{openNest === index ? <ExpandLess /> : <ExpandMore />}</ListItemIcon> : null}
           </ListItem>
           <Collapse key={item.name} in={openNest === index} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                   {
                       item.children ? item.children.map((item, index) => (
                           <ListItem key={item.name} button className={classes.nested} onClick={ () => handleClick(item, index)} selected={location.pathname === item.link}   >
                               <ListItemIcon style={{ margin: 0 }}>{item.icon}</ListItemIcon>
                               {<ListItemText primary={item.name} key={index} classes={{ primary: classes.sidebarText }} />}
                           </ListItem>
                       ))
                       
                           : null}
                      
               </List>
           </Collapse>
       </>
})}

    </List>
     </Box>
           
          </>
      );

   
    const mobileMenuId = 'primary-search-account-menu-mobile';
    
    const renderMenu = (
   
    <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
       
     {Array.isArray(menuItem) ? menuItem.map((item, index) => {
      
      return (
        <StyledMenuItem key={item.name} button onClick={() => handleClick(item, index)} selected={location.pathname === item.link} >
            <ListItemText primary={item.name}/>
            </StyledMenuItem>
      );   
    }): null}
   </StyledMenu>
    );
  return (
    <div >
      {authRedirect}
      <Hidden xsDown>
      <AppBar color='white' position='fixed' >
          <Hidden xsDown>
        <Toolbar>
          
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
      
      <Box >
      <AppBar color="primary" position='fixed' style={{top: 80}} >
        <Toolbar >
       
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
         
            <Box className={classes.appBarLink}>
              
              <Hidden xsDown={true} implementation="css">
                  
                <Box ml='60%'> 
                <List   className={classes.navLinks}>
                  
                  {menu.map((item, index) => (
                   <Box  color='white'>
                      <MenuItem key={item.name} classes={{ selected: classes.selected }} button onClick={item.children ?   (event)=> {
                          setMenItem(item.children) 
                          setAnchorEl(event.currentTarget) } : () => handleClick(item, index)} selected={location.pathname === item.link}  >
                        <ListItemText primary={item.name}/>
                      </MenuItem>
                    </Box>
                    
                  ))}
                  <Box  >
                    <MenuItem  className={classes.log} onClick={()=> handleClickOpenAuth()}>
                   <ListItemText>LOGIN</ListItemText>
                   </MenuItem>
                  </Box>
                   
                   
                  
                      
                  </List>
                  
                </Box>
                
             
                 </Hidden>

            </Box>
          
            <Box className={classes.grow} />
           
           
          
        </Toolbar>
        
      </AppBar>
      
      </Box>
      </Hidden>
      <Hidden smUp>
      <AppBar color="primary" position='fixed'>
        <Toolbar >
       
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
        </Toolbar>
        
      </AppBar>
      </Hidden>
      <Box id="back-to-top-anchor" />
<div className={classes.sectionMobile}>
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
           
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
                
                         {drawer}
                </SwipeableDrawer>
                
                    </Hidden>


                   
                   
          </nav>
          {renderMenu}
          <RegisterCompany registeredCompany={registeredCompany} handleRegisteredCompany={handleRegisteredCompany}/>
          <RegisteredInstrument registeredInstrument={registeredInstrument} handleRegisteredInstrument={handleRegisteredInstrument}/>
          <SignIn auth={auth} handleCloseAuth={handleCloseAuth}/>
        </div>
        <main>
      <Box  my={{sm: '12%', xs: '11%'}}>
      <Switch>
                        {routes.map((route) => {
                            return route.component ? (
                                <Route key={route.path} path={route.path} exact={route.exact} name={route.name} render={props => (
                                    <route.component {...props} />
                                )} />
                            ) : (null);
                        })}
                    </Switch> 
                    <Footer/>
      </Box>
     
      </main>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon style={{color: '#fff'}}/>
        </Fab>
      </ScrollTop>
    </div>
  );
}


function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}
ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default withRouter(Dashboard)