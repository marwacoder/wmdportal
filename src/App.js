import React,{Suspense, lazy, useLayoutEffect} from 'react';
import Dashboard from '../src/layout/Dashboard'
import { createBrowserHistory } from 'history';
import { createTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import { Switch, Route, Router, Redirect } from 'react-router-dom'

import Nexa from './font/Nexa-Light.otf';

import Spinner from '../src/helpers/Spinner/Spinner'

import { red, grey, green } from '@material-ui/core/colors';




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
    const secondaryColor = darkState ? red[300] : red[900];
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
      {/* <Router history={history} >
        <Switch>
           <Redirect
        exact
        from="/"
        to="/dashboard"
          />
          
          <Route path="/" name="Home" key="home" component={<Dashboard/>} />
        </Switch>
      </Router> */}
      <Dashboard/>
    </MuiThemeProvider>
  );
}

export default App;
