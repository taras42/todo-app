import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useDrag } from 'react-dnd'
import { ItemTypes } from './Constants'

import { useDispatch } from 'react-redux'

import { removeTodo } from '../store/actions';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Todo(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [{ opacity }, dragRef] = useDrag({
    item: { type: ItemTypes.CARD, id: props.id, ownerId: props.listId },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const handleRemoveTodo = () => {
    dispatch(removeTodo(props.id, props.listId));
  }

  return (
    <Card ref={dragRef} className={classes.card} style={{ opacity }}>
    <CardContent>
      <Typography align="left" variant="h5" component="h2">
        {props.name}
      </Typography>
      <Typography align="left" className={classes.title} color="textSecondary" gutterBottom>
        {props.description}
      </Typography>
      
      <Typography align="left" className={classes.pos} color="textSecondary">
        Due date: {`${props.date.day}/${props.date.month}/${props.date.year}`}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={handleRemoveTodo}>Delete</Button>
    </CardActions>
    </Card>
  )
}
