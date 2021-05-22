import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import axiosConfig from './config/axiosConfig';
import PrivateRoute from './common/PrivateRoute';
import FullScreenLoader from './common/Loaders/FullScreenLoader';
import Login from './modules/Login/Login';

const Home = lazy(() => import('./modules/Home'));
const Homepage = lazy(() => import('./modules/layout/Homepage'));

function App() {
  axiosConfig();
  const { mode } = useSelector((state) => {
    return {
      mode: state.ThemeMode.mode === 'light-mode' ? 'light' : 'dark',
    };
  });

  let theme = createMuiTheme({
    palette: {
      type: mode,
      primary: {
        main: '#599b32',
      },
      appBar: {
        main: '#599b32',
      },
    },
    typography: {
      fontFamily: '"Montserrat", sans-serif',
    },
  });

  theme = {
    ...theme,
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'inherit',
            '&::before': {
              margin: 0,
              padding: 0,
              boxSizing: 'inherit',
            },
            '&::after': {
              margin: 0,
              padding: 0,
              boxSizing: 'inherit',
            },
          },
          html: {
            boxSizing: 'border-box',
          },
        },
      },
      MuiDrawer: {
        paper: {
          backgroundColor: '#2f353a',
        },
      },
      MuiListItemText: {
        primary: {
          fontWeight: theme.typography.fontWeightMedium,
        },
      },
      MuiListItemIcon: {
        root: {
          color: 'inherit',
          marginRight: 0,
          '& svg': {
            fontSize: 20,
          },
        },
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<FullScreenLoader />}>
        <Switch>
          <PrivateRoute path='/project-time' component={Homepage} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Home} />
        </Switch>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
