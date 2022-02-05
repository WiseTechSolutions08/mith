import { Link } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { logout } from "../state/actions/auth";
import { clearMessage } from "../state/actions/message";

import { history } from "../state/helpers/history";

import {
  BlogMenu,
  CoursesMenu,
  HomeMenu,
  PageMenu,
  PortfolioMenu,
} from "./Menu";
import logo1 from '../assets/images/logo1.png'


const MobileMenu = ({ closeMobileMenu, showMobileMenu }) => {
  const [activeMenu, setActiveMenu] = useState("");
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

  const activeFun = (name) => setActiveMenu(name === activeMenu ? "" : name);
  const activeLi = (name) =>
    name === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <Fragment>
      <aside
        className={`aside_bar aside_bar_left aside_mobile ${
          showMobileMenu ? "open" : ""
        }`}
      >
        {/* logo */}
        <Link to="/" className="logo">
            <img src={logo1} alt="logo" />
        </Link>
        {/* logo */}
        {/* Menu */}
        <nav>
          <ul className="main-menu">
            <li className="menu-item ">
              <Link to="/" onClick={() => activeFun("Home")}>
                Home
              </Link>
            { /* <ul className="sub-menu" style={activeLi("Home")}>
                <HomeMenu />
              </ul>*/}
            </li>
            <li className="menu-item">
              <Link to="#" onClick={() => activeFun("Courses")}>
                Courses
              </Link>
              {/* <ul className="sub-menu" style={activeLi("Courses")}>
                <CoursesMenu />
              </ul> */}
            </li>
            <li className="menu-item ">
              <Link to="/mock" onClick={() => activeFun("Pages")}>
                Mock Test
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/contact">Contacts</Link>
            </li>
            {showLogin && <li className="menu-item">
              <Link to="/login">Login</Link>
            </li>}
            {showProfile &&<li className="menu-item">
              <Link to="/subscribed-courses">My courses</Link>
            </li>}
            {showProfile &&<li className="menu-item">
              <Link to="/account">My account</Link>
            </li>}
            {showProfile &&<li className="menu-item">
              <Link to="/profile">My profile</Link>
            </li>}
            {showProfile &&<li className="menu-item" onClick={logOut}>
              <Link to="/">Logout</Link>
            </li>}
          </ul>
        </nav>
        {/* Menu */}
      </aside>
      <div
        className="aside-overlay trigger-left"
        onClick={() => closeMobileMenu()}
      ></div>
    </Fragment>
  );
};

export default MobileMenu;
