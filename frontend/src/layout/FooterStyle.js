import { Link } from "react-router-dom";
import logo1 from '../assets/images/logo1.png'
import gstore from '../assets/images/google_store1.jpg'
import astore from '../assets/images/apple_store1.jpg'
import element13 from '../assets/images/elements/element_13.png'
import element14 from '../assets/images/elements/element_14.png'
import element16 from '../assets/images/elements/element_16.png'
import white1 from '../assets/images/logo-white1.png'

export const Footer1 = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer_top section-padding">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_about wow fadeInDown">
              <Link to="/index" className="logo">
                  <img
                    src={logo1}
                    alt="logo"
                    className="image-fit"
                  />
              </Link>
              <ul className="info">
                <li>
                  <Link to="#">256 Elizaberth Ave Str, Brooklyn, CA, 90025</Link>
                </li>
                <li>
                  <Link to="tel:+01234567899">+012 (345) 678 99</Link>
                </li>
                <li>
                  <Link to="mailto:example@example.com">example@example.com</Link>
                </li>
              </ul>
              <ul className="social">
                <li>
                  <Link to="#">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-linkedin" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-behance" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-youtube" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_menu wow fadeInUp">
              <h6 className="ft-title">Our Coach</h6>
              <ul>
                <li>
                  <Link to="#">Basic Life Coach</Link>
                </li>
                <li>
                  <Link to="#">Advance Helath Coach</Link>
                </li>
                <li>
                  <Link to="#">Advance Business Coach</Link>
                </li>
                <li>
                  <Link to="#">Basic Learn English</Link>
                </li>
                <li>
                  <Link to="#">Web Development</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_menu wow fadeInDown">
              <h6 className="ft-title">About Us</h6>
              <ul>
                <li>
                  <Link to="#">Latest Courses</Link>
                </li>
                <li>
                  <Link to="#">Mission &amp; Vision</Link>
                </li>
                <li>
                  <Link to="#">Our Approach</Link>
                </li>
                <li>
                  <Link to="#">Exclusive Advisors</Link>
                </li>
                <li>
                  <Link to="#">Join a Career</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_apps wow fadeInUp">
              <h6 className="ft-title">Apps Download</h6>
              <p className="mb-xl-20">
                Sed ut perspici unde omnis iste natus error sit voluptatem accus
              </p>
              <Link to="#" className="app_img">
                <img src={gstore} alt="img" />
              </Link>
              <Link to="#" className="app_img">
                <img src={astore} alt="img" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p className="mb-0">
          © 2021 <Link to="#">Wellco</Link>. All Rights Reserved, Design By Webtend
        </p>
      </div>
    </div>
  </footer>
);
export const Footer2 = () => (
  <footer
    className="footer bg-thm-color-two-gradient style_2 z-1"
    style={{ backgroundImage: "url(assets/images/elements/element_15.png)" }}
  >
    <img
      src={element13}
      className="element_1"
      alt="Element"
    />
    <img
      src={element14}
      className="element_2"
      alt="Element"
    />
    <div className="container relative z-1">
      <div className="footer_top section-padding">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_about wow fadeInDown">
              <Link to="/index" className="logo">
                  <img
                    src={logo1}
                    alt="logo"
                    className="image-fit"
                  />
              </Link>
              <ul className="info">
                <li>
                  <Link to="#">256 Elizaberth Ave Str, Brooklyn, CA, 90025</Link>
                </li>
                <li>
                  <Link to="tel:+01234567899">+012 (345) 678 99</Link>
                </li>
                <li>
                  <Link to="mailto:example@example.com">example@example.com</Link>
                </li>
              </ul>
              <ul className="social">
                <li>
                  <Link to="#">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-linkedin" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-behance" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-youtube" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_menu wow fadeInUp">
              <h6 className="ft-title">Our Coach</h6>
              <ul>
                <li>
                  <Link to="#">Basic Life Coach</Link>
                </li>
                <li>
                  <Link to="#">Advance Helath Coach</Link>
                </li>
                <li>
                  <Link to="#">Advance Business Coach</Link>
                </li>
                <li>
                  <Link to="#">Basic Learn English</Link>
                </li>
                <li>
                  <Link to="#">Web Development</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_menu wow fadeInDown">
              <h6 className="ft-title">About Us</h6>
              <ul>
                <li>
                  <Link to="#">Latest Courses</Link>
                </li>
                <li>
                  <Link to="#">Mission &amp; Vision</Link>
                </li>
                <li>
                  <Link to="#">Our Approach</Link>
                </li>
                <li>
                  <Link to="#">Exclusive Advisors</Link>
                </li>
                <li>
                  <Link to="#">Join a Career</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_newsletter wow fadeInUp">
              <h6 className="ft-title">Newsletter</h6>
              <p className="mb-xl-20">
                Sed ut perspici unde omnis iste natus error sit voluptatem accus
              </p>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  name="#"
                  placeholder="Enter Your Email"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded"
                >
                  Subscribe Now <i className="fal fa-chevron-right ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p className="mb-0">
          © 2021 <Link to="#">Wellco</Link>. All Rights Reserved, Design By Webtend
        </p>
      </div>
      <img
        src={element16}
        alt="element"
        className="element_3 rotate_elem"
      />
      <div className="arrows to_up slideTop">
        <div className="arrow" />
        <div className="arrow" />
        <div className="arrow" />
        <div className="arrow" />
        <div className="arrow" />
      </div>
    </div>
  </footer>
);

