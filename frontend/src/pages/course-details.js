import { Link } from "react-router-dom";
import { Accordion, Button, Nav, Tab } from "react-bootstrap";
import FooterContact from "../components/FooterContact";
import PageTitleBanner from "../components/PageTitleBanner";
import Layout from "../layout/Layout";
import React, { Component } from "react";
import RadioButton from "../components/radio/RadioButton";
import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faVideo, faQuestion, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import no3 from '../assets/images/author/3.jpg'
import c7 from '../assets/images/coach/c7.webp'
import no1 from '../assets/images/author/1.jpg'
import no2 from '../assets/images/author/2.jpg'
import c4 from '../assets/images/coach/c4.webp'
import c9 from '../assets/images/coach/c9.jpg'

import { connect } from "react-redux";
import { courseTopicsList } from "../state/actions/course";




class CourseDetails extends Component {

  constructor(props) {
    super(props);
    this.showCourseDetailsPage = this.showCourseDetailsPage.bind(this);
    this.expandCard = this.expandCard.bind(this);
    this.collapseCard = this.collapseCard.bind(this);

    this.state = {
      courses: [],
      loading: true,
      coursePerPage: 3,
      isSelectedType: ''
    };
  }

  componentWillMount = () => {
    this.setState({
      loading: true,
    });

    const { dispatch, history, currentCourse } = this.props;

    dispatch(courseTopicsList(currentCourse))
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
    // const { dispatch, history } = this.props;
    // dispatch({
    //   type: SET_CURRENT_COURSE,
    //   payload: { course: course },
    // });
  }

  expandCard(id) {
    this.setState({
      isSelectedType: id
    });
  }

  collapseCard(e) {
    this.setState({
      isSelectedType: ''
    });
  }


