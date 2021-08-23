import React from 'react';
import {withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import {  useTheme } from '@material-ui/core/styles';

import ListItemIcon from '@material-ui/core/ListItemIcon';

import InfoIcon from '@material-ui/icons/Info';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ReportIcon from '@material-ui/icons/Report';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import {Box, List, Menu, MenuIcon, Collapse,  useScrollTrigger,
    MenuItem, IconButton, Toolbar, AppBar,ChevronLeftIcon, ChevronRightIcon,
    makeStyles, ListItem,Divider, Grid, ListItemText,Zoom,
    SwipeableDrawer,withStyles, Hidden, DashboardIcon, ExitToApp} from '../mui'

import coat from '../assets/Coat_of_arms_of_Nigeria.png'
import ellipse from '../assets/Ellipse 20.png'
import RegisterCompany from '../views/Dashboard/RegisterdCompany'
import RegisteredInstrument from '../views/Dashboard/RegisteredInstrument'

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
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },



//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
}));


const menu = [
            { name: 'HOME', link: '/dashboard' },
            { name: 'DOWNLOADS',link: '/downloads' },
            {
                name: "ABOUT US", children: [
                    { name: 'FMITI', link: '/fmiti' },
                    {name: 'WMD', link: '/wmd'}
            ] },
            {
                name: "QUICK SEARCH", children: [
                    { name: 'Registered Company' },
                    {name: 'Registered Instrument'}
            ] },
            { name: 'HELP', children: [
                { name: 'FAQ', link: '/faq' },
                {name: 'Contact Us', link: '/contactus'}
        ] },
        
        
            
        ]



        const authDashboard = [
          { name: 'New Instrument Registration', link: '/newinstrument', icon: <AddCircleIcon/> },
          { name: 'Registered Instrument(s)',link: '/registeredinstrument', icon: <CloudUploadIcon/>  },
          { name: 'Uploads',link: '/uploads', icon: <CloudUploadIcon/> },
          { name: 'Report',link: '/reports', icon: <ReportIcon/>  },
          { name: 'Invoices' , icon: <ReceiptIcon/>, children: [
            { name: 'Outstanding Bill',link: '/outstandingbill' },
            { name: 'Paid Bill',link: '/paidbill' },
          ]},
          { name: 'Apply for Pattern Approval Certificate',link: '/applyapproval' , icon: <CheckCircleIcon/> },
          { name: 'Apply for Instrument Verification',link: '/applyinstverification', icon: <CloudUploadIcon/>  }
      
      
          
      ]


        const mobileMenu = [
            { name: 'HOME',icon: <DashboardIcon/>, link: '/dashboard'},
            { name: 'DOWNLOADS' , icon: <CloudDownloadIcon/>,link: '/downloads'},
            {
                name: "ABOUT US", icon: <InfoIcon/>, children: [
                    { name: 'FMITI', link: '/fmiti' },
                    {name: 'WMD', link: '/wmd'}
            ] },
            {
                name: "QUICK SEARCH", icon: <FindInPageIcon/>, children: [
                    { name: 'Registered Company', link: '/registerdcompany' },
                    {name: 'Registered Instrument', link: '/registerdinstrument'}
            ] },
            { name: 'HELP', icon: <HelpOutlineIcon/>, children: [
                { name: 'FAQ', link: '/faq' },
                {name: 'Contact Us', link: '/contactus'}
        ] },{ name: 'LOGOUT',icon: <ExitToApp/>}
            
        ]
        
        
