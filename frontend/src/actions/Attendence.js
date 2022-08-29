import * as api from '../backend/config';
import {
    ASSIGN_ATTENDENCE
} from '../constants/Attendence';

export const fetchCourses = () => async (dispatch) => {

    try {
        // dispatch({ type: START_LOADING });
        const { data } = await api.fetchCourses();
        dispatch({ type: ASSIGN_ATTENDENCE, payload: data });
        console.log(data);
        // dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
}
