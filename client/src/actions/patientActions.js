import { GET_ERRORS, PATIENT_UPDATED, SET_PATIENTS, SET_PATIENT } from './types';
import M from 'materialize-css';
import axios from 'axios';

export const booking = (data, history) => (dispatch) => {
    axios.post('/api/patients/book', data)
        .then(res => {
            M.toast({
                html: res.data.msg,
                classes: 'toast-valid',
                completeCallback: () => {
                    dispatch({
                        type: GET_ERRORS,
                        payload: {}
                    });
                    history.push('/');
                }
            });
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
}

export const getPatients = () => (dispatch) => {
    axios.get('/api/patients/all')
        .then(res => {
            dispatch({
                type: SET_PATIENTS,
                payload: res.data
            })
        })
        .catch(err => {
            if (err.response.status === 404) {
                dispatch({
                    type: SET_PATIENTS,
                    payload: []
                });
            } else {
                M.toast({ html: 'Error fetching bookings', classes: 'toast-invalid' });
            }
        });
}

export const toggleHasVisited = (id) => (dispatch) => {
    axios.put(`/api/patients/toggleHasVisited/${id}`)
        .then(res =>  {
            M.toast({
                html: 'Booking Updated',
                classes: 'toast-valid'
            });
                dispatch({
                type: PATIENT_UPDATED,
                payload: res.data
            });
        })      
        .catch(err => console.error(err));
}

export const viewPatient = (patient, history) => (dispatch) => {
    dispatch({
        type: SET_PATIENT,
        payload: patient
    });
    history.push(`/admin/patients/${patient._id}`);
}