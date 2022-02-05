import {
    SET_COURSES_LIST,
    SET_COURSETOPICS_LIST,
    SET_CURRENT_COURSE,
    CLEAR_COURSES_LIST,
    CLEAR_CURRENT_COURSE,
    CLEAR_COURSETOPICS_LIST
} from "./types";

import CourseService from "../services/course.service";

export const courseList = (username, password) => (dispatch) => {
    return CourseService.courseList(username, password).then(
        (data) => {
            dispatch({
                type: SET_COURSES_LIST,
                payload: { courses: data },
            });

            let message = '';
            if (data && data.length > 0) {
                message = 'Courses listed successfully'
            } 

            // dispatch({
            //     type: SET_MESSAGE,
            //     payload: message,
            // });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.error_description) ||
                error.message ||
                error.toString();

            dispatch({
                type: CLEAR_COURSES_LIST,
            });

            // dispatch({
            //     type: SET_MESSAGE,
            //     payload: message,
            // });

            return Promise.reject();
        }
    );
};

export const courseTopicsList = (courseId) => (dispatch) => {
    return CourseService.courseTopicsList(courseId).then(
        (data) => {
            dispatch({
                type: SET_COURSETOPICS_LIST,
                payload: { courseTopics: data },
            });

            let message = '';
            if (data && data.length > 0) {
                message = 'Course topics listed successfully'
            } 

            // dispatch({
            //     type: SET_MESSAGE,
            //     payload: message,
            // });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.error_description) ||
                error.message ||
                error.toString();

            dispatch({
                type: CLEAR_COURSETOPICS_LIST,
            });

            // dispatch({
            //     type: SET_MESSAGE,
            //     payload: message,
            // });

            return Promise.reject();
        }
    );
};
