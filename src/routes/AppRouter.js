import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import { Header } from "../components/Header";
import Login from "../pages/Login";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

export const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Header />
      <Switch>
        <PublicRoutes
          path="/login"
          setIsLoggedIn={setIsLoggedIn}
          component={Login}
          isLoggedIn={isLoggedIn}
        />
        <PrivateRoutes
          path="/products"
          component={Products}
          isLoggedIn={isLoggedIn}
        />
        {/* <PrivateRoutes
          path="/orders"
          component={Orders}
          isLoggedIn={isLoggedIn}
        /> */}

        <PrivateRoutes path="/cart" component={Cart} isLoggedIn={isLoggedIn} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};
