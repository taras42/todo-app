import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

import Todo from './Todo';

import AddTodoDialog from './AddTodoDialog';

const useStyles = makeStyles(theme => ({
  root: {
    width: '300px',
    margin: '10px',
    padding: '10px',
  }
}));

const listHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}

const addTodoDialogStyle = {
  alignSelf: 'center'
}

export default function List(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className="list-header" style={listHeaderStyle}>
        <Typography align="justify" variant="h5" component="h3">
          <p>{props.name}</p>
        </Typography>
        <AddTodoDialog listId={props.id} listName={props.name} rootStyle={addTodoDialogStyle} />
      </div>
      {
          props.todos.map((todo) => <Todo key={todo.id} listId={props.id} {...todo} />)
      }
    </Paper>
  );
}
