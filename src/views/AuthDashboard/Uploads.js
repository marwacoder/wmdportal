import React from 'react';


import { makeStyles,Button, Grid, Box, TextField, Paper} from '../../mui';
import {useDispatch} from 'react-redux'
import {updateBreadcrumbs} from '../../store/actions'


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

export default function Uploads() {
 
    const classes = useStyles();

    const dispatch = useDispatch()
  
    React.useEffect(()=> {
      dispatch(updateBreadcrumbs({name: "Upload(s)", link: '/defaultlayout/uploads'}))
    })
  // you can call this function anything
 

  return (
    
    
      <Box    >
      <Paper elevation={0}>
        <form>
        <Box mx={5} py={3}>
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
      </Box>
      </form>
      </Paper>
      </Box>
    
  );
}

