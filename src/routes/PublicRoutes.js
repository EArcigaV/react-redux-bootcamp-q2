import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoutes = ({
  component: Component,
  isLoggedIn,
  setIsLoggedIn,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Redirect to="/cart" />
        ) : (
          <Component check={true} setIsLoggedIn={setIsLoggedIn} {...props} />
        )
      }
    />
  );
};

export default PublicRoutes;
