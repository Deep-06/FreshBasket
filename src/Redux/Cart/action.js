import axios from "axios"
import { FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_CART_FAILURE, UPDATE_CART_REQUEST, UPDATE_CART_SUCCESS, UPDATE_CART_FAILURE } from "./actionTypes";

//const API_BASE = "http://localhost:8080";
const API_BASE = "https://mock-api-freshbasket.onrender.com";


// Fetch user's cart
export const fetchCart = (userId) => async (dispatch) => {
  dispatch({ type: FETCH_CART_REQUEST });
  try {
    const res = await axios.get(`${API_BASE}/users/${userId}`);
    const user = res.data;
    dispatch({ type: FETCH_CART_SUCCESS, payload: user.orders || [] });
  } catch (err) {
    dispatch({ type: FETCH_CART_FAILURE, payload: err.message || "Failed to fetch cart" });
  }
};

// Add item to cart 
export const addToCart = (userId, product) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_REQUEST });
  try {
    const res = await axios.get(`${API_BASE}/users/${userId}`);
    const user = res.data;
    const orders = user.orders || [];

    // Check if product already exists
    const idx = orders.findIndex(i => i.id === product.id);
    if (idx > -1) {
      orders[idx].quantity = (orders[idx].quantity || 1) + 1;
    } else {
      orders.push({ ...product, quantity: 1 });
    }

    await axios.patch(`${API_BASE}/users/${userId}`, { orders });
    dispatch({ type: UPDATE_CART_SUCCESS, payload: orders });
  } catch (err) {
    dispatch({ type: UPDATE_CART_FAILURE, payload: err.message });
  }
};

// Update item quantity
export const updateCartItem = (userId, productId, quantity) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_REQUEST });
  try {
    const res = await axios.get(`${API_BASE}/users/${userId}`);
    const user = res.data;
    const orders = user.orders || [];

    orders.forEach(item => {
      if (item.id === productId) item.quantity = quantity;
    });
    orders = orders.filter(i => i.quantity > 0);

    await axios.patch(`${API_BASE}/users/${userId}`, { orders });
    dispatch({ type: UPDATE_CART_SUCCESS, payload: orders });
  } catch (err) {
    dispatch({ type: UPDATE_CART_FAILURE, payload: err.message });
  }
};

// Remove item from cart
export const removeFromCart = (userId, productId) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_REQUEST });
  try {
    const res = await axios.get(`${API_BASE}/users/${userId}`);
    const user = res.data;
    const orders = (user.orders || []).filter(i => i.id !== productId);

    await axios.patch(`${API_BASE}/users/${userId}`, { orders });
    dispatch({ type: UPDATE_CART_SUCCESS, payload: orders });
  } catch (err) {
    dispatch({ type: UPDATE_CART_FAILURE, payload: err.message });
  }
};

// Clear entire cart
export const clearCart = (userId) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_REQUEST });
  try {
    await axios.patch(`${API_BASE}/users/${userId}`, { orders: [] });
    dispatch({ type: UPDATE_CART_SUCCESS, payload: [] });
  } catch (err) {
    dispatch({ type: UPDATE_CART_FAILURE, payload: err.message });
  }
};

// export const addTocart= (id)=>(dispatch)=>{
//     axios.get(`https://mock-api-freshbasket.onrender.com/products/${id}`)

// .then((res)=>{
//     console.log(res.data)
//     dispatch({type:ADD_TO_CART,payload:res.data})
// }).catch((error) => {
//         console.error('Error adding product to cart:', error);
// })
// }