import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';

import FullScreenLoader from './common/Loaders/FullScreenLoader';

const Home = lazy(() => import('./modules/Home'));
const Homepage = lazy(() => import('./modules/layout/Homepage'));

axios.defaults.baseURL = 'http://localhost:5500';

function App() {
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
          <Route path='/dashboard' component={Homepage} />
          <Route path='/' component={Home} />
        </Switch>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
