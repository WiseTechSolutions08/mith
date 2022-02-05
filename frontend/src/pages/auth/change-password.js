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

class ChangePassword extends Component {
   constructor(props) {
      super(props);
      this.handleForgetPassword = this.handleForgetPassword.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);


      this.state = {
         username: "",
         password: "",
         confirmPassword: "",
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

   onChangeConfirmPassword(e) {
      this.setState({
         confirmPassword: e.target.value,
      });
   }

   handleForgetPassword(e) {
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

      return (
         <Layout noHeaderTop sideBar sticky headerStyle={1} footerStyle={1}>
            <PageTitleBanner pageName="Change password" />
            <div className="login-form mithra-flex-col">
               <div className="mithra-flex-col login-container">
                  <div className="form-padding-100">
                     <h4 className="mt-user-title">Change your password</h4>
                     <Form onSubmit={this.handleLogin} ref={(c) => {
                        this.form = c;
                     }}>
                        <div className="">
                           <div className="mithra-flex-col login-inner-container">
                             
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

                              <div className="field-group">
                                 <Input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="login-input"
                                    name="confirmPassword"
                                    value={this.state.confirmPassword}
                                    onChange={this.onChangeConfirmPassword}
                                    validations={[required]}
                                 />
                                 <i className="zmdi zmdi-lock"></i>
                              </div>
                              <div className="field-group field-footer-group">
                                 <button onClick={this.handleForgetPassword} type="button" className="login-button">Change Password</button>
                              </div>
                              <CheckButton
                                 style={{ display: "none" }}
                                 ref={(c) => {
                                    this.checkBtn = c;
                                 }}
                              />
                           </div>
                        </div>
                     </Form>
                  </div>
                  
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


export default connect(mapStateToProps)(ChangePassword);
