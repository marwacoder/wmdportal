import React from 'react';
import {withRouter, Redirect } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {
    IconButton,Box, OutlinedInput, InputLabel,Button,
    InputAdornment, FormControl, Person, Visibility, VisibilityOff
} from '../../../mui';

import {auth} from '../../../store/actions'
import Loader from 'react-loader-spinner'




const  SignIn =(props) =>{

  const dispatch = useDispatch()


  const {isLoggedIn, isLoading } = useSelector(state => state.isAuthenticated)
  
   const {handleForgotPassword} = props
    
    const [values, setValues] = React.useState({
    email: "",
    password: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(auth(values.email, values.password))

  }
  let authRedirect = null;
  if (isLoggedIn) {
    authRedirect = <Redirect to="/defaultlayout/home" />;
  }

  return (
      <Box width={300}>
        {authRedirect}
                  <form onSubmit={handleSubmit} >
                    
                      <Box mb={2}>
                          <FormControl  variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput
          fullWidth
            id="outlined-adornment-password"
            type={ 'text' }
            value={values.email}
            onChange={handleChange('email')}
            endAdornment={
              <InputAdornment position="end">
                   <Person />
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        </Box>
        <Box mb={2}>
                    <FormControl  variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          fullWidth
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        </Box>
        <div>
                          
                  
         <div style={{paddingBottom: 10}}>
            <Button fullWidth type='submit'
             color="primary" variant="contained"
             style={{ backgroundColor: '#07121F', color: 'white'}}
             disableRipple={isLoading}
              disableFocusRipple={isLoading}
              disabled={isLoading}
              isLoading={isLoading}
              
             >
            <span style={{color: '#fff'}}>{isLoading ? <Loader type="ThreeDots" 
                color="#f4f4f4"
                height={10}
                width={20} />: "SignIn" }</span> 
            </Button></div>
            <Button  color="secondary" onClick={handleForgotPassword}> Forgot Password?</Button>  
            </div>
          </form>
          </Box>
  );
}

export default withRouter(SignIn);