import api from './api';

const API_URL = "/api-auth/";

class UserService {
  getCurrentUser() {
    return api.get('API_URL + "currenUser/"');
  }
}

export default new UserService();
