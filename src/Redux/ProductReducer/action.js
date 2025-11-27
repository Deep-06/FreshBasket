import axios from "axios";
import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS, SINGLE_PRODUCT_FAILURE, SINGLE_PRODUCT_REQUEST, SINGLE_PRODUCT_SUCCESS } from "./actionTypes"


export const getProducts = (paramObj) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST });
    axios
        .get('https://mock-api-freshbasket.onrender.com/products', paramObj)
        .then((res) => {
            dispatch({ type: PRODUCT_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            dispatch({ type: PRODUCT_FAILURE })
        })
}


export const getProductById = (id) => (dispatch) => {
    dispatch({ type: SINGLE_PRODUCT_REQUEST });
    axios
        .get(`https://mock-api-freshbasket.onrender.com/products/${id}`)
        .then((res) => {
            dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: SINGLE_PRODUCT_FAILURE, error: err });
        });
}