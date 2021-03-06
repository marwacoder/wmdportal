import React from 'react';
import { useDispatch} from 'react-redux'
import Loader from 'react-loader-spinner'
import {
  IconButton,Box, OutlinedInput, InputLabel,Button,
  InputAdornment, FormControl, Visibility, VisibilityOff
} from '../../../mui';
import BusinessIcon from '@material-ui/icons/Business';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {register} from '../../../store/actions'

import {useSelector} from 'react-redux'

export default function FormDialog(props) {
  const dispatch = useDispatch()

  const {isLoading } = useSelector(state => state.isAuthenticated)
  const [values, setValues] = React.useState({
    name: '',
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
    dispatch(register({name: values.name, email: values.email, password: values.password}))

  }



  return (
    <Box>
    <form onSubmit={handleSubmit} >
    <Box mb={2}>
            <FormControl  variant="outlined" fullWidth>
<InputLabel htmlFor="outlined-adornment-name">Company Name</InputLabel>
<OutlinedInput
fullWidth
id="outlined-adornment-name"
type={ 'text' }
value={values.name}
onChange={handleChange('name')}
endAdornment={
<InputAdornment position="end">
     <BusinessIcon />
</InputAdornment>
}
labelWidth={70}
/>
</FormControl>
</Box>
        <Box mb={2}>
            <FormControl  variant="outlined" fullWidth>
<InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
<OutlinedInput
fullWidth
id="outlined-adornment-email"
type={ 'text' }
value={values.email}
onChange={handleChange('email')}
endAdornment={
<InputAdornment position="end">
     <MailOutlineIcon />
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
             style={{ backgroundColor: '#1a237e', color: 'white'}}
             disableRipple={isLoading}
              disableFocusRipple={isLoading}
              disabled={isLoading}
              isLoading={isLoading}
              
             >
            <span style={{color: '#fff'}}>{isLoading ? <Loader type="ThreeDots" 
                color="#f4f4f4"
                height={10}
                width={20} />: "REGISTER" }</span> 
</Button></div>
<Button  color="secondary" > Forgot Password?</Button>  
</div>
</form>
</Box>
  );
}
