class TokenService {
  getLocalRefreshToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.refreshToken;
  }

  getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.accessToken;
  }

  updateLocalAccessToken(token) {
    let user = JSON.parse(localStorage.getItem("user"));
    user.accessToken = token;
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  setUser(user) {
    console.log(JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
  }

  removeUser() {
    localStorage.removeItem("user");
  }

  getCourseList() {
    return JSON.parse(localStorage.getItem("courses"));
  }

  setCourseList(courses) {
    console.log(JSON.stringify(courses));
    localStorage.setItem("courses", JSON.stringify(courses));
  }

  removeCourseList() {
    localStorage.removeItem("courses");
  }

  // getCurrentCourse() {
  //   return JSON.parse(localStorage.getItem("courses"));
  // }

  // setCourseTopics(courses) {
  //   console.log(JSON.stringify(courses));
  //   localStorage.setItem("courses", JSON.stringify(courses));
  // }

  // removeCurrentCourse() {
  //   localStorage.removeItem("courses");
  // }
}

export default new TokenService();