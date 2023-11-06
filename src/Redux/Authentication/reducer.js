import { LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, USERS_SUCCESS } from "./actionTypes"


const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  logedUser: [],
  users: []
}


export const reducer = (state = initialState, {type, payload}) =>{

  switch(type){
    case SIGNUP_REQUEST:
      return {...state, isLoading: true}
    case SIGNUP_FAILURE:
      return {...state, isLoading:false, isError:true, isAuth:false}
    case SIGNUP_SUCCESS:
      return {...state, isLoading:false}
    case LOGIN_SUCCESS:
      localStorage.setItem('isAuth', payload.length > 0 ? true : false); // Store in local storage
      localStorage.setItem('logedUser', JSON.stringify(payload)); // Store in local storage
      return { ...state, isLoading: false, isAuth: payload.length > 0, logedUser: payload };
    case USERS_SUCCESS:
      return {...state, isLoading:false, users: payload}
    default: 
    return state
  }
}