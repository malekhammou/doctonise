import React from "react";
import auth from "../services/userService";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.getcurrentUser())
          return (
            <Redirect
              to={{ pathname: "/startup", state: { from: props.location } }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
