import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  Paper,
  Typography,
  Button,
  Select,
  FormControl,
  FormHelperText,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

import EditorAndDashboard from '../../assets/editor-and-dashboard-b.png';
import { changeThemeMode } from '../../redux/actions/ThemeMode';

const useStyles = makeStyles((theme) => {
  const root = {
    minHeight: '100vh',
    width: '100%',
  };
  if (theme.palette.type === 'light') {
    root['backgroundColor'] = theme.palette.grey['200'];
  }
  return {
    root: root,
    logo: {
      fontSize: '2.5rem',
      fontWeight: 600,
      [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
        fontWeight: 400,
      },
    },
    container: {
      maxWidth: '100rem',
      margin: '0 auto',
    },
    navbar: {
      padding: '2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        padding: '1rem',
      },
    },
    formControl: {
      minWidth: '10rem',
      marginRight: theme.spacing(4),
      [theme.breakpoints.down('xs')]: {
        marginRight: 0,
      },
    },
    buttons: {
      display: 'flex',
    },
    navbarButton: {
      fontWeight: 600,
      paddingLeft: '3rem',
      paddingRight: '3rem',
      color: 'white',
      [theme.breakpoints.down('md')]: {
        paddingLeft: '2rem',
        paddingRight: '2rem',
      },
    },
    header: {
      padding: '2rem',
      display: 'grid',
      gridTemplateColumns: 'minmax(200px, 45%) 1fr;',
      gridGap: '2rem',
      [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '1fr;',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '1rem',
      },
    },
    headerText: {
      display: 'grid',
      gridRowGap: '2rem',
      [theme.breakpoints.down('md')]: {
        '& h3': {
          fontSize: '2.5rem',
        },
      },
    },
    headerImg: {
      width: '100%',
      height: '25rem',
      objectFit: 'cover',
      display: 'block',
      borderRadius: '1rem',
      marginTop: 'auto',
      [theme.breakpoints.down('md')]: {
        height: '40rem',
      },
      [theme.breakpoints.down('sm')]: {
        height: '25rem',
      },
    },
    headerButton: {
      justifySelf: 'start',
      padding: '1rem 3rem',
      fontWeight: 600,
      [theme.breakpoints.down('md')]: {
        padding: '1rem 2rem',
      },
    },
  };
});

const Home = ({}) => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.ThemeMode);
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const onChangeTheme = (e) => {
    dispatch(changeThemeMode(e.target.value));
  };

  const onLoginClick = async () => {
    window.open(
      `https://wakatime.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=email,read_stats&response_type=code&redirect_uri=http://localhost:3000/login`,
      '_self'
    );
  };

  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.container}>
        <div className={classes.navbar}>
          <Typography variant='h1' className={classes.logo}>
            ProjectTime
          </Typography>
          <div className={classes.buttons}>
            <FormControl className={classes.formControl}>
              <Select
                value={mode}
                onChange={onChangeTheme}
                // className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value={'light-mode'}>Light Mode</MenuItem>
                <MenuItem value={'dark-mode'}>Dark Mode</MenuItem>
              </Select>
              <FormHelperText>Select Mode</FormHelperText>
            </FormControl>
            {smUp && (
              <Button
                variant='contained'
                color='primary'
                className={classes.navbarButton}
              >
                Login
              </Button>
            )}
          </div>
        </div>
        <Divider />
        <div className={classes.header}>
          <div className={classes.headerText}>
            <Typography variant='h3'>Dashboards for developers</Typography>
            <Typography variant='h5'>
              Code stats right from your editor
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <DoneOutlineIcon />
                </ListItemIcon>
                <ListItemText primary='Projects, languages, and branches automatically detected' />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DoneOutlineIcon />
                </ListItemIcon>
                <ListItemText primary='Weekly email reports with your coding stats' />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DoneOutlineIcon />
                </ListItemIcon>
                <ListItemText primary='Private leaderboards' />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DoneOutlineIcon />
                </ListItemIcon>
                <ListItemText primary='Set coding goals' />
              </ListItem>
            </List>
            <Button
              variant='contained'
              color='secondary'
              className={classes.headerButton}
            >
              Sign Up
            </Button>
          </div>
          <img
            src={EditorAndDashboard}
            alt='Editor And Dashboard'
            className={classes.headerImg}
          />
        </div>
      </div>
    </Paper>
  );
};

export default Home;
