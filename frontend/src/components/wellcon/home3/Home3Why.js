import we from '../../../assets/images/we.gif'
// import element3 from '../../../assets/images/elements/element_3.png'
// import element4 from '../../../assets/images/elements/element4.png'
// import element5 from '../../../assets/images/elements/element5.png'

const Home3Why = () => {
  return (
    <section className="section-padding about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5">
            <div className="section-title left-align wow fadeInDown">
              <p className="subtitle">
                <i className="fal fa-book" />
                What We Offer
              </p>
              <h3 className="title">People Why Choose Our Coachs</h3>
            </div>
            <ul className="why-us-list">
              <li className="wow fadeInUp">
                <i className="icon fal fa-check" />
                <div className="text">
                  <h6 className="mb-2">We Teach You How To Coach Yourself</h6>
                  <p className="mb-0">
                    Sed ut perspiciatis unde omnis iste natus sit voluptatemec
                    accusantium doloremque laudantium
                  </p>
                </div>
              </li>
              <li className="wow fadeInDown">
                <i className="icon fal fa-check" />
                <div className="text">
                  <h6 className="mb-2">We Teach You How To Feel Better</h6>
                  <p className="mb-0">
                    Sed ut perspiciatis unde omnis iste natus sit voluptatemec
                    accusantium doloremque laudantium
                  </p>
                </div>
              </li>
              <li className="wow fadeInUp">
                <i className="icon fal fa-check" />
                <div className="text">
                  <h6 className="mb-2">We Teach You How To Take Massive</h6>
                  <p className="mb-0">
                    Sed ut perspiciatis unde omnis iste natus sit voluptatemec
                    accusantium doloremque laudantium
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-xl-7">
            <div className="image_box relative why_us_box mb-0 wow fadeInRight">
              <img
                src={we}
                alt="img"
                className="image-fit"
              />
              {/* <span className="bg-thm-color-three circle_element" /> */}
              {/* <img
                src={element3}
                className="element_1 zoom-fade icon-default-height"
                alt="Element"
              />
              <img
                src={element4}
                className="element_2 rotate_elem"
                alt="Element"
              />
              <img
                src={element5}
                className="element_3 rotate_elem"
                alt="Element"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home3Why;
