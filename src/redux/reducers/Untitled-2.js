// import logo from "./logo.svg";
import "./../../App.css";
import Form from "./../form";
import Updateform from "./../updateform";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { BrowserRouter as Router , Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./../../redux/store";

import Header from "./../Header";
import Login from "../Login/login";
import Signup from "./../SignUp/signup";
import Sitehome from "../Sitehome";
import Verifyemail from "../VerifyEmaill/verifyemail";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function Routes() {
  const user = useSelector((state) => state.Auth.userDetail);
  // console.log("user" + user);
  // useEffect(() => {
  //     let token = localStorage.getItem("token");
  //     let status = user
  //     console.log(token);
  //     setState({
  //         userDetail: status,
  //     });
  // }, [])

  return (
    <Provider store={store}>
      <div>
        <Router history={history}>
          {/* {user ? <Form /> : <Route exact path="/Login" component={Login} />} */}
          <Header />
          <Switch>
            <Route exact path="/" component={Sitehome} />
            <Route path="/Updateform/:id" component={Updateform} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
            <Route path="/Form" component={Form} />
            <Route path="/Verifyemail" component={Verifyemail} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </div>
    </Provider>
  );
}

export default Routes;