const Dashboard =(props)=> {
  const classes = useStyles();
  const [registeredCompany, setRegisteredCompany] =  React.useState(false)
  const [registeredInstrument, setRegisteredInstrument] =  React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selected, setSelected] = React.useState(0);
  const [selectedSub, setSelectedSub] = React.useState(null);
  const [selectedMob, setSelectedMob] = React.useState(null);
  const [menuItem, setMenItem] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openNest, setOpenNest] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const theme = useTheme();
  const { container, history } = props

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMainMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    
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
  const handleMainMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const handleClick = (item, index) => {
     

    setSelected(index)
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
      const AuthDrawer = (
        <>
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider color="inherit" />
            <Box mt={2}>
            <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
        {authDashboard.map((item, index)=> {
           return <>
           <ListItem button className={"sidebarBtn"} style={{ '&:focus': { outline: "none" } }} onClick={ () => handleClick(item, index)} selected={selected === index}  >
               <ListItemIcon style={{ color: "#4caf50"}}>{item.icon}</ListItemIcon>
               <ListItemText primary={item.name} classes={{ primary: classes.sidebarText }} />
               {item.children ? <ListItemIcon className={classes.nestedIcon}>{openNest === index ? <ExpandLess /> : <ExpandMore />}</ListItemIcon> : null}

           </ListItem>
           <Collapse key={item.name} in={openNest === index} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                   {
                       item.children ? item.children.map((item, index) => (
                           <ListItem key={item.name} button className={classes.nested} onClick={ () => handleClick(item, index)} selected={selected === index}   >
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
        </Box>
          </>
      );


      const drawer = (
        <>
            <Box m={2}>
            <Grid container alignItems='center' justifyContent='center' alignContent='center'>
           <Grid item xs>
            <img style={{width: 60, marginRight: 5, height: 60}} src={coat} alt='coat'/>
        </Grid>
        <Grid> <img style={{width: 60, height: 60}}  src={ellipse} alt='ellipse'/></Grid>
        <Grid container alignItems='center' justifyContent='center' alignContent='center'>
            <Grid>
               <Box mt={2} fontWeight='bold' fontSize={11}>
                FEDERAL MINISTRY OF INDUSTRY AND INVESTMENT
            </Box> 
            </Grid>
            <Grid>
            <Box fontStyle='Nexa'  fontWeight='bold' fontSize={11}>
                WEIGHT AND MEASURES DEPARTMENTAL PORTAL
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
           <ListItem button className={"sidebarBtn"} style={{ '&:focus': { outline: "none" } }} onClick={ () => handleClick(item, index)} selected={selected === index}  >
               <ListItemIcon style={{ color: "#4caf50", margin: 0 }}>{item.icon}</ListItemIcon>
               <ListItemText primary={item.name} classes={{ primary: classes.sidebarText }} />
               {item.children ? <ListItemIcon className={classes.nestedIcon}>{openNest === index ? <ExpandLess /> : <ExpandMore />}</ListItemIcon> : null}
           </ListItem>
           <Collapse key={item.name} in={openNest === index} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                   {
                       item.children ? item.children.map((item, index) => (
                           <ListItem key={item.name} button className={classes.nested} onClick={ () => handleClick(item, index)} selected={selected === index}   >
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
     </Box>
           
          </>
      );

    const menuId = 'primary-search-account-menu';
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
        <StyledMenuItem key={item.name} button onClick={() => handleClick(item, index)} selected={selected === index} >
            <ListItemText primary={item.name}/>
            </StyledMenuItem>
      );   
    }): null}
   </StyledMenu>
    );
  return (
    <div className={classes.grow}>
      <AppBar color='transparent' position='relative' className={classes.appBar}>
          <Hidden xsDown>
        <Toolbar>
            <Box mt={2}>
            <img style={{width: 100, marginRight: 5, height: 100}} src={coat} alt='coat'/>
          <img style={{width: 100, height: 100}} src={ellipse} alt='ellipse'/>
            </Box>
         
          <Box ml={5} >
            <Box  fontWeight='bold' fontSize={22}>
                FEDERAL MINISTRY OF INDUSTRY AND INVESTMENT
            </Box>
            <Box fontStyle='Nexa'  fontWeight='bold' fontSize={22}>
                WEIGHT AND MEASURES DEPARTMENTAL PORTAL
            </Box>
          </Box>
          
        </Toolbar>
        </Hidden>
      </AppBar>
      <Box >
      <AppBar color="primary" position='relative' className={classes.appBar}>
        <Toolbar >
        <Box className={classes.sectionDesktop}>
            <IconButton
              onClick={handleDrawerOpen}
            edge="start"
            aria-controls={menuId}
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon style={{color:'white'}}/>
            </IconButton>
          </Box>
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
                  
                <Box ml='50%'> 
                <List   className={classes.navLinks}>
                  
                  {menu.map((item, index) => (
                   <Box  color='white'>
                      <MenuItem key={item.name}  button onClick={item.children ?   (event)=> {
                          setMenItem(item.children) 
                          setAnchorEl(event.currentTarget) } : () => handleClick(item, index)} selected={selected === index} >
                        <ListItemText primary={item.name}/>
                      </MenuItem>
                    </Box>
                    
                  ))}
         
             

                  </List>
                  
                </Box>
                
         
                 </Hidden>

            </Box>
          
            <Box className={classes.grow} />
           
           
          
        </Toolbar>
        
      </AppBar>
      </Box>
      <Box mt={5}/>
      <div className={classes.sectionDesktop}>
      <nav className={classes.drawer} aria-label="mailbox folderss">
      <Hidden xsDown implementation="css">
                    <SwipeableDrawer
                            onOpen={handleDrawerOpen}
                            container={container}
                            variant="permanent"
                            anchor={'left'}
                            open={open}
                            onClose={handleDrawerOpen}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
              >
                
                         {AuthDrawer}
                </SwipeableDrawer>
                
        </Hidden>
      </nav>
      </div>
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


                    <main>
                      
                    </main>
                   
          </nav>
          {renderMenu}
          <RegisterCompany registeredCompany={registeredCompany} handleRegisteredCompany={handleRegisteredCompany}/>
          <RegisteredInstrument registeredInstrument={registeredInstrument} handleRegisteredInstrument={handleRegisteredInstrument}/>
        </div>
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