  render() {
    const { courses, currentCourse, courseTopics } = this.props;
    const { isSelectedType } = this.state;
    if (!currentCourse) {
      return <Navigate to="/courses" replace={true} />
    }
    const course = courses.find(obj => {
      return obj.id === currentCourse;
    })
    const accFun = () => (
      <Accordion
        className="accordion accordion-style style_2 mb-xl-30"
        id="tutorialsaccordion"
        defaultActiveKey={`TutorialsItemOne`}
      >
        {courseTopics.map((topic) => (
          <div className="card">
            <div className="card-header">
              <Accordion.Toggle
                as="button"
                className="btn btn-link"
                data-target={`TutorialsItemOne${topic.id}`}
                eventKey={`TutorialsItemOne${topic.id}`}
              >
                {topic.topic}
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse
              id={`TutorialsItemOne${topic.id}`}
              eventKey={`TutorialsItemOne${topic.id}`}
              data-parent="#tutorialsaccordion"
            >
              <div className="card-body">
                {topic.about}
              </div>
            </Accordion.Collapse>
          </div>
        ))}
      </Accordion>
    );

    return (
      <Layout noHeaderTop sideBar sticky headerStyle={1} footerStyle={1}>
        <PageTitleBanner pageName="Time and Work " />

        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="course_details mb-md-80 wow fadeInDown">
                  <div className="desc_box">
                    <h2 className="title">
                      Motivate Yourself To Get More Done In Less Time
                    </h2>
                    {/* <div className="author">
                          <img
                            src={course.thumbnail}
                            alt="img"
                            className="image-fit"
                          />
                          <Link to="/courses"className="thm-color-one">Wilbert A. Toney
                          </Link>
                        </div> */}
                    <div className="detail_img mb-xl-30">
                      <img
                        src={course.thumbnail}
                        alt="img"
                        className="image-fit"
                      />
                    </div>

                  </div>
                  <Tab.Container defaultActiveKey="description">
                    <Nav className="nav nav-tabs style_4">
                      <Nav.Item>
                        <Nav.Link
                          as="a"
                          eventKey="overview"
                          href="#overview"
                          data-toggle="tab"
                        >
                          Overview
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          as="a"
                          eventKey="curriculum"
                          href="#curriculum"
                          data-toggle="tab"
                        >
                          Curriculum
                        </Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link
                          as="a"
                          eventKey="instructor"
                          href="#instructor"
                          data-toggle="tab"
                        >
                          Instructor
                        </Nav.Link>
                      </Nav.Item> */}
                      <Nav.Item>
                        <Nav.Link
                          as="a"
                          eventKey="reviews"
                          href="#reviews"
                          data-toggle="tab"
                        >
                          Reviews
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content className="tab-content">
                      <Tab.Pane className="tab-pane" eventKey="curriculum">
                        <div className="curriculum-container">
                          <ul className="curriculum-container-list">
                            {courseTopics.map((topic) => (
                              <li className={"curriculum-list" + (isSelectedType === topic.id ? ' expanded' : '')}>
                                <div className="curriculum-card" >
                                  <h5>{topic.topic}</h5>
                                  {(isSelectedType !== topic.id) && <span className="expand-icon" onClick={() => {
                                    this.expandCard(topic.id)
                                  }}><FontAwesomeIcon icon={faPlus} /></span>}
                                  {(isSelectedType === topic.id) && <span className="expand-icon" onClick={this.collapseCard}><FontAwesomeIcon icon={faMinus} /></span>}

                                </div>
                                {(isSelectedType === topic.id) && <ul className="curriculum-subtopics-list">
                                  <li className="curriculum-subtopic-even">
                                    <Link className="course-link" to='/coursesummary'>
                                      <span className="curriculum-subtopic-icon"><FontAwesomeIcon icon={faVideo} /></span>
                                      <span className="curriculum-subtopic-text">Topic gist</span>
                                    </Link>
                                  </li>
                                  <li className="curriculum-subtopic-odd">
                                    <Link className="course-link" to='/coursesummary'>
                                      <span className="curriculum-subtopic-icon"><FontAwesomeIcon icon={faArrowRight} /></span>
                                      <span className="curriculum-subtopic-text">Description</span>
                                    </Link>
                                  </li>
                                  <li className="curriculum-subtopic-even">
                                    <Link className="course-link" to='/coursesummary'>
                                      <span className="curriculum-subtopic-icon"><FontAwesomeIcon icon={faQuestion} /></span>
                                      <span className="curriculum-subtopic-text">Questions & Answers</span>
                                    </Link>
                                  </li>
                                </ul>}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane className="tab-pane" eventKey="instructor">
                        <h5>About The Course</h5>
                        <p>
                          Time and work deals with the time taken by an individual or a group of individuals to complete a piece of work and the efficiency of the work done by each of them.{" "}
                        </p>


                        <hr></hr>
                        <h5>Description</h5>
                        <p align="justify">
                          Cognitive ability tests assess abilities involved in thinking (e.g., reasoning, perception, memory, verbal and mathematical ability, and problem solving). Such tests pose questions designed to estimate applicants' potential to use mental processes to solve work-related problems or to acquire new job knowledge.

                          Traditionally, the general trait measured by cognitive ability tests is called "intelligence" or "general mental ability." However, an intelligence test often includes various item types which measure different and more specific mental factors often referred to as "specific mental abilities." Examples of such items include arithmetic computations, verbal analogies, reading comprehension, number series completion, and spatial relations (i.e., visualizing objects in three-dimensional space).

                          Some cognitive ability tests sum up the correct answers to all of the items to obtain an overall score that represents a measure of general mental ability. If an individual score is computed for each of the specific types of abilities (e.g., numeric, verbal, reasoning), then the resulting scores represent measures of the specific mental abilities.

                          Traditional cognitive tests are well-standardized, contain items reliably scored, and can be administered to large groups of people at one time. Examples of item formats include multiple choice, sentence completion, short answer, or true-false. Many professionally developed cognitive tests are available commercially and may be considered when there is no significant need to develop a test that refers specifically to the particular job or organization.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane className="tab-pane" eventKey="overview">
                        <h5>About The Course</h5>
                        <p>
                          {course.about}
                        </p>


                        <hr></hr>
                        <h5>Description</h5>
                        <p align="justify">
                          {course.overview}
                        </p>
                      </Tab.Pane>
                      <Tab.Pane className="tab-pane" eventKey="reviews">
                        {/* Post Comments Start */}
                        <h4>People Comments</h4>
                        <ul className="comments mb-xl-30">
                          <li className="comment">
                            <div className="comment_img">
                              <img
                                src="assets/images/blog/comments/1.jpg"
                                alt="img"
                                className="image-fit"
                              />
                            </div>
                            <div className="comment_text">
                              <h6 className="mb-0">John F. Medina</h6>
                              <p className="comment_date">25 May 2021</p>
                              <p className="mb-0">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis et quasi architecto beatae{" "}
                              </p>
                              <a href="#" className="comment_link">
                                Reply{" "}
                                <i className="fal fa-long-arrow-right ml-2" />
                              </a>
                            </div>
                            <ul className="children">
                              <li className="comment">
                                <div className="comment_img">
                                  <img
                                    src="assets/images/blog/comments/2.jpg"
                                    alt="img"
                                    className="image-fit"
                                  />
                                </div>
                                <div className="comment_text">
                                  <h6 className="mb-0">Jeffrey T. Kelly</h6>
                                  <p className="comment_date">25 May 2021</p>
                                  <p className="mb-0">
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa quae
                                    ab illo inventore veritatis et quasi
                                    architecto beatae{" "}
                                  </p>
                                  <a href="#" className="comment_link">
                                    Reply{" "}
                                    <i className="fal fa-long-arrow-right ml-2" />
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="comment">
                            <div className="comment_img">
                              <img
                                src="assets/images/blog/comments/3.jpg"
                                alt="img"
                                className="image-fit"
                              />
                            </div>
                            <div className="comment_text">
                              <h6 className="mb-0">Richard B. Zellmer</h6>
                              <p className="comment_date">25 May 2021</p>
                              <p className="mb-0">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis et quasi architecto beatae{" "}
                              </p>
                              <a href="#" className="comment_link">
                                Reply{" "}
                                <i className="fal fa-long-arrow-right ml-2" />
                              </a>
                            </div>
                          </li>
                        </ul>
                        {/* Post Comments End */}
                        {/* Comment Form Start */}
                        <br></br>
                        <div className="comment_form">
                          <h4>Rise Your Doubts</h4>
                          <form onSubmit={(e) => e.preventDefault()}>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="#"
                                    placeholder="Your Full Name"
                                    className="form-control form-control-custom style_2"
                                    autoComplete="off"
                                  />
                                  <i className="fal fa-user" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    name="#"
                                    placeholder="Your Email"
                                    className="form-control form-control-custom style_2"
                                    autoComplete="off"
                                  />
                                  <i className="fal fa-envelope" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea
                                    rows={5}
                                    name="#"
                                    placeholder="Write Message"
                                    className="form-control form-control-custom style_2"
                                    autoComplete="off"
                                    defaultValue={""}
                                  />
                                  <i className="fal fa-pen" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <button
                                  type="submit"
                                  className="thm-btn bg-thm-color-three thm-color-three-shadow btn-rectangle"
                                >
                                  Send Comment{" "}
                                  <i className="fal fa-chevron-right ml-2" />
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* Comment Form End */}
                        {/* post details */}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sidebar">
                  <div className="sidebar_widget info_widgets wow fadeInUp">
                    <ul>
                      <li className="active">
                        <div className="left-side">
                          <i className="fal fa-usd-circle" />
                          <h6 className="mb-0">Course Price</h6>
                        </div>
                        <div className="right-side">Rs.{course.price}</div>
                      </li>
                      <li>
                        <div className="left-side">
                          <i className="fal fa-user-circle" />
                          <h6 className="mb-0">Instructor</h6>
                        </div>
                        <div className="right-side">{course.instructor}</div>
                      </li>
                      <li>
                        <div className="left-side">
                          <i className="fal fa-clock" />
                          <h6 className="mb-0">Videos</h6>
                        </div>
                        <div className="right-side">{course.duration}</div>
                      </li>
                      <li>
                        <div className="left-side">
                          <i className="fal fa-book" />
                          <h6 className="mb-0">Lectures</h6>
                        </div>
                        <div className="right-side">{course.sections} Lessons</div>
                      </li>
                      <li>
                        <div className="left-side">
                          <i className="fal fa-user-graduate" />
                          <h6 className="mb-0">Enrolled</h6>
                        </div>
                        <div className="right-side">{course.enrolledStudents} Students</div>
                      </li>
                      <li>
                        <div className="left-side">
                          <i className="fal fa-flag-alt" />
                          <h6 className="mb-0">Language</h6>
                        </div>
                        <div className="right-side">{course.language}</div>
                      </li>
                      {/* <li>
                        <div className="left-side">
                          <i className="fal fa-calendar-alt" />
                          <h6 className="mb-0">Deadline</h6>
                        </div>
                        <div className="right-side">06 March 2021</div>
                      </li> */}
                    </ul>
                    <hr />
                    <cite className="mb-xl-20">
                      Quis autem vel eum iurrepre hende quin ea voluptate velit
                      esse quanihily molestiae consequatur{" "}
                    </cite>
                    <Link to="/contact" className="thm-btn bg-thm-color-three thm-color-three-shadow btn-rectangle">
                      Enroll Now <i className="fal fa-chevron-right ml-2" />
                    </Link>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Details End */}
        <FooterContact />
      </Layout>
    )
  }

};

function mapStateToProps(state) {
  const { courses, currentCourse, courseTopics } = state.courses;
  return {
    courses,
    currentCourse,
    courseTopics
  };
}

export default connect(mapStateToProps)(CourseDetails);
