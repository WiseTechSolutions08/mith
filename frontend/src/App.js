import './styles/globals.css';
import React, { Component } from "react";
import { connect } from "react-redux";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import Login from './pages/auth/login';
import Profile from './pages/auth/profile';
import Register from './pages/auth/register';


import { logout } from "./state/actions/auth";
import { clearMessage } from "./state/actions/message";

import { history } from "./state/helpers/history";
import Mock from './pages/mock';
import MockTest from './pages/mocktest';
import Contact from './pages/contact';
import Courses from './pages/courses';
import CourseDetails from './pages/course-details';
import Verbal from './pages/verbal';
import Reasoning from './pages/reasoning';
import CourseSummary from './pages/course-summary';
import Account from './pages/auth/account';
import Checkout from './pages/checkout';
import ForgetPassword from './pages/auth/forget-password';
import ChangePassword from './pages/auth/change-password';
import VerifyAccount from './pages/auth/verify-account';


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
      });
    }

    // EventBus.on("logout", () => {
    //   this.logOut();
    // });
  }

  componentWillUnmount() {
    // EventBus.remove("logout");
  }

  logOut() {
    this.props.dispatch(logout());
    this.setState({
      currentUser: undefined
    });
  }

  render() {

    return (
      <div className="App">
        <BrowserRouter history={history}>
          <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/mock' element={<Mock />}></Route>
            <Route path='/mocktest' element={<MockTest />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/courses' element={<Courses />}></Route>
            <Route path='/coursedetails' element={<CourseDetails />}></Route>
            <Route path='/coursesummary' element={<CourseSummary />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/account' element={<Account />}></Route>
            <Route path='/forgetpassword' element={<ForgetPassword />}></Route>
            <Route path='/changepassword' element={<ChangePassword />}></Route>
            <Route path='/verifyaccount' element={<VerifyAccount />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);