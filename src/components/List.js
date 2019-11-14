import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: '300px',
    margin: '10px',
    padding: '10px'
  }
}));

export default function List(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography align="left" variant="h5" component="h3">
        <p>{props.name}</p>
      </Typography>
    </Paper>
  );
}
