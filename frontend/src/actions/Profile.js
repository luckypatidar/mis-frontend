import * as api from '../backend/config';
import {
    FETCH_PROFILE,
    FETCH_COURSES_BY_YEAR,
    CREATE_COURSES,
    UPDATE_COURSES,
    DELETE_COURSES,
    START_LOADING,
    END_LOADING
} from '../constants/Profile';

export const fetchProfile = (pattern) => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchProfile(pattern);
        dispatch({ type: FETCH_PROFILE, payload: data });
        console.log(data);
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
}