import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import PageTitleBanner from "../../components/PageTitleBanner";


import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { isEmail } from "validator";

import { register } from "../../state/actions/auth";

const required = (value) => {
   if (!value) {
      return (
         <div className="alert alert-danger" role="alert">
            This field is required!
         </div>
      );
   }
};

const vemail = (value) => {
   if (!isEmail(value)) {
      return (
         <div className="alert alert-danger" role="alert">
            This is not a valid email.
         </div>
      );
   }
};

const vusername = (value) => {
   if (value.length < 3 || value.length > 20) {
      return (
         <div className="alert alert-danger" role="alert">
            The username must be between 3 and 20 characters.
         </div>
      );
   }
};

const vfirstname = (value) => {
   if (value.length < 3 || value.length > 20) {
      return (
         <div className="alert alert-danger" role="alert">
            The username must be between 3 and 20 characters.
         </div>
      );
   }
};

const vlastname = (value) => {
   if (value.length < 3 || value.length > 20) {
      return (
         <div className="alert alert-danger" role="alert">
            The username must be between 3 and 20 characters.
         </div>
      );
   }
};

const vpassword = (value) => {
   if (value.length < 6 || value.length > 40) {
      return (
         <div className="alert alert-danger" role="alert">
            The password must be between 6 and 40 characters.
         </div>
      );
   }
};
const vconfirmpassword = (value) => {
   if (value.length < 6 || value.length > 40) {
      return (
         <div className="alert alert-danger" role="alert">
            Both passwords should match.
         </div>
      );
   }
};

class Register extends Component {
   constructor(props) {
      super(props);
      this.handleRegister = this.handleRegister.bind(this);
      this.onChangeUserName = this.onChangeUserName.bind(this);
      this.onChangeFirstName = this.onChangeFirstName.bind(this);
      this.onChangeLastName = this.onChangeLastName.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);

