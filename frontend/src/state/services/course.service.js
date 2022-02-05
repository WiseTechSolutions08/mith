import api from "./api";
import TokenService from "./token.service";

const clientData = {
  API_URL: "/",
  client_id: 'BiTAjRJaerspFO3nPeQL40PZavG7Lg5ayekkhcTp',
  client_secret: 'dwi1adiVM07fXObsZKjWHZz1Kex2qS20xq5nWEYEGd1DKGzxEc6XGyuZuG7vE1wN2DGN7ZhbFzos9vd5Q3SVUBRw9eOdAVorps4jMv4UFHyWlXBBhgF6YAKV5S5ripGM'
}


class CourseService {
  courseList() {
    return api
      .get(clientData.API_URL + "courses/")
      .then(response => {
        if (response.data && response.data.length > 0) {
          TokenService.setCourseList(response.data);
        }

        return response.data;
      });
  }

  courseTopicsList(courseId) {
    return api
      .get(clientData.API_URL + "courses/topics/" + courseId)
      .then(response => {
        if (response.data && response.data.length > 0) {
          let courseData = TokenService.getCourseList();
          courseData.courseTopics = response.data;
          TokenService.setCourseList(courseData);
        }

        return response.data;
      });
  }

}

export default new CourseService();