import React from 'react';

import {
   Box, OutlinedInput, InputLabel,Button,
    FormControl, Paper
} from '../../mui';







const  ContactUs =() =>{   
    
    const [values, setValues] = React.useState({
    email: "",
    password: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

 

  const handleSubmit = (e) => {
    e.preventDefault()
   

  }


  return (
      <Box mx={'30%'}>
      <Paper>
      <Box m={2}>
          
          <Box fontWeight='bold' pt={3} ml={2}color="primary">Contact Us</Box>
       
         
                  <form onSubmit={handleSubmit}>
                    
                      <Box my={2}>
                          <FormControl  variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
          <OutlinedInput
          fullWidth
            id="outlined-adornment-name"
            type={ 'text' }
            value={values.email}
            onChange={handleChange('email')}
            
            labelWidth={70}
          />
        </FormControl>
        
        </Box>
        <Box my={2}>
                          <FormControl  variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-mobile">Mobile Number</InputLabel>
          <OutlinedInput
          fullWidth
            id="outlined-adornment-mobile"
            type={ 'text' }
            value={values.email}
            onChange={handleChange('email')}
            
            labelWidth={70}
          />
        </FormControl>
        
        </Box>
        <Box my={2}>
                          <FormControl  variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-email">Email Address</InputLabel>
          <OutlinedInput
          fullWidth
            id="outlined-adornment-email"
            type={ 'text' }
            value={values.email}
            onChange={handleChange('email')}
           
            labelWidth={70}
          />
        </FormControl>
        
        </Box>
        <Box my={2}>
                          <FormControl  variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-subject">Subject</InputLabel>
          <OutlinedInput
          fullWidth
            id="outlined-adornment-subject"
            type={ 'text' }
            value={values.email}
            onChange={handleChange('email')}
           
            labelWidth={70}
          />
        </FormControl>
        
        </Box>
        <Box my={2}>
                          <FormControl  variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-comment">Comment</InputLabel>
          <OutlinedInput
          fullWidth
          multiline
          rows={4}
            id="outlined-adornment-comment"
            type={ 'text' }
            value={values.email}
            onChange={handleChange('email')}
            
            labelWidth={70}
          />
        </FormControl>
        
        </Box>
        <div>
                          
                  
         <div style={{paddingBottom: 10}}> <Button type="submit" fullWidth  color="primary" variant="contained">
                     <span style={{color: '#fff'}}>Submit</span> 
                          </Button></div>
                         
                      </div>
          </form>
        
          </Box>
              </Paper>
              </Box>
  );
}

export default ContactUs;