export const DefaultFooter = () => (
  <footer
    className="footer bg-thm-color-one style_2 style_3 z-1"
    style={{ backgroundImage: "url(assets/images/elements/element_18.png)" }}
  >
    <div className="container relative z-1">
      <div className="footer_top section-padding">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_about wow fadeInDown">
              <Link to="/" className="logo">
                  <img
                    src={white1}
                    alt="logo"
                    className="image-fit"
                  />
              </Link>
              <ul className="info">
                <li>
                  <Link to="#">256 Elizaberth Ave Str, Brooklyn, CA, 90025</Link>
                </li>
                <li>
                  <Link to="tel:+01234567899">+012 (345) 678 99</Link>
                </li>
                <li>
                  <Link to="mailto:example@example.com">example@example.com</Link>
                </li>
              </ul>
              <ul className="social">
                <li>
                  <Link to="#">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-linkedin" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-behance" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-youtube" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_menu wow fadeInUp">
              <h6 className="ft-title">Our Coach</h6>
              <ul>
                <li>
                  <Link to="#">Basic Life Coach</Link>
                </li>
                <li>
                  <Link to="#">Advance Helath Coach</Link>
                </li>
                <li>
                  <Link to="#">Advance Business Coach</Link>
                </li>
                <li>
                  <Link to="#">Basic Learn English</Link>
                </li>
                <li>
                  <Link to="#">Web Development</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_menu wow fadeInDown">
              <h6 className="ft-title">About Us</h6>
              <ul>
                <li>
                  <Link to="#">Latest Courses</Link>
                </li>
                <li>
                  <Link to="#">Mission &amp; Vision</Link>
                </li>
                <li>
                  <Link to="#">Our Approach</Link>
                </li>
                <li>
                  <Link to="#">Exclusive Advisors</Link>
                </li>
                <li>
                  <Link to="#">Join a Career</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_newsletter wow fadeInUp">
              <h6 className="ft-title">Newsletter</h6>
              <p className="mb-xl-20">
                Sed ut perspici unde omnis iste natus error sit voluptatem accus
              </p>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  name="#"
                  placeholder="Enter Your Email"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="thm-btn bg-thm-color-three thm-color-three-shadow btn-rectangle"
                >
                  Subscribe Now <i className="fal fa-chevron-right ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p className="mb-0">
          © 2021 <Link to="#">Wellco</Link>. All Rights Reserved, Design By Webtend
        </p>
      </div>
      <img
        src={element16}
        alt="element"
        className="element_3 rotate_elem"
      />
      <div className="arrows to_up slideTop">
        <div className="arrow" />
        <div className="arrow" />
        <div className="arrow" />
        <div className="arrow" />
        <div className="arrow" />
      </div>
    </div>
  </footer>
);
