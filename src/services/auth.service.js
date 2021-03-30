import axios from 'axios';
import { endpoint } from '../api/index.js';
// const API_URL = 'http://localhost:8080/api/auth/';
const API_URL = endpoint.urlEndPoint + '/api/auth/';

export const alertConstants = {
  SUCCESS: 'ALERT_SUCCESS',
  ERROR: 'ALERT_ERROR',
  CLEAR: 'ALERT_CLEAR'
};

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + 'signin', {
        username,
        password
      })
      .then((response) => {
        if (response.data.accessToken) {
          sessionStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    sessionStorage.removeItem('user');
  }

  register(username, email, password) {
    return axios.post(API_URL + 'signup', {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(sessionStorage.getItem('user'));
  }
}

export default new AuthService();
