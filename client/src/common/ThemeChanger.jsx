import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';

import { changeThemeMode } from '../redux/actions/ThemeMode';

const useStyles = makeStyles((theme) => {
  return {
    formControl: {
      minWidth: '10rem',
      marginRight: theme.spacing(4),
      [theme.breakpoints.down('xs')]: {
        marginRight: 0,
      },
    },
  };
});

const ThemeChanger = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.ThemeMode);

  const onChangeTheme = (e) => {
    dispatch(changeThemeMode(e.target.value));
  };
  return (
    <FormControl className={classes.formControl}>
      <Select value={mode} onChange={onChangeTheme}>
        <MenuItem value={'light-mode'}>Light Mode</MenuItem>
        <MenuItem value={'dark-mode'}>Dark Mode</MenuItem>
      </Select>
      <FormHelperText>Select Mode</FormHelperText>
    </FormControl>
  );
};

export default ThemeChanger;
