import Link from "next/dist/client/link";
import { Accordion, Nav, Tab } from "react-bootstrap";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import Layout from "../src/layout/Layout";
// import Accordion from "../src/compponents/Accordion";
// import Chevron from "../src/compponents/Chevron";
// import { Radio } from "antd"
import React from 'react';
import RadioButton from "../src/components/radio/RadioButton";
// import CollapseButton from "../src/components/collapse/Collapse";


const CourseDetails = () => {
  const accFun = ({ value }) => (
    <Accordion
      className="accordion accordion-style style_2 mb-xl-30"
      id="tutorialsaccordion"
      defaultActiveKey={`TutorialsItemOne${value}`}
    >
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as="button"
            className="btn btn-link"
            data-target={`TutorialsItemOne${value}`}
            eventKey={`TutorialsItemOne${value}`}
          >
            Section 1
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          id={`TutorialsItemOne${value}`}
          eventKey={`TutorialsItemOne${value}`}
          data-parent="#tutorialsaccordion"
        >
          <div className="card-body">
           Introduction
          </div>
        </Accordion.Collapse>
      </div>
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as="button"
            className="btn btn-link"
            data-target="#TutorialsItemTwo"
            eventKey={`TutorialsItemTwo${value}`}
          >
            Section 2
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          id={`TutorialsItemTwo${value}`}
          eventKey={`TutorialsItemTwo${value}`}
          data-parent="#tutorialsaccordion"
        >
          <div className="card-body">
            Time and Work - 1
          </div>
        </Accordion.Collapse>
      </div>
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as="button"
            className="btn btn-link"
            data-target="#TutorialsItemThree"
            eventKey={`TutorialsItemThree${value}`}
          >
            Section 3
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          id={`TutorialsItemThree${value}`}
          eventKey={`TutorialsItemThree${value}`}
          data-parent="#tutorialsaccordion"
        >
          <div className="card-body">
            Time and work - 2
          </div>
        </Accordion.Collapse>
      </div>
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as="button"
            className="btn btn-link"
            data-target="#TutorialsItemFour"
            eventKey={`TutorialsItemFour${value}`}
          >
            Section 4
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          id={`TutorialsItemFour${value}`}
          eventKey={`TutorialsItemFour${value}`}
          data-parent="#tutorialsaccordion"
        >
          <div className="card-body">
            Time and Work - 3
          </div>
        </Accordion.Collapse>
      </div>
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as="button"
            className="btn btn-link"
            data-target="#TutorialsItemFive"
            eventKey={`TutorialsItemFive${value}`}
          >
            Section 5
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          id={`TutorialsItemFive${value}`}
          eventKey={`TutorialsItemFive${value}`}
          data-parent="#tutorialsaccordion"
        >
          <div className="card-body">
            Time and work - 4
          </div>
        </Accordion.Collapse>
      </div>
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as="button"
            className="btn btn-link"
            data-target="#TutorialsItemSix"
            eventKey={`TutorialsItemSix${value}`}
          >
            Section 6
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          id={`TutorialsItemSix${value}`}
          eventKey={`TutorialsItemSix${value}`}
          data-parent="#tutorialsaccordion"
        >
          <div className="card-body">
            Time and work - 5
          </div>
        </Accordion.Collapse>
      </div>
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as="button"
            className="btn btn-link"
            data-target="#TutorialsItemSeven"
            eventKey={`TutorialsItemSeven${value}`}
          >
           Section 7
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          id={`TutorialsItemSeven${value}`}
          eventKey={`TutorialsItemSeven${value}`}
          data-parent="#tutorialsaccordion"
        >
          <div className="card-body">
            Time and work - 6
          </div>
        </Accordion.Collapse>
      </div>
    </Accordion>
  );
  return (
    <Layout>
      <PageTitleBanner pageName="Time and Work " />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="course_details mb-md-80 wow fadeInDown">
                <Tab.Container defaultActiveKey="description">
                  <Nav className="nav nav-tabs style_4">
                    <Nav.Item>
                      <Nav.Link
                        as="a"
                        eventKey="description"
                        href="#description"
                        data-toggle="tab"
                      >
                        Course Content
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        as="a"
                        eventKey="curriculum"
                        href="#curriculum"
                        data-toggle="tab"
                      >
                        Overview
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        as="a"
                        eventKey="reviews"
                        href="#reviews"
                        data-toggle="tab"
                      >
                        Partice Test
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="tab-content">
                    <Tab.Pane className="tab-pane fade" eventKey="description">
                    <div className="section-padding faqs_elements">
                      <div className="container relative z-1">
                          <div className="row justify-content-center">
                            <div className="col-xl-9 col-lg-11">
                              <Tab.Container defaultActiveKey="general">
                                 <Nav className="nav nav-tabs style_3 wow fadeInUp">
                  {/* <Nav.Item className="nav-item">
                    <Nav.Link
                      href="#"
                      eventKey="general"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      General
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link
                      href="#"
                      eventKey="allcoach"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      All Coach
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link
                      href="#"
                      eventKey="advisors"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      Advisors
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link
                      href="#"
                      eventKey="tutorials"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      Tutorials
                    </Nav.Link>
                  </Nav.Item> */}
                </Nav>
                <Tab.Content className="tab-content wow fadeInDown">
                  <Tab.Pane className="tab-pane fade show" eventKey="general">
                    {accFun(1)}
                  </Tab.Pane>
                  <Tab.Pane className="tab-pane fade" eventKey="allcoach">
                    {accFun(2)}
                  </Tab.Pane>
                  <Tab.Pane className="tab-pane fade" eventKey="advisors">
                    {accFun(3)}
                  </Tab.Pane>
                  <Tab.Pane className="tab-pane fade" eventKey="tutorials">
                    {accFun(4)}
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
          {/* <img
            src="assets/images/elements/element_10.png"
            alt="element"
            className="element_1 zoom-fade"
          />
          <img
            src="assets/images/elements/element_35.png"
            alt="element"
            className="element_2 zoom-fade"
          />
          <img
            src="assets/images/elements/element_36.png"
            alt="element"
            className="element_3 rotate_elem"
          />
          <img
            src="assets/images/elements/element_37.png"
            alt="element"
            className="element_4 rotate_elem"
          />
          <img
            src="assets/images/elements/element_38.png"
            alt="element"
            className="element_5 rotate_elem"
          /> */}
        </div>
      </div>
                    
                       {/*<div className="desc_box">
                       <h2 className="title">
                          Motivate Yourself To Get More Done In Less Time
                        </h2>
                        <div className="author">
                          <img
                            src="assets/images/author/1.jpg"
                            alt="img"
                            className="image-fit"
                          />
                          <Link href="/courses">
                            <a className="thm-color-one">Wilbert A. Toney</a>
                          </Link>
                        </div>
                        <div className="detail_img mb-xl-30">
                          <img
                            src="assets/images/coach/detail_img.jpg"
                            alt="img"
                            className="image-fit"
                          />
                        </div>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium totam rem
                          aperiam eaque ipsa quae ab illo inventore veritatis et
                          quasi architecto beatae vitae dicta sunt explicabo.
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui rati voluptatem sequi nesciunt.
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam{" "}
                        </p>
                        <p>
                          But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the trutmaster-builder of human happiness. No one
                          rejects dislikes or avoids pleasure itself because
                        </p>
                      </div>*/}
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="curriculum">
                      <h5>About The Course</h5>
                      <p>
                      Time and work deals with the time taken by an individual or a group of individuals to complete a piece of work and the efficiency of the work done by each of them.{" "}
                      </p>
                      {/*<ul className="about_list style_2">
                        <li>Business Consulting</li>
                        <li>Career Development</li>
                        <li>Financial Solutions</li>
                      </ul>*/}
                      <hr></hr>
                      <h5>Description</h5>
                    <p align="justify">
                    Cognitive ability tests assess abilities involved in thinking (e.g., reasoning, perception, memory, verbal and mathematical ability, and problem solving). Such tests pose questions designed to estimate applicants' potential to use mental processes to solve work-related problems or to acquire new job knowledge.

Traditionally, the general trait measured by cognitive ability tests is called "intelligence" or "general mental ability." However, an intelligence test often includes various item types which measure different and more specific mental factors often referred to as "specific mental abilities." Examples of such items include arithmetic computations, verbal analogies, reading comprehension, number series completion, and spatial relations (i.e., visualizing objects in three-dimensional space).

Some cognitive ability tests sum up the correct answers to all of the items to obtain an overall score that represents a measure of general mental ability. If an individual score is computed for each of the specific types of abilities (e.g., numeric, verbal, reasoning), then the resulting scores represent measures of the specific mental abilities.

Traditional cognitive tests are well-standardized, contain items reliably scored, and can be administered to large groups of people at one time. Examples of item formats include multiple choice, sentence completion, short answer, or true-false. Many professionally developed cognitive tests are available commercially and may be considered when there is no significant need to develop a test that refers specifically to the particular job or organization.
                    </p>
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="reviews">
                    <div className="comment_form">
                      <div className="form-group">
                      <h5><b>Excerise - General Questions</b></h5>
                      <p>
                        1. A can do a work in 15 days and B in 20 days. If they work on it together for 4 days, then the fraction of the work that is left is_______
                      </p>
                      <RadioButton>
                       </RadioButton>
                      </div>
                      <div className="form-group">
                      <p>
                        2. A can lay railway track between two given stations in 16 days and B can do the same job in 12 days. With help of C, they did the job in 4 days only. Then, C alone can do the job in ____
                      </p>
                      <RadioButton>
                       </RadioButton>
                      </div>
                      <div className="form-group">
                      <p>
                        3. A can lay railway track between two given stations in 16 days and B can do the same job in 12 days. With help of C, they did the job in 4 days only. Then, C alone can do the job in ____
                      </p>
                      <RadioButton>
                       </RadioButton>
                      </div>
                      <div className="form-group">
                      <p>
                        4. A can lay railway track between two given stations in 16 days and B can do the same job in 12 days. With help of C, they did the job in 4 days only. Then, C alone can do the job in ____
                      </p>
                      <RadioButton>
                       </RadioButton>
                      </div>
                      <div className="form-group">
                      <p>
                        5. A can lay railway track between two given stations in 16 days and B can do the same job in 12 days. With help of C, they did the job in 4 days only. Then, C alone can do the job in ____
                      </p>
                      <RadioButton>
                       </RadioButton>
                      </div>
                      <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                     Submit
                    </a>
                    </div> 
                      {/* Post Comments Start 
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
                      </ul>*/}
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
                      <div className="right-side">$99</div>
                    </li>
                    <li>
                      <div className="left-side">
                        <i className="fal fa-user-circle" />
                        <h6 className="mb-0">Instructor</h6>
                      </div>
                      <div className="right-side">Warner</div>
                    </li>
                    <li>
                      <div className="left-side">
                        <i className="fal fa-clock" />
                        <h6 className="mb-0">Duration</h6>
                      </div>
                      <div className="right-side">360 Hours</div>
                    </li>
                    <li>
                      <div className="left-side">
                        <i className="fal fa-book" />
                        <h6 className="mb-0">Lectures</h6>
                      </div>
                      <div className="right-side">20 Lessons</div>
                    </li>
                    <li>
                      <div className="left-side">
                        <i className="fal fa-user-graduate" />
                        <h6 className="mb-0">Enrolled</h6>
                      </div>
                      <div className="right-side">963 Students</div>
                    </li>
                    <li>
                      <div className="left-side">
                        <i className="fal fa-flag-alt" />
                        <h6 className="mb-0">Language</h6>
                      </div>
                      <div className="right-side">English</div>
                    </li>
                    <li>
                      <div className="left-side">
                        <i className="fal fa-calendar-alt" />
                        <h6 className="mb-0">Deadline</h6>
                      </div>
                      <div className="right-side">06 March 2021</div>
                    </li>
                  </ul>
                  <hr />
                  <cite className="mb-xl-20">
                    Quis autem vel eum iurrepre hende quin ea voluptate velit
                    esse quanihily molestiae consequatur{" "}
                  </cite>
                  <Link href="/contact">
                    <a className="thm-btn bg-thm-color-three thm-color-three-shadow btn-rectangle">
                      Enroll Now <i className="fal fa-chevron-right ml-2" />
                    </a>
                  </Link>
                </div>
                {/* <div className="sidebar_widget recent_widgets wow fadeInUp">
                  <h5 className="widget_title">Popular Courses</h5>
                  <ul>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/coach/small_1.jpg"
                          alt="img"
                          className="image-fit"
                        />
                      </div>
                      <div className="text">
                        <h6 className="mb-0">
                          <Link href="/course-details">
                            How to Become a Life Coach Partner
                          </Link>
                        </h6>
                        <p className="mb-0">
                          <strong>By </strong>
                          <Link href="/courses">John Foerster</Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/coach/small_2.jpg"
                          alt="img"
                          className="image-fit"
                        />
                      </div>
                      <div className="text">
                        <h6 className="mb-0">
                          <Link href="/course-details">
                            How to Solve Health Problem
                          </Link>
                        </h6>
                        <p className="mb-0">
                          <strong>By </strong>
                          <Link href="/courses">David Sullivan</Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/coach/small_3.jpg"
                          alt="img"
                          className="image-fit"
                        />
                      </div>
                      <div className="text">
                        <h6 className="mb-0">
                          <Link href="/course-details">
                            Getting Started Expres And JavaScript
                          </Link>
                        </h6>
                        <p className="mb-0">
                          <strong>By </strong>
                          <Link href="/courses">Zachary Morin</Link>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>*/}
              </div> 
            </div>
          </div>
        </div>
      </section>
      {/* Details End */}
      {/* Plane Start */}
      {/* <div className="bg-thm-color-two plane_box relative z-1">
        <div className="container relative z-1">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11 relative z-1">
              <img
                src="assets/images/elements/element_6.png"
                className="element_1 rotate_elem"
                alt="Element"
              />
              <h2 className="thm-color-white">
                The Life Coach School Has The Most Amazing Tools And
                Cutting-Edge Training
              </h2>
            </div>
          </div>
          <img
            src="assets/images/elements/element_7.png"
            className="element_2 zoom-fade"
            alt="Element"
          />
        </div>
      </div> */}
      {/* Plane End */}
      {/* Portfolio Start */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title wow fadeInDown">
                <p className="subtitle">
                  <i className="fal fa-book" />
                  Related Courses
                </p>
                {/* <h3 className="title">We Provide Professional Life Coachs</h3> */}
              </div>
            </div>
          </div>
          <div className="row">
            {/* Coach block */}
            <div className="col-xl-4 col-md-6">
              <div className="coach_block wow fadeInUp" data-wow-delay=".10ms">
                <div className="coach_img">
                  <img
                    src="assets/images/coach/c7.webp"
                    alt="img"
                    className="image-fit"
                  />
                  <div className="coach_badges">
                    <span className="tag_badge bg-thm-color-four">Free</span>
                  </div>
                  <Link href="/course-details">
                    <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                      <i className="fal fa-chevron-right" />
                    </a>
                  </Link>
                </div>
                <div className="coach_caption">
                  <div className="coach_meta">
                    <Link href="/courses">
                      <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                        Aptitude
                      </a>
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
                    <Link href="/course-details">
                      Most Powerful Thing You Have Self Coaching Scholars
                    </Link>
                  </h5>
                  <div className="author">
                    <img
                      src="assets/images/author/1.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <Link href="/courses">
                      <a className="thm-color-one">Wilbert A. Toney</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Coach block */}
            {/* Coach block */}
            <div className="col-xl-4 col-md-6">
              <div
                className="coach_block wow fadeInDown"
                data-wow-delay=".20ms"
              >
                <div className="coach_img">
                  <img
                    src="assets/images/coach/c4.webp"
                    alt="img"
                    className="image-fit"
                  />
                  <div className="coach_badges">
                    <span className="tag_badge bg-thm-color-four">$50</span>
                  </div>
                  <Link href="/course-details">
                    <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                      <i className="fal fa-chevron-right" />
                    </a>
                  </Link>
                </div>
                <div className="coach_caption">
                  <div className="coach_meta">
                    <Link href="/courses">
                      <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                      Aptitude
                      </a>
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
                    <Link href="/course-details">
                      Coach Certification Programs Most Powerful Coach
                    </Link>
                  </h5>
                  <div className="author">
                    <img
                      src="assets/images/author/2.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <Link href="/courses">
                      <a className="thm-color-one">Emma H. Parish</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Coach block */}
            {/* Coach block */}
            <div className="col-xl-4 col-md-6">
              <div className="coach_block wow fadeInUp" data-wow-delay=".30ms">
                <div className="coach_img">
                  <img
                    src="assets/images/coach/c9.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <div className="coach_badges">
                    <span className="tag_badge bg-thm-color-four">Free</span>
                  </div>
                  <Link href="/course-details">
                    <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                      <i className="fal fa-chevron-right" />
                    </a>
                  </Link>
                </div>
                <div className="coach_caption">
                  <div className="coach_meta">
                    <Link href="/courses">
                      <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                      Aptitude
                      </a>
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
                    <Link href="/course-details">
                      Matter How Great Your Life Al Ready, We’ll Give Syatem
                    </Link>
                  </h5>
                  <div className="author">
                    <img
                      src="assets/images/author/3.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <Link href="/courses">
                      <a className="thm-color-one">Junior N. West</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Coach block */}
          </div>
        </div>
      </section>

      <FooterContact />
    </Layout>
  );
};

export default CourseDetails;
