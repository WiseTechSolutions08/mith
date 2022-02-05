import { Link } from "react-router-dom";
import icon1 from '../../../assets/images/icons/icon 1.png'
import icon2 from '../../../assets/images/icons/icon 2.png'
import icon3 from '../../../assets/images/icons/icon 3.png'
import icon4 from '../../../assets/images/icons/icon 4.png'


const Home3Features = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          {/* Feature Box Start */}
          <div className="col-lg-3 col-md-6">
            <div className="features_box wow fadeInUp" data-wow-delay=".3s">
              <div className="icon">
                <img src={icon1} alt="img" />
              </div>
              <h5>Exclusive Coach</h5>
              <p>Quis autem vel eum reprehenderit quin eavoluptate</p>
              <Link to="/services">
                <div>
                  <span>Read More</span>
                  <i className="fal fa-chevron-right" />
                </div>
              </Link>
            </div>
          </div>
          {/* Feature Box End */}
          {/* Feature Box Start */}
          <div className="col-lg-3 col-md-6">
            <div className="features_box wow fadeInUp" data-wow-delay=".4s">
              <div className="icon">
                <img src={icon2} alt="img" />
              </div>
              <h5>Creative Minds</h5>
              <p>Quis autem vel eum reprehenderit quin eavoluptate</p>
              <Link to="/services">
                <div>
                  <span>Read More</span>
                  <i className="fal fa-chevron-right" />
                </div>
              </Link>
            </div>
          </div>
          {/* Feature Box End */}
          {/* Feature Box Start */}
          <div className="col-lg-3 col-md-6">
            <div className="features_box wow fadeInUp" data-wow-delay=".5s">
              <div className="icon">
                <img src={icon3} alt="img" />
              </div>
              <h5>Video Tutorials</h5>
              <p>Quis autem vel eum reprehenderit quin eavoluptate</p>
              <Link to="/services">
                <div>
                  <span>Read More</span>
                  <i className="fal fa-chevron-right" />
                </div>
              </Link>
            </div>
          </div>
          {/* Feature Box End */}
          {/* Feature Box Start */}
          <div className="col-lg-3 col-md-6">
            <div className="features_box wow fadeInUp" data-wow-delay=".6s">
              <div className="icon">
                <img src={icon4} alt="img" />
              </div>
              <h5>Worlds Record</h5>
              <p>Quis autem vel eum reprehenderit quin eavoluptate</p>
              <Link to="/services">
                <div>
                  <span>Read More</span>
                  <i className="fal fa-chevron-right" />
                </div>
              </Link>
            </div>
          </div>
          {/* Feature Box End */}
        </div>
      </div>
    </section>
  );
};

export default Home3Features;
