import { Link } from "react-router-dom";
import element1 from '../../../assets/images/elements/element_1.png'
import element2 from '../../../assets/images/elements/element_2.png'
import t1 from '../../../assets/images/team/t1.jpg'
import t2 from '../../../assets/images/team/t2.jpg'
import t3 from '../../../assets/images/team/t3.jpg'
import t4 from '../../../assets/images/team/t4.jpg'
import t5 from '../../../assets/images/team/t5.jpg'


const Home3Team = () => {
  return (
    <section className="section-padding bg-thm-color-two-gradient z-1 team_main_wrap pb-extra">
      <img
        src={element1}
        className="element_1"
        alt="Element"
      />
      <img
        src={element2}
        className="element_2"
        alt="Element"
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title wow fadeInDown">
              <p className="subtitle">
                <i className="fal fa-book" />
                Our Professionals
              </p>
              <h3 className="title">Meet Our Professinoal Team Members</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Block Start */}
          <div className="col-lg col-md-6">
            <div className="team_block wow fadeInUp" data-wow-delay=".3s">
              <div className="team_img">
                <img
                  src={t1}
                  alt="img"
                  className="image-fit"
                />
                <Link to="/team-details" className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                    <i className="fal fa-plus" />
                </Link>
              </div>
              <h6 className="mb-1">
                <Link to="/team-details">
                  Wallace D. Grace
                </Link>
              </h6>
              <p className="thm-color-two mb-0 font-weight-bold">
                Coach Teacher
              </p>
            </div>
          </div>
          {/* Block End */}
          {/* Block Start */}
          <div className="col-lg col-md-6">
            <div className="team_block wow fadeInUp" data-wow-delay=".5s">
              <div className="team_img">
                <img
                  src={t2}
                  alt="img"
                  className="image-fit"
                />
                <Link to="/team-details" className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                    <i className="fal fa-plus" />
                </Link>
              </div>
              <h6 className="mb-1">
                <Link to="/team-details">
                  Evan A. Ethridge
                </Link>
              </h6>
              <p className="thm-color-two mb-0 font-weight-bold">
                Coach Teacher
              </p>
            </div>
          </div>
          {/* Block End */}
          {/* Block Start */}
          <div className="col-lg col-md-6">
            <div className="team_block wow fadeInUp" data-wow-delay=".7s">
              <div className="team_img">
                <img
                  src={t3}
                  alt="img"
                  className="image-fit"
                />
                <Link to="/team-details" className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                    <i className="fal fa-plus" />
                </Link>
              </div>
              <h6 className="mb-1">
                <Link to="/team-details">
                  Marcus L. Duncan
                </Link>
              </h6>
              <p className="thm-color-two mb-0 font-weight-bold">
                Coach Teacher
              </p>
            </div>
          </div>
          {/* Block End */}
          {/* Block Start */}
          <div className="col-lg col-md-6">
            <div className="team_block wow fadeInUp" data-wow-delay=".8s">
              <div className="team_img">
                <img
                  src={t4}
                  alt="img"
                  className="image-fit"
                />
                <Link to="/team-details" className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                    <i className="fal fa-plus" />
                </Link>
              </div>
              <h6 className="mb-1">
                <Link to="/team-details">
                  Paul B. Gilliland
                </Link>
              </h6>
              <p className="thm-color-two mb-0 font-weight-bold">
                Coach Teacher
              </p>
            </div>
          </div>
          {/* Block End */}
          {/* Block Start */}
          <div className="col-lg col-md-6">
            <div className="team_block wow fadeInUp" data-wow-delay=".9s">
              <div className="team_img">
                <img
                  src={t5}
                  alt="img"
                  className="image-fit"
                />
                <Link to="/team-details" className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                    <i className="fal fa-plus" />
                </Link>
              </div>
              <h6 className="mb-1">
                <Link to="/team-details">
                  Donald T.Lewis
                </Link>
              </h6>
              <p className="thm-color-two mb-0 font-weight-bold">
                Coach Teacher
              </p>
            </div>
          </div>
          {/* Block End */}
        </div>
      </div>
    </section>
  );
};

export default Home3Team;
