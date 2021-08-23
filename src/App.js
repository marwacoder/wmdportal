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
    const primaryColor = darkState ? grey[800] : green[500];
    const secondaryColor = darkState ? red[300] : red[500];
    const limeColor = darkState ? lime[300] : lime[500];
    const [route, setRoute] = React.useState(false);
    
    


  
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
     <Router history={history}>
        <Dashboard history={history}   darkState={darkState} 
         />
  
        <Switch >
          <Redirect
        exact
        from="/"
        to="/dashboard"
            />
            <Suspense fallback= {<Spinner/>}>
            <Box ml={45}>
          <Route exact path="/dashboard" name="Dashboard" render={props => <Home {...props}/>}/>
              <Route path='/downloads' name="Downloads" render={props => <Downloads  darkState={darkState} {...props} />} />
              <Route path='/auth' name="Auth" render={props => <Auth history={history}  darkState={darkState} {...props} />} />
            <Route path='/fmiti' name="FMITI" render={props => <FMITI {...props} />} />
            <Route path='/wmd' name="WMD" render={props => <WMD {...props} />} />
            <Route path='/contactus' name="ContactUs" render={props => <ContactUs {...props} />} />
            <Route path='/newinstrument' name="NewInstrumentReg" render={props => <NewInstrumentReg {...props} />} />
            <Route path='/registeredinstrument' name="RegisteredInstrument" render={props => <RegisteredInstrument {...props} />} />
            <Route path='/uploads' name="Uploads" render={props => <Uploads {...props} />} />
            <Route path='/reports' name="Reports" render={props => <Reports {...props} />} />
            <Route path='/outstandingbill' name="OutstandingBill" render={props => <OutstandingBill {...props} />} />
            <Route path='/paidbill' name="PaidBill" render={props => <PaidBill {...props} />} />
            <Route path='/applyapproval' name="ApplyApproval" render={props => <ApplyApproval {...props} />} />
            <Route path='/applyinstverification' name="ApplyInstVerification" render={props => <ApplyInstVerification {...props} />} />
            </Box>
            </Suspense>
          </Switch>
          
        </Router>
        <Footer/>
    </MuiThemeProvider>
  );
}

export default App;
