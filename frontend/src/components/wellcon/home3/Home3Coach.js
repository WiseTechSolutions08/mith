import { Link } from "react-router-dom";
import c9 from '../../../assets/images/coach/c9.jpg'
import r5 from '../../../assets/images/coach/r5.jpg'
import a1 from '../../../assets/images/author/a1.jpg'
import a2 from '../../../assets/images/author/a2.jpg'
import v4 from '../../../assets/images/coach/v4.jpg'
import a3 from '../../../assets/images/author/a3.jpg'

const Home3Coach = () => {
  return (
    <section className="section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title wow fadeInUp">
              <p className="subtitle">
                <i className="fal fa-book" />
                Popular Coach
              </p>
              <h3 className="title">We Provide Professional Life Coachs</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Coach block */}
          <div className="col-xl-4 col-md-6">
            <div className="coach_block wow fadeInDown" data-wow-delay=".2s">
              <div className="coach_img">
                <img
                  src={c9}
                  alt="img"
                  className="image-fit"
                />
                <div className="coach_badges">
                  <span className="tag_badge bg-thm-color-four">Free</span>
                </div>
                <Link to="/course-details" className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                    <i className="fal fa-chevron-right" />
                </Link>
              </div>
              <div className="coach_caption">
                <div className="coach_meta">
                  <Link to="/courses" className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                      Aptitude
                  </Link>
                  <div className="ratings">
                    <i className="fal fa-star active" />
                    <i className="fal fa-star active" />
                    <i className="fal fa-star active" />
                    <i className="fal fa-star active" />
                    <i className="fal fa-star" />
                  </div>
                </div>
                <h5 className="title mb-xl-20">
                  <Link to="/course-details">
                    Ratio and Proportion
                  </Link>
                </h5>
                <div className="author">
                  <img
                    src={a1}
                    alt="img"
                    className="image-fit"
                  />
                  <Link to="/courses" className="thm-color-one">Wilbert A. Toney
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Coach block */}
          {/* Coach block */}
          <div className="col-xl-4 col-md-6">
            <div className="coach_block wow fadeInUp" data-wow-delay=".4s">
              <div className="coach_img">
                <img
                  src={r5}
                  alt="img"
                  className="image-fit"
                />
                <div className="coach_badges">
                  <span className="tag_badge bg-thm-color-four">$50</span>
                </div>
                <Link to="/course-details" className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                    <i className="fal fa-chevron-right" />
                </Link>
              </div>
              <div className="coach_caption">
                <div className="coach_meta">
                  <Link to="/courses" className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                      Reasoning
                  </Link>
                  <div className="ratings">
                    <i className="fal fa-star active" />
                    <i className="fal fa-star active" />
                    <i className="fal fa-star active" />
                    <i className="fal fa-star active" />
                    <i className="fal fa-star active" />
                  </div>
                </div>
                <h5 className="title mb-xl-20">
                  <Link to="/course-details">
                    Data Sufficiency
                  </Link>
                </h5>
                <div className="author">
                  <img
                    src={a2}
                    alt="img"
                    className="image-fit"
                  />
                  <Link to="/courses" className="thm-color-one">Emma H. Parish
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Coach block */}
          {/* Coach block */}
          <div className="col-xl-4 col-md-6">
            <div className="coach_block wow fadeInDown" data-wow-delay=".6s">
              <div className="coach_img">
                <img
                  src={v4}
                  alt="img"
                  className="image-fit"
                />
                <div className="coach_badges">
                  <span className="tag_badge bg-thm-color-four">Free</span>
                </div>
                <Link to="/course-details" className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                    <i className="fal fa-chevron-right" />
                </Link>
              </div>
              <div className="coach_caption">
                <div className="coach_meta">
                  <Link to="/courses" className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                      Verbal
                  </Link>
                  <div className="ratings">
                    <i className="fal fa-star active" />
                    <i className="fal fa-star active" />
                    <i className="fal fa-star active" />
                    <i className="fal fa-star" />
                    <i className="fal fa-star" />
                  </div>
                </div>
                <h5 className="title mb-xl-20">
                  <Link to="/course-details">
                      Reading Comprehension
                  </Link>
                </h5>
                <div className="author">
                  <img
                    src={a3}
                    alt="img"
                    className="image-fit"
                  />
                  <Link to="/courses" className="thm-color-one">Junior N. West
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Coach block */}
        </div>
      </div>
    </section>
  );
};

export default Home3Coach;
