import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


export default function ForgotPassword(props) {

  const {forgotPasswod, handleForgotPassword} = props


  return (
    <div>
      <Dialog open={forgotPasswod} onClose={handleForgotPassword} aria-labelledby="form-dialog-title">
        {/* <DialogTitle id="form-dialog-title">WEIGHTS AND MEASURES DEPARMENTAL PORTAL</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            Provide Company Email Used in Registering Your Company
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleForgotPassword} color="primary">
            Cancel
          </Button>
          <Button onClick={handleForgotPassword} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
