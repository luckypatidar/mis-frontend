import {
    FETCH_COURSES,
    FETCH_ALL_BASE_COURSES,
    START_LOADING,
    END_LOADING,
} from '../constants/Courses';

export default (state = { isLoading: true, courses: [] }, action) => {
    switch (action.type) {
        case FETCH_COURSES:
            return {
                ...state,
                courses: action.payload,
            }
        case FETCH_ALL_BASE_COURSES:
            return {
                ...state,
                courses: action.payload,
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
        default:
            return state;
    }
}