import React from 'react';

import {Dialog, DialogActions, DialogContent, DialogContentText, Button, TextField} from '../../../mui'

export default function FormDialog(props) {

  const {toggleAuth, handleToggleAuthForm} = props


  return (
    <div>
      <Dialog open={toggleAuth} onClose={handleToggleAuthForm} aria-labelledby="form-dialog-title">
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
          <Button onClick={handleToggleAuthForm} color="primary">
            Cancel
          </Button>
          <Button onClick={handleToggleAuthForm} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
