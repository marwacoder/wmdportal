import React,{Suspense, lazy, useLayoutEffect} from 'react';
import {Route, Switch, } from 'react-router-dom'
import routes from './routes'


import ListItemIcon from '@material-ui/core/ListItemIcon';

import InfoIcon from '@material-ui/icons/Info';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


import {Box, List, Menu, MenuIcon, Collapse,  
    MenuItem, IconButton, Toolbar, AppBar,
    makeStyles, ListItem,Divider, Grid, ListItemText,
    SwipeableDrawer,withStyles, Hidden, DashboardIcon, ExitToApp} from '../mui'

import coat from '../assets/Coat_of_arms_of_Nigeria.png'
import ellipse from '../assets/Ellipse 20.png'


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
}));


const menu = [
            { name: 'HOME', link: '/dashboard' },
            { name: 'DOWNLOADS',link: '/download' },
            {
                name: "ABOUT US", children: [
                    { name: 'FMITI', link: '/fmiti' },
                    {name: 'WMD', link: '/wmd'}
            ] },
            {
                name: "QUICK SEARCH", children: [
                    { name: 'Registered Company', link: '/registerdcompany' },
                    {name: 'Registered Instrument', link: '/registerdinstrument'}
            ] },
            { name: 'HELP', children: [
                { name: 'FAQ', link: '/faq' },
                {name: 'Contact Us', link: '/contactus'}
        ] },
            
        ]


        const mobileMenu = [
            { name: 'HOME',icon: <DashboardIcon/>},
            { name: 'DOWNLOADS' , icon: <CloudDownloadIcon/>},
            {
                name: "ABOUT US", icon: <InfoIcon/>, children: [
                    { name: 'FMITI' },
                    {name: 'WMD'}
            ] },
            {
                name: "QUICK SEARCH", icon: <FindInPageIcon/>, children: [
                    { name: 'Registered Company' },
                    {name: 'Registered Instrument'}
            ] },
            { name: 'HELP', icon: <HelpOutlineIcon/>, children: [
                { name: 'FAQ' },
                {name: 'Contact Us'}
        ] },{ name: 'LOGOUT',icon: <ExitToApp/>}
            
        ]
        
        
export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
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

  const { container, history, location } = props

  const [open, setOpen] = React.useState(false);

  const handleMainMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    
  };



  
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
    if (item.children) {
        openNest === index ?
            setOpenNest(null) :
            setOpenNest(index)
    } else {
        history.push(item.link);
        console.log(item)
    }
    
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
       
      };


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
                           <ListItem key={item.name} button className={classes.nested} onClick={() => handleClick(item, index)} selected={selected === index}   >
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
      <AppBar color='transparent' position="static">
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
      <AppBar color="primary" position='static'>
        <Toolbar>
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
      <Toolbar id="back-to-top-anchor" />
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
          {/* <main className={classes.content}>
                    <div className={classes.toolbar} />
                        {routes.map((route) => {
                            return route.component ? (
                                <Route key={route.path} path={route.path} exact={route.exact} name={route.name} render={props => (
                                    <route.component {...props} />
                                )} />
                            ) : (null);
                        })}
                </main> */}
        </div>
     
     {renderMenu}
    </div>
  );
}
