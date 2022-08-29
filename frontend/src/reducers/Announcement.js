import {
    FETCH_ANNOUNCEMENT,
    FETCH_ANNOUNCEMENT_BY_YEAR,
    CREATE_ANNOUNCEMENT,
    UPDATE_ANNOUNCEMENT,
    DELETE_ANNOUNCEMENT,
    START_LOADING,
    END_LOADING
} from '../constants/Announcement';

export default (state = { isLoading: true, announcement: [] }, action) => {
    switch (action.type) {
        case FETCH_ANNOUNCEMENT:
            return {
                ...state,
                announcement: action.payload,
            };
        case FETCH_ANNOUNCEMENT_BY_YEAR:
            return {
                ...state,
                announcement: action.payload,
            }
        case START_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case END_LOADING:
            return {
                ...state,
                isLoading: false,
            }
        case CREATE_ANNOUNCEMENT:
            return {
                ...state,
                announcement: [...state.announcement.announcements, action.payload]
            }
        case UPDATE_ANNOUNCEMENT:
            return {
                ...state,
                announcement: state.announcement.announcements.map((item) => (item?._id === action.payload.updatedAnnouncement?._id ? action.payload : item))
            }
        case DELETE_ANNOUNCEMENT:
            return {
                ...state,
                announcement: [state.announcement.announcements.filter((item) => item?._id !== action.payload.announcementId)]
            }
        default:
            return state;
    }
}