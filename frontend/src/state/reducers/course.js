import {
  SET_COURSES_LIST,
  SET_CURRENT_COURSE,
  CLEAR_COURSES_LIST,
  CLEAR_CURRENT_COURSE,
  SET_COURSETOPICS_LIST,
  CLEAR_COURSETOPICS_LIST
} from "../actions/types";

const courses = JSON.parse(localStorage.getItem("courses"));

const initialState = courses
  ? { courses, currentCourse: null, courseTopics:[] }
  : { courses: [], currentCourse: null , courseTopics:[]};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_COURSES_LIST:
      return {
        ...state,
        courses: payload.courses,
      };
    case CLEAR_COURSES_LIST:
      return {
        ...state,
        courses: [],
      };
    case SET_CURRENT_COURSE:
      return {
        ...state,
        currentCourse: payload.course.id,
      };

    case CLEAR_CURRENT_COURSE:
      return {
        ...state,
        currentCourse: null,
      };
    case SET_COURSETOPICS_LIST:
      return {
        ...state,
        courseTopics: payload.courseTopics,
      };

    case CLEAR_COURSETOPICS_LIST:
      return {
        ...state,
        courseTopics: [],
      };
    default:
      return state;
  }
}