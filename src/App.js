import 'date-fns';
import React,{Suspense} from 'react';
import Dashboard from '../src/layout/Dashboard'
import { createBrowserHistory } from 'history';
import { createTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'

import Nexa from './font/Nexa-Light.otf';
import {Box} from './mui'
import Spinner from '../src/helpers/Spinner/Spinner'

import { red, grey, green, lime } from '@material-ui/core/colors';
import Home from './views/Dashboard/Home';
import Downloads from './views/Dashboard/Downloads';
import Footer from './views/Dashboard/Footer';
import Auth from './views/Auth/AuthContainer';
import FMITI from './views/Dashboard/FMITI';
import WMD from './views/Dashboard/WMD';
import ContactUs from './views/Dashboard/ContactUs';
import NewInstrumentReg from './views/AuthDashboard/NewInstrumentReg';
import RegisteredInstrument from './helpers/Table'
import Uploads from './views/AuthDashboard/Uploads'
import Reports from './views/AuthDashboard/Reports'
import OutstandingBill from './views/Tables/OutstandingBill'
import PaidBill from './views/Tables/PaidBill'
import ApplyApproval from './views/Tables/ApplyApproval'
import ApplyInstVerification from './views/Tables/ApplyInstVerification'


import DefaultLayout from './layout/DefaultLayout'

export const history = createBrowserHistory();

const nexa = {
  fontFamily: 'Nexa',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Nexa'),
    local('Nexa-Light'),
    url(${Nexa}) format('otf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

function App() {

  const [darkState, setDarkState] = React.useState(false);
    const darkTheme = darkState ? "dark" : "light";
    const primaryColor = darkState ? grey[800] : '#07121F';
    const secondaryColor = darkState ? red[300] : red[500];
    const limeColor = darkState ? lime[300] : lime[500];
    const [route, setRoute] = React.useState(false);
    
    const [auth, setAuth] = React.useState(false)


  console.log(auth,'ppp')
    let theme = createTheme({
      typography: {
        
        fontFamily: 'Nexa, Roboto',
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [nexa],
        },
      },
    },
      transitions: {
        easing: {
  
        },
        duration: {
          enteringScreen: 225
        }
      },
      palette: {
        type: darkTheme,
        primary: {
          main: primaryColor
        },
        secondary: {
          main: secondaryColor,
          contrastText: '#fff'
        },
        limeColor: {
          main: limeColor,
          contrastText: '#fff'
        }
  
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920
        }
      }
    });
  
    theme = responsiveFontSizes(theme);


    
  return (
    <MuiThemeProvider theme={theme}>
     <Router  auth={auth} setAuth={setAuth}>
        {/* <Dashboard history={history}  darkState={darkState}  */}
        
        
        {/* <Dashboard/> */}
        <Switch >
        <Redirect
        exact
        from="/"
        to="/dashboard/home"
            />
          <Redirect
        exact
        from="/defaultlayout"
        to="/defaultlayout/newinstrument"
            />
            <Suspense fallback= {<Spinner/>}>
          <Route path='/dashboard' component= {Dashboard} key='Dashboard'/>
          <Route path='/defaultlayout' component= {DefaultLayout} key='DefaultLayout'/>
            </Suspense>
          </Switch>
          
        </Router>
        <Footer/>
    </MuiThemeProvider>
  );
}

export default App;
