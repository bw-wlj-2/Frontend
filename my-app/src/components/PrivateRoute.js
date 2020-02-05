import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // console.log(Component)
  return (
    <Route
      {...rest}
      render={props => {
        // console.log('render', localStorage.getItem('token'))
        if (localStorage.getItem('token')) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
