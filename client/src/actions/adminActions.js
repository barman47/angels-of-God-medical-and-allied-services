import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { CLEAR_ERRORS, GET_ERRORS, SET_ADMIN, SET_PROFILE } from './types';
import M from 'materialize-css';
import setAuthToken from '../utils/setAuthToken';

export const loginAdmin = (admin, history) => (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
        payload: {}
    });
    axios.post('/api/admin/login', admin)
        .then(res => {
            M.toast({
                html: 'Logged in successfuly',
                classes: 'toast-valid'
            });

            // Save token to local storage
            const { token } = res.data;

            // Set token to local storage

            localStorage.setItem('adminToken', token);

            // Set token to auth header
            setAuthToken(token);

            // Decode toke to get admin data
            const decoded = jwt_decode(token);

            // Set current admin
            dispatch(setCurrentAdmin(decoded));
            history.push('/admin/students');

        })
        .catch(err => {
            try {
                switch (err.response.status) {
                    case 500:
                        const error = {
                            message: 'Please check your internet connection',
                            status: 500
                        };
                        dispatch({
                            type: GET_ERRORS,
                            payload: error
                        });
                        break;

                    default:
                        dispatch({
                            type: GET_ERRORS,
                            payload: err.response.data
                        });
                        break;
                }
            } catch (error) {
                console.log(error);
            }
        });
};

export const updateAdminData = (userData) => (dispatch) => {
    axios.put('/api/admin/updateData', userData)
        .then(res => {
            if (localStorage.jwtToken) {
                localStorage.removeItem('jwtToken');

                const userData = res.data;
                const token = userData.token;
                delete userData.token;
                
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentAdmin(decoded));
            }
            dispatch({
                type: GET_ERRORS,
                payload: {}
            });
            M.toast({
                html: 'Admin Updated',
                classes: 'toast-valid'
            });
        })
        .catch(err => {
            try {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            } catch (err) {
                dispatch({
                    type: GET_ERRORS
                });
                M.toast({
                    html: 'Error! Please retry.',
                    classes: 'toast-invalid'
                });
            }
        });
};

export const getStudentProfile = (id) => (dispatch) => {
    axios.get(`/api/admin/studentProfile/${id}`)
        .then(res => {
            dispatch({
                type: SET_PROFILE,
                payload: res.data
            });
        })
        .catch(err => {
            if (err.response.status === 404) {
                dispatch({
                    type: SET_PROFILE,
                    payload: {}
                });
            } else {
                console.error(err);
            }
        });
};

export const changePassword = (data) => (dispatch) => {
    axios.put('/api/admin/changePassword', data)
        .then(res => {
            dispatch({
                type: GET_ERRORS,
                payload: {}
            });
            M.toast({
                html: 'Password changed Successfully',
                classes: 'toast-valid'
            });
        })
        .catch(err => {
            try {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            } catch (err) {
                dispatch({
                    type: GET_ERRORS,
                    payload: {}
                });
                M.toast({
                    html: 'Error! Please retry.',
                    classes: 'toast-invalid'
                });
            }
        });
};

export const setCurrentAdmin = (decoded) => {
    return {
        type: SET_ADMIN,
        payload: decoded
    };
}

export const logoutAdmin = () => (dispatch) => {
    localStorage.removeItem('adminToken');
    setAuthToken(false);
    dispatch(setCurrentAdmin(null));
    M.toast({
        html: 'Admin logged out Successfully',
        classes: 'toast-valid'
    });
};