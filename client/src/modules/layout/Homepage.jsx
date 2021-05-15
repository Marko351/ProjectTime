import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Navigator from './Navigator';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';

// import Content from './Content';
import Header from './Layout';

function Copyright() {
  return (
    <Typography variant='body2' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 256;

const useStyles = makeStyles((theme) => {
  const background = theme.palette.type === 'dark' ? '' : '#eaeff1';
  const footerBackground =
    theme.palette.type === 'dark' ? '#2f353a' : '#eaeff1';
  return {
    root: {
      display: 'flex',
      minHeight: '100vh',
    },
    drawer: {
      backgroundColor: '#2f353a',
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    app: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    main: {
      flex: 1,
      padding: theme.spacing(3, 3),
      background,
    },
    footer: {
      padding: theme.spacing(2),
      background: footerBackground,
      display: 'flex',
      justifyContent: 'start',
      //   fontWeight: 600,
    },
  };
});

function Layout(props) {
  const classes = useStyles();
  const themeProvider = useTheme();
  const [open, setOpen] = React.useState(true);
  const xsDown = useMediaQuery(themeProvider.breakpoints.down('xs'));

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (xsDown) setOpen(false);
    else setOpen(true);
  }, [xsDown]);

  return (
    <div className={classes.root}>
      <nav className={clsx(open && classes.drawer)}>
        <Hidden smUp implementation='js'>
          <Navigator
            PaperProps={{ style: { width: drawerWidth, opacity: 1 } }}
            variant='temporary'
            open={open}
            onClose={handleDrawerToggle}
          />
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Navigator
            variant='permanent'
            PaperProps={{ style: { width: open ? drawerWidth : 0 } }}
            open={open}
            onClose={handleDrawerToggle}
          />
        </Hidden>
      </nav>
      <div className={classes.app}>
        <Header onDrawerToggle={handleDrawerToggle} />
        <Paper elevation={0} square className={classes.main}>
          Test 123
        </Paper>
        <Divider />
        <footer className={classes.footer}>
          <Copyright />
        </footer>
      </div>
    </div>
    // </ThemeProvider>
  );
}

export default Layout;
