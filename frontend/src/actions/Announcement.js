import * as api from '../backend/config';
import {
    FETCH_ANNOUNCEMENT,
    FETCH_ANNOUNCEMENT_BY_YEAR,
    CREATE_ANNOUNCEMENT,
    UPDATE_ANNOUNCEMENT,
    DELETE_ANNOUNCEMENT,
    START_LOADING,
    END_LOADING
} from '../constants/Announcement';


export const getAnnouncement = () => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchAnnouncement();
        dispatch({ type: FETCH_ANNOUNCEMENT, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
}

export const getAnnouncementByYear = (year) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchAnnouncementByYear(year);
        dispatch({ type: FETCH_ANNOUNCEMENT_BY_YEAR, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
}

export const createAnnouncement = (announcementData) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createAnnouncement(announcementData);
        // console.log(data);
        dispatch({ type: CREATE_ANNOUNCEMENT, payload: data });
        window.location.reload();
    } catch (error) {
        console.log(error);
        window.location.reload();

    }
}

export const updateAnnouncement = (updatedAnnoucement) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.updateAnnouncement(updatedAnnoucement);
        console.log(data);
        dispatch({ type: UPDATE_ANNOUNCEMENT, payload: data });
        window.location.reload();
    } catch (error) {
        console.log(error);
        window.location.reload();
    }
}

export const deleteAnnouncement = (data) => async (dispatch) => {
    try {
        // console.log(data);
        await api.removeAnnouncement(data);
        dispatch({ type: DELETE_ANNOUNCEMENT, payload: data })
        window.location.reload();
    } catch (error) {
        console.log(error);
        window.location.reload();
    }
}