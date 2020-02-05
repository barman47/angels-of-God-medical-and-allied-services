import { SET_PATIENT, SET_PATIENTS, PATIENT_UPDATED } from "../actions/types";

const initialState = {
    patient: {},
    patients: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PATIENT:
            return {
                ...state,
                patient: action.payload
            }; 

        case SET_PATIENTS:
            return {
                ...state,
                patients: action.payload
            };

        case PATIENT_UPDATED:
            return {
                ...state,
                patients: state.patients.map(patient => {
                    if (patient.id === action.payload.id) {
                        return patient;
                    }
                    return patient;
                })
            };

        default:
            return state;
    }
};