import { Link } from "react-router-dom";
import { Fragment } from "react";
export const HomeMenu = () => (
  <Fragment>
    <li className="menu-item">
      <Link to="/">Home v1</Link>
    </li>
    <li className="menu-item">
      <Link to="/index-2">Home v2</Link>
    </li>
    <li className="menu-item">
      <Link to="/index-3">Home v3</Link>
    </li>
  </Fragment>
);
export const PageMenu = () => (
  <Fragment>
    <li className="menu-item">
      <Link to="/about">Aptitude Mock</Link>
    </li>
    <li className="menu-item">
      <Link to="/about-2">Reasoning Mock</Link>
    </li>
    <li className="menu-item">
      <Link to="/events">Verbal Mock</Link>
    </li>
    <li className="menu-item">
      <Link to="/videos">Videos</Link>
    </li>
    <li className="menu-item">
      <Link to="/services">Services</Link>
    </li>
    <li className="menu-item">
      <Link to="/team">Team</Link>
    </li>
    <li className="menu-item">
      <Link to="/team-details">Team Details</Link>
    </li>
    <li className="menu-item">
      <Link to="/pricing">Pricing</Link>
    </li>
    <li className="menu-item">
      <Link to="/testimonials">Testimonials</Link>
    </li>
    <li className="menu-item">
      <Link to="/faqs">{`FAQ's`}</Link>
    </li>
  </Fragment>
);

export const CoursesMenu = () => (
  <Fragment>
    <li className="menu-item">
      <Link to="/courses">Apptitude</Link>
    </li>
    <li className="menu-item">
      <Link to="/reasoning">Reasoning</Link>
    </li>
    <li className="menu-item">
      <Link to="/verbal">Verbal</Link>
    </li>
  </Fragment>
);
export const BlogMenu = () => (
  <Fragment>
    <li className="menu-item">
      <Link to="/blog-grid">Blog Grid</Link>
    </li>
    <li className="menu-item">
      <Link to="/blog-list">Blog List</Link>
    </li>
    <li className="menu-item">
      <Link to="/blog-masonry">Blog Masonry</Link>
    </li>
    <li className="menu-item">
      <Link to="/blog-details">Blog Details</Link>
    </li>
  </Fragment>
);
export const PortfolioMenu = () => (
  <Fragment>
    <li className="menu-item">
      <Link to="/portfolio-grid">Portfolio Grid</Link>
    </li>
    <li className="menu-item">
      <Link to="/portfolio-gallery">Portfolio Gallery</Link>
    </li>
    <li className="menu-item">
      <Link to="/portfolio-masonry">Portfolio Masonry</Link>
    </li>
    <li className="menu-item">
      <Link to="/portfolio-details">Portfolio Details</Link>
    </li>
  </Fragment>
);
export const ProfileMenu = (logOut) => (
  <Fragment>
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
  </Fragment>
);

