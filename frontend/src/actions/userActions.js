import Cookie from "js-cookie";
import { Server_url } from '../backend/config';
import jwtDecode from "jwt-decode";
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants";
const { default: Axios } = require("axios");



const update = (token, newPassword, confirmNewPassword) => async (
  dispatch
) => {
  dispatch({
    type: USER_UPDATE_REQUEST,
    payload: { token, newPassword, confirmNewPassword },
  });
  try {
    const { data } = await Axios.put(
      `${Server_url}/api/users/resetPassword` + token,
      {
        newPassword,
        confirmNewPassword
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: USER_UPDATE_FAIL, payload: e.message });
  }
};

const signin = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: { email, password },
  });
  try {
    const { data } = await Axios.post(
      `${Server_url}/api/users/login`,
      { email, password }
    );
    const token = data.token;
    const decodedData = jwtDecode(token);
    localStorage.setItem("profile", JSON.stringify(decodedData));
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.parse(JSON.stringify(data)));
  } catch (e) {
    // console.log(e.response.data.error);
    dispatch({ type: USER_SIGNIN_FAIL, payload: e.response.data.error });
  }
};


const register = (name, email, password, uniqueID, userType) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
    payload: { email, password },
  });
  try {
    const { data } = await Axios.post(
      `${Server_url}/api/users/register`,
      {
        name,
        email,
        password,
        uniqueID,
        userType
      }
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.parse(JSON.stringify(data)));
  } catch (e) {
    dispatch({ type: USER_REGISTER_FAIL, payload: e.message });
  }
};

const logout = () => (dispatch) => {
  Cookie.remove("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export { signin, register, logout, update };
