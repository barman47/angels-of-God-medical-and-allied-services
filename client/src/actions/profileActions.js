import { SET_PROFILE, GET_ERRORS } from './types';
import axios from 'axios';


export const getStudentProfile = (id) => (dispatch) => {
    axios.get(`/api/profiles/${id}`)
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

export const setStudentProfile = (profile, studentId) => (dispatch) => {
    axios.post(`/api/profiles/${studentId}`, profile)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};