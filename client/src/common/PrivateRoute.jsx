import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuth } = useSelector((state) => state.Authentication);
  let currentLocation = rest.location.pathname + rest.location.search;

  if (isAuth === false) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: {
            fromPathname: currentLocation,
          },
        }}
      />
    );
  } else {
    return (
      <Route
        {...rest}
        render={(props) => {
          return isAuth === true ? (
            <Component {...props} />
          ) : (
            <Redirect to='/' />
          );
        }}
      />
    );
  }
}

export default PrivateRoute;
