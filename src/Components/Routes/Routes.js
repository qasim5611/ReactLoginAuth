import React, { useEffect, useState, Suspense, lazy } from "react";

import Form from "./../form";
import Spinner from "./../LazySpinner/spinner";

import Header from "./../Header";
import Login from "../Login/login";
import Signup from "./../SignUp/signup";
import Sitehome from "../Sitehome";
import Verifyemail from "../VerifyEmaill/verifyemail";

import VerifyTockenMail from "../ForgetPass/VerifyTockenMail";

import Forgetpass from "../ForgetPass/Forgetpass";

import Newpass from "../ForgetPass/Newpass";

import Notfound from "./../PageNotFound/pagenotfound";

import { useSelector } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";

import history from "./../history/history";

import PrivateRoute from "./../Routes/PrivateRoutes/PrivateRoutes";

import PublicRoute from "../Routes/PublicRoutes/PublicRoute";
// import PageNotFound from "../PageNotFound/PageNotFound";
// const state = useSelector((state)=> state.LoginAdmin.)

const AllRoutes = () => {
  // const Form = lazy(() => import("../form.js"));

  return (
    <div>
      {/* <Suspense fallback={<Spinner />}> */}
      <Router history={history} forceRefresh={true}>
        <Switch>
          <PublicRoute path="/" component={Sitehome} exact={true} />
          <PublicRoute path="/signup" component={Signup} exact={true} />
          <PublicRoute path="/login" component={Login} exact={true} />
          <PublicRoute path="/Forgetpass" component={Forgetpass} exact={true} />
          <PublicRoute path="/Newpass" component={Newpass} exact={true} />
          <PublicRoute
            path="/verifyemail"
            component={Verifyemail}
            exact={true}
          />
          <PublicRoute path="/VerifyTockenMail" component={VerifyTockenMail} exact={true} />
          
          <PrivateRoute path="/form" component={Form} exact={true} />
        </Switch>
      </Router>
      {/* </Suspense> */}
    </div>
  );
};

export default AllRoutes;
