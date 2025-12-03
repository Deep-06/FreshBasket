import axios from "axios"
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_SUCCESS, LOGOUT, USERS_SUCCESS } from "./actionTypes";
import { fetchCart } from "../Cart/action";

//const API_BASE = "http://localhost:8080";
const API_BASE = "https://mock-api-freshbasket.onrender.com";


export const addUser = (user) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  return axios.post(`${API_BASE}/users`, user)
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
      return res.data;
    })
    .catch((err) => {
      dispatch({ type: SIGNUP_FAILURE, payload: err.message });
      throw err;
    });
};

export const loginUser = (email, password) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  return axios.get(`${API_BASE}/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`)
    .then((res) => {
      if (res.data && res.data.length > 0) {
        const user = res.data[0];
        dispatch({ type: LOGIN_SUCCESS, payload: user });
        dispatch(fetchCart(user.id)); // Fetch user's cart
        return user;
      } else {
        dispatch({ type: SIGNUP_FAILURE, payload: "Invalid credentials" });
        return null;
      }
    })
    .catch((err) => {
      dispatch({ type: SIGNUP_FAILURE, payload: err.message });
      throw err;
    });
};


export const getUsers = () => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  return axios.get(`${API_BASE}/users`)
    .then((res) => {
      dispatch({ type: USERS_SUCCESS, payload: res.data });
      return res.data;
    })
    .catch((err) => {
      dispatch({ type: SIGNUP_FAILURE, payload: err.message });
      throw err;
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};