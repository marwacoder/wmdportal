import React from 'react';


import {Dialog, DialogActions, DialogContent, DialogContentText, TextField, Button} from '../../mui'

export default function RegisteredCompany(props) {


  const {registeredCompany, handleRegisteredCompany} = props

 

  return (
    <div>
      <Dialog open={registeredCompany} onClose={handleRegisteredCompany} aria-labelledby="form-dialog-title">
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
          <Button onClick={handleRegisteredCompany} color="primary">
            Cancel
          </Button>
          <Button onClick={handleRegisteredCompany} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
