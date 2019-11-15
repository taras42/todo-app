import 'date-fns';

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DateFnsUtils from '@date-io/date-fns';

import { useDispatch } from 'react-redux'

import { addTodo } from '../store/actions';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setName('');
    setDescription('');
    setSelectedDate(new Date());
    setOpen(false);
  };

  const handleAdd = () => {
    setName('');
    setDescription('');
    setSelectedDate(new Date());
    setOpen(false);

    dispatch(addTodo(props.listId, name, description, {
      year: selectedDate.getFullYear(),
      month: selectedDate.getMonth(),
      day: selectedDate.getDate()
    }, props.listName));
  }

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div style={props.rootStyle}>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add TODO
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            onChange={ (event) => { setName(event.target.value) } }
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            fullWidth
            onChange={ (event) => { setDescription(event.target.value) } }
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
          </MuiPickersUtilsProvider>
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
