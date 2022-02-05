import api from "./api";
import TokenService from "./token.service";

const clientData = {
    API_URL: "/api-auth/",
    client_id: 'BiTAjRJaerspFO3nPeQL40PZavG7Lg5ayekkhcTp',
    client_secret: 'dwi1adiVM07fXObsZKjWHZz1Kex2qS20xq5nWEYEGd1DKGzxEc6XGyuZuG7vE1wN2DGN7ZhbFzos9vd5Q3SVUBRw9eOdAVorps4jMv4UFHyWlXBBhgF6YAKV5S5ripGM'
}


class AuthService {
  login(username, password) {
    return api
      .post(clientData.API_URL + "token/", {
        client_id: clientData.client_id,
        client_secret: clientData.client_secret,
        grant_type: "password",
        username,
        password
      })
      .then(response => {
        if (response.data.access_token) {
          TokenService.setUser(response.data);
        }

        return response.data;
      });
  }

  googleLogin(accessToken) {
    return api
      .post(clientData.API_URL + "convert-token/", {
        token: accessToken,
      backend: "google-oauth2",
      grant_type: "convert_token",
      client_id: 'qnbIEtAcf5WdDyo2IFflxDpXbBUecrJmOOEEksMO',
      client_secret: 'EpwC35tRzvk057H1oL8gcB3xuajTXFhqzaFP95zigWNZCWHMPilQity95DlwsLHU4qSlaoPrXOsSRAZgUnKGkQuNOvF1kVWJcst94CQa4WHmUxW99HLIkET1dwYq0KfQ'
      })
      .then(response => {
        if (response.data.access_token) {
          TokenService.setUser(response.data);
        }

        return response.data;
      });
  }

  logout() {
    TokenService.removeUser();
    // TokenService.removeCourseList();
  }

  register(username, email, password, first_name, last_name) {
    return api.post(clientData.API_URL + "create/", {
        email: email,
        first_name: first_name,
        last_name: last_name,
        username: username,
        password: password
    })
    .then(response => {
      if (response.data.access_token) {
        TokenService.setUser(response.data);
      }

      return response.data;
    });
  }
}

export default new AuthService();