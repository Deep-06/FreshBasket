import { LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, USERS_SUCCESS, LOGOUT } from "./actionTypes"

const savedUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("currentUser") || "null") : null;

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: !!savedUser,
  user: savedUser,
  users: []
};


export const reducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case SIGNUP_REQUEST:
      return { ...state, isLoading: true, isError: false };
    
    case SIGNUP_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    
    case SIGNUP_FAILURE:
      return { ...state, isLoading: false, isError: true, isAuth: false };
    
    case LOGIN_SUCCESS:
      localStorage.setItem("currentUser", JSON.stringify(payload));
      return { ...state, isLoading: false, isAuth: true, user: payload, isError: false };
    
    case LOGOUT:
      localStorage.removeItem("currentUser");
      return { ...state, isAuth: false, user: null, isError: false };
    
    case USERS_SUCCESS:
      return { ...state, isLoading: false, users: payload };
    
    default: 
      return state;
  }
}