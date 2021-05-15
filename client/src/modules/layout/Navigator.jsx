import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';

const routes = [
  {
    id: 'Develop',
    children: [
      {
        id: 'Dashboard',
        icon: <DashboardIcon />,
        route: 'dashboard',
        active: true,
      },
      { id: 'Projects', icon: <AssignmentIcon />, route: 'projects' },
      { id: 'Goals', icon: <PermMediaOutlinedIcon />, route: 'goals' },
      { id: 'Leaderboard', icon: <PublicIcon />, route: 'leaderboard' },
    ],
  },
];

const styles = (theme) => ({
  drawer: {},
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    // color: theme.palette.common.white,
  },
  item: {
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemCategory: {
    backgroundColor: '#2f353a',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    cursor: 'pointer',
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: '#599b32',
  },
  itemPrimary: {
    fontSize: 'inherit',
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  navLink: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    width: '100%',
    paddingTop: '.8rem',
    paddingBottom: '.8rem',
  },
  activeNavLink: {
    color: theme.palette.primary.main,
  },
});

function Navigator(props) {
  const { classes, ...other } = props;

  return (
    <Drawer variant='permanent' {...other} className={classes.drawer}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.itemCategory)}>
          ProjectTime
        </ListItem>
        {routes.map(({ id, children }) => (
          <React.Fragment key={id}>
            {children.map(({ id: childId, icon, route, active }) => (
              <ListItem
                key={childId}
                button
                className={clsx(classes.item, active && classes.itemActiveItem)}
              >
                <NavLink
                  to={route}
                  className={classes.navLink}
                  activeClassName={classes.activeNavLink}
                >
                  <ListItemIcon className={classes.itemIcon}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary,
                    }}
                  >
                    {childId}
                  </ListItemText>
                </NavLink>
              </ListItem>
            ))}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(Navigator);
