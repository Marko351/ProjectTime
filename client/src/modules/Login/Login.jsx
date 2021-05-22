import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => {
  return {
    root: {
      width: '100vw',
      height: '100vh',
      display: 'grid',
      placeItems: 'center',
    },
  };
});

const Login = () => {
  const history = useHistory();
  const styles = useStyles();

  useEffect(() => {
    const loadData = async () => {
      const params = new URLSearchParams(history.location.search);
      const code = params.get('code');
      if (!code) history.push('/');
      else {
        const response = await axios.post('/authentication/login', { code });
        console.log('RESPONSE', response);
      }
    };
    loadData();
  }, []);

  return (
    <div className={styles.root}>
      <Typography variant='h1' align='center'>
        You Will Be Redirected!
      </Typography>
    </div>
  );
};

export default Login;
