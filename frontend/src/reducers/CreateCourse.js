import {
    CREATE_COURSES,
    FETCH_ALL_EXISTING_COURSES,
    START_LOADING,
    END_LOADING,
    COURSE_CREATION_FAILED,
    GET_ALL_EXISTED_STUDENT_TO_COURSE,
} from '../constants/Courses';

export default (state = { isLoading: true, newCourse: [], enrolledStudent: [], error: '' }, action) => {
    switch (action.type) {
        case CREATE_COURSES:
            return {
                ...state,
                newCourse: action.payload,
            }
        case FETCH_ALL_EXISTING_COURSES:
            return {
                ...state,
                newCourse: action.payload,
            }
        case GET_ALL_EXISTED_STUDENT_TO_COURSE:
            return {
                ...state,
                enrolledStudent: action.payload,
            }
        case START_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case END_LOADING:
            return {
                ...state,
                isLoading: false,
            }
        case COURSE_CREATION_FAILED:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}