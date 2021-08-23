import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


export default function RegisteredInstrument(props) {
 

  const {registeredInstrument, handleRegisteredInstrument} = props

  

  return (
    <div>
      <Dialog open={registeredInstrument} onClose={handleRegisteredInstrument} aria-labelledby="form-dialog-title">
        {/* <DialogTitle id="form-dialog-title">WEIGHTS AND MEASURES DEPARMENTAL PORTAL</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            Provide Company Registration Number
          </DialogContentText>
          <TextField
           autoFocus
           margin="dense"
           id="Registration Number"
           label="Registration Number"
           type="text"
           fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRegisteredInstrument} color="primary">
            Cancel
          </Button>
          <Button onClick={handleRegisteredInstrument} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
