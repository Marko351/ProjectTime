import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    placeItems: 'center',
    width: '100vw',
    height: '100vh',
  },
}));

const FullScreenLoader = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};

export default FullScreenLoader;
