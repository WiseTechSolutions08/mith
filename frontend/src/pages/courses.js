import { Link } from "react-router-dom";
import FooterContact from "../components/FooterContact";
import PageTitleBanner from "../components/PageTitleBanner";
import PaginationLayout from "../components/PaginationLayout";
import Layout from "../layout/Layout";
import React, { Component } from "react";
import { connect } from "react-redux";
import { courseList } from "../state/actions/course";
import { SET_CURRENT_COURSE } from "../state/actions/types";


class Courses extends Component {

  constructor(props) {
    super(props);
    this.showCourseDetailsPage = this.showCourseDetailsPage.bind(this);

    this.state = {
      courses: [],
      loading: true,
      coursePerPage: 3
    };
  }

  componentWillMount = () => {

    this.setState({
      loading: true,
    });

    const { dispatch, history } = this.props;

    dispatch(courseList())
      .then(() => {
        this.setState({
          loading: false
        });
        // history.push("/profile");
        // window.location.reload();
      })
      .catch(() => {
        this.setState({
          loading: false
        });
      });

  }

  showCourseDetailsPage(course) {
    const { dispatch, history } = this.props;
    dispatch({
      type: SET_CURRENT_COURSE,
      payload: { course: course },
    });
  }


  render() {
    const { courses } = this.props;
    return (
      <Layout noHeaderTop sideBar sticky headerStyle={1} footerStyle={1}>
        <PageTitleBanner pageName="Aptitude Courses" />

        <section className="section-padding">
          <div className="container">
            <PaginationLayout id="#coursesId" sort={this.state.coursePerPage}>
              <div className="row">
                {courses.map((course) => (
                  <div className="col-xl-4 col-md-6" id={course.id}>
                    <Link to='/coursedetails'
                      className="coach_block wow fadeInUp"
                      data-wow-delay=".10ms" onClick={() => { return this.showCourseDetailsPage(course) }}
                    >
                      <div className="coach_img">
                        <img
                          src={course.thumbnail}
                          alt="img"
                          className="image-fill"
                        />
                        <div className="coach_badges">
                          <span className="tag_badge bg-thm-color-four">{course.price == 0 ? 'Free' : 'Rs.' + course.price}</span>
                        </div>
                        <div className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                          <i className="fal fa-chevron-right" />
                        </div>
                      </div>
                      <div className="coach_caption">
                        <div className="coach_meta">
                          <div className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                            {course.courseName}
                          </div>
                          <div className="ratings">
                            {course.reviewRating > 0 && <i className="fal fa-star active" />}
                            {course.reviewRating > 1 && <i className="fal fa-star active" />}
                            {course.reviewRating > 2 && <i className="fal fa-star active" />}
                            {course.reviewRating > 3 && <i className="fal fa-star active" />}
                            {course.reviewRating > 4 && <i className="fal fa-star active" />}
                          </div>
                        </div>
                        <h5 className="title mb-xl-20">
                          <div>
                            {course.description}
                          </div>
                        </h5>
                      </div>
                    </Link>
                  </div>
                ))}

              </div>
            </PaginationLayout>
          </div>
        </section>
        <FooterContact />
      </Layout>
    )
  }

};

function mapStateToProps(state) {
  const { courses } = state.courses;
  return {
    courses
  };
}

export default connect(mapStateToProps)(Courses);
