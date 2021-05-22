import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as UserIcon } from '../../assets/user.svg';

import ThemeChanger from '../../common/ThemeChanger';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    secondaryBar: {
      zIndex: 0,
    },
    menuButton: {
      marginLeft: -theme.spacing(1),
    },
    iconButtonAvatar: {
      padding: 4,
    },
    link: {
      textDecoration: 'none',
      color: lightColor,
      '&:hover': {
        color: theme.palette.common.white,
      },
    },
    button: {
      borderColor: lightColor,
    },
    header: {
      height: '4.1rem',
      justifyContent: 'center',
      backgroundColor: theme.palette.appBar.main,
    },
    avatar: {
      width: '40px',
      height: '40px',
      fill:
        theme.palette.type === 'dark' ? '#fff !important' : '#000 !important',
    },
  };
});

function Header({ onDrawerToggle }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar
        color='primary'
        position='sticky'
        elevation={5}
        className={classes.header}
      >
        <Toolbar>
          <Grid container spacing={1} alignItems='center'>
            {/* <Hidden smUp> */}
            <Grid item>
              <IconButton
                onClick={onDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            {/* </Hidden> */}
            <Grid item xs />
            <Grid item>
              <ThemeChanger />
            </Grid>
            {/* <Grid item>
              <Tooltip title='Alerts • No alerts'>
                <IconButton color='inherit'>
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid> */}
            <Grid item>
              <IconButton color='inherit' className={classes.iconButtonAvatar}>
                <UserIcon className={classes.avatar} />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
