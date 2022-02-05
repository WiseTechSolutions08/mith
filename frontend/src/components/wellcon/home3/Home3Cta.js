import { Link } from "react-router-dom";
import shape from '../../../assets/images/elements/shape.png'
// import squareShape from '../../../assets/images/elements/square_shape.png'
import Layer1 from '../../../assets/images/Layer 1.png'

const Home3Cta = () => {
  return (
    <div className="cta_box">
      <div className="container relative z-1">
        <div className="bg-thm-color-two cta_box_inner z-1 mt-negative">
          <img
            src={shape}
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
                  <Link to="/contact" className="thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
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
                /> */}
                <img
                  src={Layer1}
                  alt="img"
                  className="image-fit"
                />
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
        {/* <div className="arrows to_up slideTop">
          <div className="arrow" />
          <div className="arrow" />
          <div className="arrow" />
          <div className="arrow" />
          <div className="arrow" />
        </div> */}
      </div>
    </div>
  );
};

export default Home3Cta;
