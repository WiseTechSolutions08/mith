import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'

import { Fragment } from "react";
const HeaderSidebar = ({ openSidebar, closeSidebar }) => {
  return (
    <Fragment>
      <aside
        className={`aside_bar aside_bar_right aside_canvas ${
          openSidebar ? "open" : ""
        }`}
      >
        {/* logo */}
        <Link to="/" className="logo pl-0">
            <img src={logo} alt="logo" />
        </Link>
        {/* logo */}
        <p>
          Sed ut perspiciatis unde omnis iste natus error voluptatem accan tium
          doloremque laudantium totam rem aperiam
        </p>
        <div className="sidebar">
          <div className="sidebar_widget recent_widgets">
            <h5 className="widget_title">Popular Courses</h5>
            <ul>
              <li>
                <div className="image">
                  <img
                    src="assets/images/coach/small_1.jpg"
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="text">
                  <h6 className="mb-0">
                    <Link to="/course-details">
                      How to Become a Life Coach Partner
                    </Link>
                  </h6>
                  <p className="mb-0">
                    <strong>By </strong>
                    <Link to="/courses">John Foerster</Link>
                  </p>
                </div>
              </li>
              <li>
                <div className="image">
                  <img
                    src="assets/images/coach/small_2.jpg"
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="text">
                  <h6 className="mb-0">
                    <Link to="/course-details">
                      How to Solve Health Problem
                    </Link>
                  </h6>
                  <p className="mb-0">
                    <strong>By </strong>
                    <Link to="/courses">David Sullivan</Link>
                  </p>
                </div>
              </li>
              <li>
                <div className="image">
                  <img
                    src="assets/images/coach/small_3.jpg"
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="text">
                  <h6 className="mb-0">
                    <Link to="/course-details">
                      Getting Started Expres And JavaScript
                    </Link>
                  </h6>
                  <p className="mb-0">
                    <strong>By </strong>
                    <Link to="/courses">Zachary Morin</Link>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="sidebar_widget">
            <h5 className="widget_title">Popular Tags</h5>
            <div className="tags">
              <Link to="/blog-grid">Business</Link>
              <Link to="/blog-grid">Corporate</Link>
              <Link to="/blog-grid">HTML</Link>
              <Link to="/blog-grid">Art</Link>
              <Link to="/blog-grid">Finance</Link>
              <Link to="/blog-grid">Investment</Link>
              <Link to="/blog-grid">CSS</Link>
              <Link to="/blog-grid">Coach</Link>
              <Link to="/blog-grid">Planing</Link>
              <Link to="/blog-grid">Creative</Link>
              <Link to="/blog-grid">Health</Link>
            </div>
          </div>
        </div>
      </aside>
      <div
        className="aside-overlay trigger-right"
        onClick={() => closeSidebar()}
      ></div>
    </Fragment>
  );
};

export default HeaderSidebar;
