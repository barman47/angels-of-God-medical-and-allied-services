import { SET_CURRENT_USER, SET_STUDENT, SET_STUDENTS, STUDENT_UPDATED } from "../actions/types";
import isEmpty from "../validation/is-empty";

const initialState = {
    authenticated: false,
    student: null,
    students: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                authenticated: !isEmpty(action.payload),
                student: action.payload
            };

        case SET_STUDENTS:
            return {
                ...state,
                students: action.payload
            };

        case SET_STUDENT:
            return {
                ...state,
                student: action.payload
            };

        case STUDENT_UPDATED:
            return {
                ...state,
                students: state.students.map(student => {
                    if (student.id === action.payload.id) {
                        return student;
                    }
                    return student;
                })
            };
        default:
            return state;
    }
};