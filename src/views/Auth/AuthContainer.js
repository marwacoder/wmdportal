import React from 'react';


import {
  Paper, withStyles, Button, Dialog,Box, MuiDialogTitle,MuiDialogActions,
  IconButton, CloseIcon, Typography, makeStyles, MuiDialogContent
} from '../../mui'

import SignIn from '../Auth/SignIn/SignIn';
import SignUp from '../Auth/SignUp/SignUp'
import ForgotPassword from '../Dashboard/ForgotPassword';

const styles = (theme) => ({
  root: {
    margin: 0,
        padding: theme.spacing(2),
        width: 100,
textField: {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
    },
  
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


export default function CustomizedDialogs(props) {

    const {auth, handleCloseAuth} = props

    
    const [toggleAuth, setToggleAuth] = React.useState(false);
    const [forgotPasswod, setForgotPasswod] = React.useState(false);
       
   
    const handleToggleAuthForm = () => {
        setToggleAuth((prev) => !prev)
    }

    const handleForgotPassword = () => {
      setForgotPasswod((prev) => !prev)
  }

  


  return (     
     <Box >
     <Dialog  open={auth} onClose={handleCloseAuth} aria-labelledby="form-dialog-title">
        <DialogTitle id="customized-dialog-title" onClose={handleCloseAuth} >
          <Box ml={2}>{toggleAuth === false ? "SignIn" : "SignUp"}</Box>
        </DialogTitle>
        <DialogContent dividers>
                  <SignIn handleForgotPassword={handleForgotPassword} />
                   <SignUp toggleAuth={toggleAuth} handleToggleAuthForm={handleToggleAuthForm}/>  
                   <ForgotPassword forgotPasswod={forgotPasswod} handleForgotPassword={handleForgotPassword}/>
        </DialogContent>
        <Box mb={5}>
                  <DialogActions >
                     

                          <div>{toggleAuth === false ? "Don't have an account?": "Already have an account?" }  <Button onClick={handleToggleAuthForm} color="secondary">{toggleAuth === false ? "REGISTER": "Sign In"}</Button></div>
                      
          </DialogActions>
          </Box>
          </Dialog>
          </Box>
      
  );
}