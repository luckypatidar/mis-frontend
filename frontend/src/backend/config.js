
import axios from 'axios';
import Cookie from "js-cookie";

export const Server_url = "https://peaceful-shelf-69029.herokuapp.com";

const API = axios.create({ baseURL: 'https://peaceful-shelf-69029.herokuapp.com' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(Cookie.get("userInfo")).token}`;
    }
    return req;
});
//// announcement 
export const fetchAnnouncement = () => API.get('/api/announcement');
export const fetchAnnouncementByYear = (year) => API.get(`api/announcement/${year}`);
export const createAnnouncement = (announcementData) => API.post('/api/announcement', announcementData);
export const updateAnnouncement = (updatedAnnouncement) => API.put('/api/announcement', updatedAnnouncement);
export const removeAnnouncement = async (data) => {
    await API({
        method: 'DELETE',
        url: 'https://peaceful-shelf-69029.herokuapp.com/api/announcement',
        data: {
            announcementId: data.announcementId
        }
    })
}


/// courses admin 

export const createCourse = (newCourse) => API.post('/api/admin/create/course', newCourse);
export const fetchAllBaseCourses = () => API.get('/api/admin/get/allbasecourses');
export const fetchAllExistedCourses = () => API.get('/api/admin/get/allcourses');
export const assignCourseStudent = (data) => API.put('/api/admin/assign/course/students', data);
export const fetchCourseStudent = (id) => API.get(`api/admin/course/${id}`);


/// courses student


export const fetchCourses = () => API.get('/api/student/courses');



//// profile

export const fetchProfile = (pattern) => API.get(`/api/users/get/students/${pattern}`);


