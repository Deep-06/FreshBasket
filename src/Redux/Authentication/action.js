import axios from "axios"
import { LOGIN_SUCCESS, LOGOUT, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, USERS_SUCCESS } from "./actionTypes"



export const addUser = (user) => (dispatch)=>{

  dispatch({type:SIGNUP_REQUEST})
  axios.post(` http://localhost:8080/users`, user).then((res)=>{
    console.log(res.data)
    dispatch({type:SIGNUP_SUCCESS})
  }).catch((err)=>{
    dispatch({type:SIGNUP_FAILURE})
  })
}

export const loginUser =(email, password)=> (dispatch) =>{

  dispatch({type:SIGNUP_REQUEST})
  return axios.get(` http://localhost:8080/users?email=${email}&password=${password}`).then((res)=>{
    console.log(res.data)

    res.data.length>0 ? dispatch({type:LOGIN_SUCCESS, payload:res.data}):dispatch({type:SIGNUP_FAILURE})
  }).catch((err)=>{
    dispatch({type:SIGNUP_FAILURE})
  })
}


export const getUsers =(dispatch) =>{

  dispatch({type:SIGNUP_REQUEST})
  axios.get(` http://localhost:8080/users`).then((res)=>{
    //console.log(res.data)
    dispatch({type:USERS_SUCCESS, payload:res.data})
  }).catch((err)=>{
    dispatch({type:SIGNUP_FAILURE})
  })
}


export const logoutUser = (dispatch) => {
  localStorage.removeItem('isAuth'); // Remove from local storage
  localStorage.removeItem('logedUser'); // Remove from local storage
  dispatch({ type: LOGOUT }); // You can define a LOGOUT action type
};
