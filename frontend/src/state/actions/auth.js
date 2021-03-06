import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    REFRESH_TOKEN
} from "./types";

import AuthService from "../services/auth.service";

export const register = (username, email, password, first_name, last_name) => (dispatch) => {
    return AuthService.register(username, email, password, first_name, last_name).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });
            let message ='';
            if (response.access_token) {
                message = 'User registered successfully'
            }
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            let message = '';
            if (data.access_token) {
                message = 'User signed in successfully'
            } 

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

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
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const googleLogin = (accessToken) => (dispatch) => {
    return AuthService.googleLogin(accessToken).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            let message = '';
            if (data.access_token) {
                message = 'User signed in successfully'
            } 

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

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
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};

export const refreshToken = (accessToken) => (dispatch) => {
    dispatch({
      type: REFRESH_TOKEN,
      payload: accessToken,
    })
  }
  