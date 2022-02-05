import { Link } from "react-router-dom";
import dummyProfile from '../assets/images/dummyProfile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { Fragment } from "react";
export const HeadActions = ({ setOpenSidebar, showLogin, showProfile, logOut, profileMenu }) => {
  return (
    <Fragment>
      {showLogin && <Link to="/login" style={{ visibility: 'visible !important' }}
        className="thm-btn bg-thm-color-two thm-color-two-shadow mr-4 wow fadeInRight mithra-btn-border-radius-5"
        data-wow-delay=".50ms"
      >
        Login/Signup
      </Link>}

      {showProfile && <div className="biz-flex-row biz-auth-logout">

        <ul className="main-menu">
          <li className="menu-item menu-item-has-children profile-img">

            <img
              style={{
                width: 52,
                borderRadius: '50%'
              }}
              className="biz-avatar"
              src={dummyProfile}
              alt="vinoth"
              title="You must have a Gravatar connected to your email to display an image"
            />
            <ul className="sub-menu">
              <li className="menu-item">
                <Link to="/profile">My profile</Link>
              </li>
              <li className="menu-item">
                <Link to="/subscribed-course">My courses</Link>
              </li>
              <li className="menu-item">
                <Link to="/account">My account</Link>
              </li>
              <li className="menu-item" onClick={logOut}>
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item ">
            <Link className="cart" to="/checkout">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </li>
        </ul>
      </div>}

    </Fragment>
  );
};

export const DefaultHeadActions = () => {
  return (
    <Link to="/contact" className="thm-btn bg-thm-color-three thm-color-three-shadow btn-rectangle">
      Enroll Now <i className="fal fa-chevron-right ml-2" />
    </Link>
  );
};
