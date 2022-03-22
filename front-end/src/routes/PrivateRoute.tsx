import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

type Component = {
	children?: Element;
    path: string;
    exact: boolean;
    component: React.LazyExoticComponent<any>;
};

const PrivateRoute = ({ children, ...props }: Component) => {
    // const token = sessionStorage.getItem("token");
    const token = Cookies.get("token");
    return (
      <Route {...props}>{token ? children : <Redirect to="/login" />}</Route>
    );
  };

export default PrivateRoute;
