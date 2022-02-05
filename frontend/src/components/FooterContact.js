import { Link } from "react-router-dom";
import ss3 from '../assets/images/elements/ss3.png'
// import squareShape from '../assets/images/elements/square_shape.png'
// import cta2 from '../assets/images/cta2.png'

const FooterContact = () => {
  return (
    <div className="cta_box style_2">
      <div className="container relative z-2">
        <div className="bg-thm-color-two cta_box_inner z-2 mb-negative">
          <img
            src={ss3}
            alt="shape"
            className="shape_1 zoom-fade"
          />
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="text_block wow fadeInLeft">
                <div className="section-title left-align white">
                  <p className="subtitle">
                    <i className="fal fa-book" />
                    Our Professionals
                  </p>
                  <h3 className="title">
                    Do You Want to Transform Your Life For Better ?
                  </h3>
                  <Link to="/contact" className="thm-btn bg-thm-color-three thm-color-three-shadow btn-rectangle">
                      Contact Us <i className="fal fa-chevron-right ml-2" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image_box relative z-1 wow fadeInRight">
                {/* <img
                  src={squareShape}
                  alt="shape"
                  className="shape_2 rotate_elem"
                />
                <img
                  src={cta2}
                  alt="img"
                  className="image-fit"
                /> */}
                {/* <div className="arrows slideRight">
                  <div className="arrow" />
                  <div className="arrow" />
                  <div className="arrow" />
                  <div className="arrow" />
                  <div className="arrow" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="arrows to_up slideTop">
          <div className="arrow" />
          <div className="arrow" />
          <div className="arrow" />
          <div className="arrow" />
          <div className="arrow" />
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
