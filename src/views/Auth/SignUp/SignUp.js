import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const {toggleAuth, handleToggleAuthForm} = props

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
