import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import EditorAndDashboard from '../../assets/editor-and-dashboard-b.png';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    width: '100%',
  },
  logo: {
    fontSize: '3rem',
  },
  container: {
    maxWidth: '120rem',
    margin: '0 auto',
  },
  navbar: {
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Home = ({}) => {
  const classes = useStyles();

  const onLoginClick = async () => {
    window.open(
      `https://wakatime.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=email,read_stats&response_type=code&redirect_uri=http://localhost:3000/login`,
      '_self'
    );
  };
  return (
    <Paper elevation="0" square className={classes.root}>
      <div className={classes.container}>
        <div className={classes.navbar}>
          <Typography variant="h1" className={classes.logo}>
            ProjectTime
          </Typography>
        </div>
      </div>
      {/* <img src={EditorAndDashboard} alt="Editor And Dashboard" /> */}
    </Paper>
  );
};

export default Home;
