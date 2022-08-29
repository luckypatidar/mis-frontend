import * as api from '../backend/config';
import {
    FETCH_COURSES,
    FETCH_ALL_BASE_COURSES,
    CREATE_COURSES,
    FETCH_ALL_EXISTING_COURSES,
    COURSE_CREATION_FAILED,
    GET_ALL_EXISTED_STUDENT_TO_COURSE,
    UPDATE_COURSES,
    DELETE_COURSES,
    START_LOADING,
    END_LOADING
} from '../constants/Courses';


/// student side

export const fetchCourses = () => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchCourses();
        dispatch({ type: FETCH_COURSES, payload: data });
        console.log(data);
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
}


//// admin side

export const createNewCourse = (newCourse) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createCourse(newCourse);
        dispatch({ type: CREATE_COURSES, payload: data });
        // console.log(data);
        dispatch({ type: END_LOADING });
    } catch (error) {
        dispatch({ type: COURSE_CREATION_FAILED, payload: error.response.data.error });
    }
}

export const fetchAllExistedCourse = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchAllExistedCourses();
        dispatch({ type: FETCH_ALL_EXISTING_COURSES, payload: data });
        console.log(data);
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}

export const fetchCourseStudent = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchCourseStudent(id);
        dispatch({ type: GET_ALL_EXISTED_STUDENT_TO_COURSE, payload: data })
        console.log(data);
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}

export const assignCourseToStudent = (updatedCourse) => async (dispatch) => {
    try {
        console.log(updatedCourse);
        const { data } = await api.assignCourseStudent(updatedCourse);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export const fetchAllBaseCourses = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllBaseCourses();
        dispatch({ type: FETCH_ALL_BASE_COURSES, payload: data })
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
