import { Link } from "react-router-dom";
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faVideo, faQuestion, faArrowRight, faArrowLeft, faWindowClose , faBars} from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";

class CourseSummary extends Component {

  constructor(props) {
    super(props);
    this.expandCard = this.expandCard.bind(this);
    this.collapseCard = this.collapseCard.bind(this);

    this.state = {
      courses: [],
      loading: true,
      coursePerPage: 3,
      isSelectedType: ''
    };
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

    return (
      <div>
        <div className="course-header">
          <span className="collapse-icon"><FontAwesomeIcon icon={faBars} /></span>
          <span className="close-icon"><FontAwesomeIcon icon={faWindowClose} /></span>
        </div>
        <div className="course-summary-container">
          <div className="course-summary-left-pane">
            <div className="course-summary-leftpane-close">
            <span className="close-icon"><FontAwesomeIcon icon={faWindowClose} /></span>
            </div>
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
                      <span className="curriculum-subtopic-icon"><FontAwesomeIcon icon={faVideo} /></span>
                      <span className="curriculum-subtopic-text">Topic gist</span>
                    </li>
                    <li className="curriculum-subtopic-odd">
                      <span className="curriculum-subtopic-icon"><FontAwesomeIcon icon={faArrowRight} /></span>
                      <span className="curriculum-subtopic-text">Description</span>
                    </li>
                    <li className="curriculum-subtopic-even">
                      <span className="curriculum-subtopic-icon"><FontAwesomeIcon icon={faQuestion} /></span>
                      <span className="curriculum-subtopic-text">Questions & Answers</span>
                    </li>
                  </ul>}
                </li>
              ))}
            </ul>
          </div>
          <div className="course-summary-main-pane">
            <div>
              <div className="course-summary-header">
                <span className="course-summary-header-text">Most Powerful Thing You Have Self Coaching Scholars</span>
                {/* <span className="course-summary-header-icon"><FontAwesomeIcon icon={faWindowClose} /></span> */}
              </div>
              <div className="course-summary-content">
                <div>
                  <div>
                    <h5>About</h5>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <h5> Description</h5>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <h5> Formulas</h5>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolsor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-summary-footer">
              <div>
                <span className="prev"><FontAwesomeIcon icon={faArrowLeft} />Prev</span>
                <span className="next"><FontAwesomeIcon icon={faArrowRight} />Next</span>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps)(CourseSummary);