      this.state = {
         userName: "",
         firstName: "",
         lastName: "",
         email: "",
         password: "",
         confirmPassword: "",
         successful: false,
      };
   }

   onChangeUserName(e) {
      this.setState({
         userName: e.target.value,
      });
   }

   onChangeFirstName(e) {
      this.setState({
         firstName: e.target.value,
      });
   }

   onChangeLastName(e) {
      this.setState({
         lastName: e.target.value,
      });
   }

   onChangeEmail(e) {
      this.setState({
         email: e.target.value,
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

   handleRegister(e) {
      e.preventDefault();

      this.setState({
         userName: "",
         firstName: "",
         lastName: "",
         email: "",
         password: "",
         confirmPassword: "",
         successful: false
      });

      this.form.validateAll();

      if (this.checkBtn.context._errors.length === 0) {
         this.props
            .dispatch(
               register(this.state.userName, this.state.email, this.state.password, this.state.firstName, this.state.lastName)
            )
            .then(() => {
               this.setState({
                  successful: true,
               });
            })
            .catch(() => {
               this.setState({
                  successful: false,
                  password: '',
                  confirmPassword: ''
               });

            });
      }
   }

   render() {
      const { message } = this.props;

      return (
         <Layout noHeaderTop sideBar sticky headerStyle={1} footerStyle={1}>
            <PageTitleBanner pageName="Signin" />
            <div className="login-form mithra-flex-col">
               <div className="mithra-flex-col login-container">
                  <div className="form-padding-100">
                     <h4 className="mt-user-title">Create your account</h4>
                     <Form onSubmit={this.handleRegister} ref={(c) => {
                        this.form = c;
                     }}>

                        <div className="">
                           <div className="mithra-flex-col login-inner-container">
                              <div className="field-group">
                                 <Input
                                    type="text"
                                    placeholder="User Name"
                                    autoComplete="userName"
                                    required
                                    className="login-input"
                                    name="userName"
                                    value={this.state.userName}
                                    onChange={this.onChangeUserName}
                                    validations={[required, vusername]}
                                 />
                                 <i className="zmdi zmdi-account"></i>
                                 {/* <span >{error && errorType === 'username' && errorValue}</span> */}
                              </div>
                              <div className="field-group">
                                 <Input
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    autoComplete="firstName"
                                    required
                                    className="login-input"
                                    value={this.state.firstName}
                                    onChange={this.onChangeFirstName}
                                    validations={[required, vfirstname]}
                                 />
                                 <i className="zmdi zmdi-account"></i>
                                 {/* <span >{error && errorType === 'first_name' && errorValue}</span> */}
                              </div>
                              <div className="field-group">
                                 <Input
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    autoComplete="lastName"
                                    required
                                    className="login-input"
                                    value={this.state.lastName}
                                    onChange={this.onChangeLastName}
                                    validations={[required, vlastname]}
                                 />
                                 <i className="zmdi zmdi-account"></i>
                                 {/* <span >{error && errorType === 'last_name' && errorValue}</span> */}

                              </div>
                              <div className="field-group">
                                 <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                    required
                                    className="login-input"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                    validations={[required, vemail]}
                                 />
                                 <i className="zmdi zmdi-email"></i>
                                 {/* <span >{error && errorType === 'email' && errorValue}</span> */}

                              </div>
                              <div className="field-group">
                                 <Input
                                    type="password"
                                    placeholder="Password"
                                    name="Password"
                                    autoComplete="password"
                                    required
                                    className="login-input"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    validations={[required, vpassword]}
                                 />
                                 <i className="zmdi zmdi-lock"></i>
                                 {/* <span >{error && errorType === 'password' && errorValue}</span> */}

                              </div>
                              <div className="field-group">
                                 <Input
                                    type="password"
                                    placeholder="Confirm password"
                                    name="confirmPassword"
                                    autoComplete="confirmPassword"
                                    required
                                    className="login-input"
                                    value={this.state.confirmPassword}
                                    onChange={this.onChangeConfirmPassword}
                                    validations={[required, vconfirmpassword]}
                                 />
                                 <i className="zmdi zmdi-lock"></i>
                                 {/* <span >{error && errorType === 'confirmPassword' && errorValue}</span> */}

                              </div>
                              <div className="field-group">
                                 <button name="submit" onClick={this.handleRegister} type="button" className="login-button">Create Account</button>
                              </div>
                              {message && (
                                 <div className="form-group">
                                    <div className={this.state.successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                                       {message}
                                    </div>
                                 </div>
                              )}
                              <CheckButton style={{ display: "none" }} ref={(c) => {
                                 this.checkBtn = c;
                              }} />
                           </div>
                        </div>
                     </Form>
                  </div>
                  <div className="mt-user-bottom"> Already have an account? <Link to="/login">Login</Link></div>
               </div>
            </div>
         </Layout>


         // <Layout noHeaderTop sideBar sticky headerStyle={1} footerStyle={1}>
         //       <div id="pagetitle" className="page-title bg-image ">
         //          <div className="container">
         //             <div className="page-title-inner" style={{ opacity: 1 }}>
         //                <div className="page-title-holder">
         //                   <h1 className="page-title">Sign Up</h1>
         //                </div>
         //                <ul className="ct-breadcrumb">
         //                   <li><a className="breadcrumb-entry" href="https://demo.bravisthemes.com/wellco/">Home</a></li>
         //                   <li><span className="breadcrumb-entry">Sign Up</span></li>
         //                </ul>
         //             </div>
         //          </div>
         //          <div className="page-title-icons">
         //             <div className="ptitle-particle ptitle-particle1"><img src="https://demo.bravisthemes.com/wellco/wp-content/themes/ewco/assets/images/ptitle-shape1.png" alt="ptitle-particle1" /></div>
         //             <div className="ptitle-particle ptitle-particle2"><img src="https://demo.bravisthemes.com/wellco/wp-content/themes/ewco/assets/images/ptitle-shape2.png" alt="ptitle-particle2" /></div>
         //             <div className="ptitle-particle ptitle-particle3"><img src="https://demo.bravisthemes.com/wellco/wp-content/themes/ewco/assets/images/ptitle-shape3.png" alt="ptitle-particle3" /></div>
         //             <div className="ptitle-particle ptitle-particle4"><img src="https://demo.bravisthemes.com/wellco/wp-content/themes/ewco/assets/images/ptitle-shape4.png" alt="ptitle-particle4" /></div>
         //          </div>
         //       </div>
         //       <div id="content" className="site-content">
         //          <div className="content-inner">
         //             <div className="container content-container">
         //                <div className="row content-row">
         //                   <div id="primary" className="content-area content-full-width col-12">
         //                      <main id="main" className="site-main">
         //                         <article id="post-4054" className="post-4054 page type-page status-publish hentry">
         //                            <div className="entry-content clearfix">
         //                               <div data-elementor-type="wp-page" data-elementor-id="4054" className="elementor elementor-4054" data-elementor-settings="[]">
         //                                  <div className="elementor-section-wrap">
         //                                     <section className="elementor-section elementor-top-section elementor-element elementor-element-4dcdb2e elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none" data-id="4dcdb2e" data-element_type="section" style={{ width: 964, left: -15 }}>
         //                                        <div className="elementor-container elementor-column-gap-extended ">
         //                                           <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-510daf1 ct-column-none col-offset-none" data-id="510daf1" data-element_type="column">
         //                                              <div className="elementor-widget-wrap elementor-element-populated">
         //                                                 <div className="elementor-element elementor-element-35a8236 elementor-widget elementor-widget-ct_user" data-id="35a8236" data-element_type="widget" data-widget_type="ct_user.default">
         //                                                    <div className="elementor-widget-container">
         //                                                       <div className="ct-user " data-wow-delay="ms">
         //                                                          <div className="ct-user-inner">
         //                                                             <div className="ct-user-holder">
         //                                                                <div className="ct-user-meta">
         //                                                                   <h4 className="ct-user-title">Create your account</h4>
         //                                                                   <div className="ct-user-form">
         //                                                                      <div className="ct-user-form-body ct-user-form-register">

         //                                                                      </div>
         //                                                                   </div>
         //                                                                </div>
         //                                                                <div className="ct-user-bottom"> Already have an account? <Link to="/login">Log In</Link></div>
         //                                                             </div>
         //                                                          </div>
         //                                                       </div>
         //                                                    </div>
         //                                                 </div>
         //                                              </div>
         //                                           </div>
         //                                        </div>
         //                                     </section>
         //                                  </div>
         //                               </div>
         //                            </div>
         //                         </article>
         //                      </main>
         //                   </div>
         //                </div>
         //             </div>
         //          </div>
         //       </div>
         //    </Layout>
      );
   }
}

function mapStateToProps(state) {
   const { message } = state.message;
   return {
      message,
   };
}

export default connect(mapStateToProps)(Register);
