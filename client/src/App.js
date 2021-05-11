import { lazy, Suspense } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';

import FullScreenLoader from './common/Loaders/FullScreenLoader';

const Home = lazy(() => import('./modules/Home'));

axios.defaults.baseURL = 'http://localhost:5500';

function App() {
  const theme = createMuiTheme({
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
            fontSize: '62.5%',
          },
        },
      },
    },
    palette: {
      type: 'light',
      primary: {
        main: green['A400'],
      },
    },
    typography: {
      fontFamily: '"Montserrat", sans-serif',
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<FullScreenLoader />}>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
