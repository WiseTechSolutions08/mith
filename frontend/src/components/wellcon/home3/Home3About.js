import e11 from '../../../assets/images/about/el1.gif'
import cert from '../../../assets/images/about/cert.gif'
import icon1 from '../../../assets/images/icons/icon1.png'
import icon2 from '../../../assets/images/icons/icon2.png'

const Home3About = () => {
  return (
    <section className="section-padding pt-0 about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6">
            <div className="image_box wow fadeInLeft">
              <img
                src={e11}
                alt="img"
                className="image-fit image_1 rounded-circle"
              />
              <img
                src={cert}
                alt="img"
                className="image-fit image_2 rounded-circle"
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="section-title left-align wow fadeInUp">
              <p className="subtitle">
                <i className="fal fa-book" />
                What We Provide
              </p>
              <h3 className="title">We Care About Your Life For Better.</h3>
              <p>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatue velillum{" "}
              </p>
            </div>
            <ul className="about_list">
              <li className=" wow fadeInDown">
                <div className="icon">
                  <img
                    src={icon1}
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="text">
                  <h6 className="mb-2">Master Certified Coach</h6>
                  <p className="mb-0">
                    Quis autem vel eum iure reprehenderit quein ea voluptate
                    velit esse quam
                  </p>
                </div>
              </li>
              <li className=" wow fadeInDown">
                <div className="icon">
                  <img
                    src={icon2}
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="text">
                  <h6 className="mb-2">Coach Certification Program</h6>
                  <p className="mb-0">
                    Quis autem vel eum iure reprehenderit quein ea voluptate
                    velit esse quam
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home3About;
