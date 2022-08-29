import {
    FETCH_PROFILE,
    START_LOADING,
    END_LOADING
} from '../constants/Profile';

export default (state = { isLoading: true, profile: [] }, action) => {
    switch (action.type) {
        case FETCH_PROFILE:
            return {
                ...state,
                profile: action.payload,
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