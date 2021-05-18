import React, { useEffect } from 'react';
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

const Login = (props) => {
  const history = useHistory();
  const styles = useStyles();

  useEffect(() => {
    const params = new URLSearchParams(history.location.search);
    const code = params.get('code');
    if (!code) history.push('/');
    else {
    }
    console.log(code);
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
