import { Fragment, useEffect, useState } from "react";
import { stickyNav } from "../utils";
import { DefaultHeadActions, HeadActions } from "./HeadActions";
import HeaderSidebar from "./HeaderSidebar";
import HeaderTop from "./HeaderTop";
import { Link } from "react-router-dom";
import logo1 from '../assets/images/logo1.png'

import { useDispatch, useSelector } from "react-redux";

import { logout } from "../state/actions/auth";
import { clearMessage } from "../state/actions/message";

import { history } from "../state/helpers/history";

// import ReactFacebookLogin from "react-facebook-login";
// import ReactGoogleLogin from "react-google-login";
// import { facebookLogin, googleLogin } from "../state/services/axios";


import {
  BlogMenu,
  CoursesMenu,
  HomeMenu,
  PageMenu,
  PortfolioMenu,
  ProfileMenu
} from "./Menu";
import SearchTrigger from "./SearchTrigger";

const Header = ({
  openMobileMenu,
  noHeaderTop,
  sticky,
  sideBar,
  headerStyle,
  absolute,
}) => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  });

  const [showLogin, setShowLogin] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

 

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowLogin(false);
      setShowProfile(true);
    } else {
      setShowLogin(true);
      setShowProfile(false);
    }
  }, [currentUser]);

  const [searchTrigger, setSearchTrigger] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <Fragment>
      <HeaderSidebar
        openSidebar={openSidebar}
        closeSidebar={() => setOpenSidebar(false)}
      />
      <header
        className={`header ${absolute ? "header-absolute1" : ""}  ${headerStyle ? `header-${headerStyle}` : "header-3"
          }  ${sticky ? "header-absolute1 can-sticky" : ""}`}
        id="header-sticky"
      >
        {!noHeaderTop && <HeaderTop />}
        <div className="nav_sec">
          <div className="container">
            {/* inner */}
            <div className="nav_warp">
              <nav>
                {/* logo start */}
                <div className="logo">
                  <Link to="/">
                    <img
                      src={logo1}
                      alt="logo"
                      className="image-fit"
                    />
                  </Link>
                </div>
                {/* logo end */}
                {/* Navigation Start */}
                <ul className="main-menu">
                  <li className="menu-item">
                    <Link to="/">Home</Link>
                  </li>
                  {/* <li className="menu-item menu-item-has-children"> */}

                  <li className="menu-item">
                    <Link to="/courses">Courses</Link>
                    {/* <ul className="sub-menu">
                      <CoursesMenu />
                    </ul> */}
                  </li>
                  <li className="menu-item">
                    <Link to="/mock">Mock Test</Link>
                  </li>

                  <li className="menu-item">
                    <Link to="/contact">Contacts</Link>
                  </li>

                </ul>
                {/* Navigation Ens */}
                {!sideBar && (
                  <div className="head_actions">
                    <DefaultHeadActions />
                    <button
                      type="button"
                      className="head_trigger mobile_trigger"
                      onClick={() => openMobileMenu()}
                    >
                      <span />
                      <span />
                      <span />
                    </button>
                  </div>
                )}
                {/* Head Actions */}

                {/* Head Actions */}
              </nav>
              {sideBar && (
                <div className="head_actions">
                  <HeadActions setOpenSidebar={setOpenSidebar} ProfileMenu={ProfileMenu} logOut={logOut} showLogin={showLogin} showProfile={showProfile} />
                  <button
                    type="button"
                    className="head_trigger mobile_trigger"
                    onClick={() => openMobileMenu()}
                  >
                    <span />
                    <span />
                    <span />
                  </button>
                </div>
              )}
            </div>
            {/* inner */}
          </div>
        </div>

        {/* Search Start */}
        {!sideBar && (
          <SearchTrigger
            searchTrigger={searchTrigger}
            setSearchTrigger={() => setSearchTrigger(false)}
          />
        )}
        {/* Search End */}
      </header>
    </Fragment>
  );
};

export default Header;
