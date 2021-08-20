import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, authState, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authState ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default PrivateRoute;