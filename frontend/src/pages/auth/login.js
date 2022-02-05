import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import PageTitleBanner from "../../components/PageTitleBanner";


import React, { Component } from "react";
import { Navigate } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { connect } from "react-redux";
import { login, googleLogin } from "../../state/actions/auth";

import ReactGoogleLogin from "react-google-login";

const required = (value) => {
   if (!value) {
      return (
         <div className="alert alert-danger" role="alert">
            This field is required!
         </div>
      );
   }
};

class Login extends Component {
   constructor(props) {
      super(props);
      this.handleLogin = this.handleLogin.bind(this);
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.responseGoogle = this.responseGoogle.bind(this);


      this.state = {
         username: "",
         password: "",
         loading: false,
      };
   }

   onChangeUsername(e) {
      this.setState({
         username: e.target.value,
      });
   }

   onChangePassword(e) {
      this.setState({
         password: e.target.value,
      });
   }

   responseGoogle(response) {
      this.setState({
         loading: true,
      });
      console.log(response);

      const { dispatch, history } = this.props;


      dispatch(googleLogin(response.accessToken))
         .then(() => {
            history.push("/profile");
            window.location.reload();
         })
         .catch(() => {
            this.setState({
               loading: false
            });
         });
   }

   handleLogin(e) {
      e.preventDefault();

      this.setState({
         loading: true,
      });

      this.form.validateAll();

      const { dispatch, history } = this.props;

      if (this.checkBtn.context._errors.length === 0) {
         dispatch(login(this.state.username, this.state.password))
            .then(() => {
               history.push("/profile");
               window.location.reload();
            })
            .catch(() => {
               this.setState({
                  loading: false
               });
            });
      } else {
         this.setState({
            loading: false,
         });
      }
   }

   render() {
      const { isLoggedIn, message } = this.props;

      if (isLoggedIn) {
         return <Navigate to="/courses" replace={true} />
      }

      return (
         <Layout noHeaderTop sideBar sticky headerStyle={1} footerStyle={1}>
            <PageTitleBanner pageName="Signin" />
            <div className="login-form mithra-flex-col">
               <div className="mithra-flex-col login-container">
                  <div className="form-padding-100">
                     <h4 className="mt-user-title">Log in to Your Account</h4>
                     <Form onSubmit={this.handleLogin} ref={(c) => {
                        this.form = c;
                     }}>
                        <div className="">
                           <div className="mithra-flex-col login-inner-container">
                              <div className="field-group">
                                 <Input
                                    type="text"
                                    className="login-input"
                                    placeholder="Username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                    validations={[required]}
                                 />
                                 <i className="zmdi zmdi-account"></i>
                              </div>
                              <div className="field-group">
                                 <Input
                                    type="password"
                                    placeholder="Password"
                                    className="login-input"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    validations={[required]}
                                 />
                                 <i className="zmdi zmdi-lock"></i>
                              </div>
                              <div className="field-group field-footer-group">
                                 <button onClick={this.handleLogin} type="button" className="login-button">Log In</button>
                              </div>
                              <CheckButton
                                 style={{ display: "none" }}
                                 ref={(c) => {
                                    this.checkBtn = c;
                                 }}
                              />
                              <div className="field-group field-footer-group">
                                 or                                                                                       </div>
                              <div className="field-group field-footer-group google-login">
                                 <ReactGoogleLogin
                                    clientId="306834262245-h5alvve0aoumcm703c29dhvo63crnna7.apps.googleusercontent.com"
                                    buttonText="Login using Gooogle"
                                    style={{ width: '100%' }}
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                    cookiePolicy={"single_host_origin"}
                                 />
                              </div>

                           </div>
                        </div>
                     </Form>
                  </div>
                  <div className="mt-user-bottom"> New to Wellco? <Link to="/register">Sign Up</Link></div>
               <div className="mt-user-bottom"> <Link to="/forgetpassword">Forgot your password?</Link></div>
               </div>
            </div>
         </Layout>
      );
   }
}

function mapStateToProps(state) {
   const { isLoggedIn } = state.auth;
   const { message } = state.message;
   return {
      isLoggedIn,
      message
   };
}


export default connect(mapStateToProps)(Login);
