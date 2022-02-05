import axios from 'axios';

export function facebookLogin(accessToken) {
  axios
    .post(`/api-auth/convert-token`, {
      token: accessToken,
      backend: "facebook",
      grant_type: "convert_token",
      client_id: "your client id",
      client_secret:"your client secret ",
    })
    .then((res) => {
     // Save somewhere these access and refresh tokens
      console.log(res.data);
    });
 }
 export function googleLogin(accessToken) {
  axios
    .post(`/api-auth/convert-token`, {
      token: accessToken,
      backend: "google-oauth2",
      grant_type: "convert_token",
      client_id: 'BiTAjRJaerspFO3nPeQL40PZavG7Lg5ayekkhcTp',
      client_secret: 'dwi1adiVM07fXObsZKjWHZz1Kex2qS20xq5nWEYEGd1DKGzxEc6XGyuZuG7vE1wN2DGN7ZhbFzos9vd5Q3SVUBRw9eOdAVorps4jMv4UFHyWlXBBhgF6YAKV5S5ripGM'
    })
    .then((res) => {
     // Save somewhere these access and refresh tokens
      console.log(res.data);
    });
 }