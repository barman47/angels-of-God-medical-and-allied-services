import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import studentReducer from './studentReducer';
import profileReducer from './profileReducer';
import adminReducer from './adminReducer';
import patientReducer from './patientReducer';

export default combineReducers({
    admin: adminReducer,
    student: studentReducer,
    patients: patientReducer,
    errors: errorsReducer,
    profile: profileReducer
});