import React from 'react';


import { makeStyles,Button, Grid, Box, TextField } from '../../mui';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));

export default function Uploads(props) {
 
    const classes = useStyles();
  
  
  // you can call this function anything
 

  return (
    <Box  mx={5}>
        <form>
      <Grid container spacing={2} justifyContent='flex-start' alignItems='center'>

        <Grid item xs={12} sm={6}>
          <Box mb={1}>
          <TextField id="filename"  variant="outlined" label='File Name' size='small'  fullWidth/>
          </Box>
       
        
       <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="outlined" color="primary" component="span">
          Select File
        </Button>
      </label>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Box mb={1}>
          <TextField id="filename"  variant="outlined" label='File Name' size='small'  fullWidth/>
          </Box>
        
       <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="outlined" color="primary" component="span">
          Select File
        </Button>
      </label>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Box mb={1}>
          <TextField id="filename"  variant="outlined" label='File Name' size='small'  fullWidth/>
          </Box>
        
       <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="outlined" color="primary" component="span">
          Select File
        </Button>
      </label>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Box mb={1}>
          <TextField id="filename"  variant="outlined" label='File Name' size='small'  fullWidth/>
          </Box>
        
       <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="outlined" color="primary" component="span">
          Select File
        </Button>
      </label>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Box mb={1}>
          <TextField id="filename"  variant="outlined" label='File Name' size='small'  fullWidth/>
          </Box>
        
       <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="outlined" color="primary" component="span">
          Select File
        </Button>
      </label>
        </Grid>
       
      </Grid>
      <Box my={3}>
         <Button  variant="contained" color="primary" component="span">
          Upload
        </Button>
      </Box>
     
      </form>
    </Box>
  );
}

