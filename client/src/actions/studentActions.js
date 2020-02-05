import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { CLEAR_ERRORS, GET_ERRORS, SET_CURRENT_USER, SET_STUDENT, SET_STUDENTS, STUDENT_UPDATED } from './types';
import M from 'materialize-css';
import setAuthToken from '../utils/setAuthToken';

export const loginStudent = (student, history) => (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
        payload: {}
    });
    axios.post('/api/students/login', student)
        .then(res => {
            M.toast({
                html: 'Logged in successfuly',
                classes: 'toast-valid'
            });

            // Save token to local storage
            const { token } = res.data;

            // Set token to local storage

            localStorage.setItem('studentToken', token);

            // Set token to auth header
            setAuthToken(token);

            // Decode toke to get student data
            const decoded = jwt_decode(token);

            // Set current student
            dispatch(setCurrentUser(decoded));
            history.push(`/admissions/students/${decoded.id}`);

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

export const registerStudent = (student, history) => (dispatch) => {
    axios.post('/api/students/register', student)
        .then((res) => {
            dispatch({
                type: CLEAR_ERRORS,
                payload: {}
            });

            M.toast({
                html: 'Account created successfuly',
                classes: 'toast-valid'
            });

            // Save token to local storage
            const { token } = res.data;

            // Set token to local storage

            localStorage.setItem('studentToken', token);

            // Set token to auth header
            setAuthToken(token);

            // Decode toke to get student data
            const decoded = jwt_decode(token);

            // Set current student
            dispatch(setCurrentUser(decoded));
            history.push(`/admissions/students/${decoded.id}`);
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
            } catch (err) {
                dispatch({
                    type: GET_ERRORS,
                    payload: {}
                });
                M.toast({
                    html: 'Error! Please retry.',
                    classes: 'toast-invalid'
                })
            }
        });
};

export const getStudents = () => (dispatch) => {
    axios.get('/api/students/all')
        .then(res => dispatch({
            type: SET_STUDENTS,
            payload: res.data
        }))
        .catch(err => console.log(err));
};

export const togglePayment = (id) => (dispatch) => {
    axios.put(`/api/students/togglePayment/${id}`)
        .then(res =>  {
            M.toast({
                html: 'Updated Payment',
                classes: 'toast-valid'
            });
                dispatch({
                type: STUDENT_UPDATED,
                payload: res.data
            });
        })      
        .catch(err => console.error(err));
}

export const viewStudent = (student, history) => (dispatch) => {
    dispatch({
        type: SET_STUDENT,
        payload: student
    });
    history.push(`/admin/students/${student.id}`);
}

export const updateStudentData = (userData) => (dispatch) => {
    axios.put('/api/students/updateData', userData)
        .then(res => {
            if (localStorage.jwtToken) {
                localStorage.removeItem('jwtToken');

                const userData = res.data;
                const token = userData.token;
                delete userData.token;
                
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
            }
            dispatch({
                type: GET_ERRORS,
                payload: {}
            });
            M.toast({
                html: 'User Updated',
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

export const changePassword = (data) => (dispatch) => {
    axios.put('/api/students/changePassword', data)
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
// Set logged in student
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
}

export const logoutStudent = () => (dispatch) => {
    localStorage.removeItem('studentToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};
