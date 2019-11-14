import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import { useDispatch } from 'react-redux'

import { addList } from '../store/actions';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setName('');
    setOpen(false);
  };

  const handleAdd = () => {
    setName('');
    setOpen(false);
    dispatch(addList(name));
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Add List
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="List Name"
            fullWidth
            onChange={ (event) => { setName(event.target.value) } }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
