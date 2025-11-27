import { ADD_TO_CART, INCREMENT_QTY, DECREMENT_QTY, REMOVE_FROM_CART, CLEAR_CART } from "./actionTypes";

const savedCart = JSON.parse(localStorage.getItem("cart") || "null");

const initialState = {
  cart: savedCart || []
};

const save = (cart) => localStorage.setItem("cart", JSON.stringify(cart));

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      const existing = state.cart.find((i) => i.id === payload.id);
      let newCart;
      if (existing) {
        newCart = state.cart.map((i) =>
          i.id === payload.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        );
      } else {
        newCart = [...state.cart, { ...payload, quantity: 1 }];
      }
      save(newCart);
      return { ...state, cart: newCart };
    }

    case INCREMENT_QTY: {
      const newCart = state.cart.map((i) =>
        i.id === payload ? { ...i, quantity: (i.quantity || 1) + 1 } : i
      );
      save(newCart);
      return { ...state, cart: newCart };
    }

    case DECREMENT_QTY: {
      const newCart = state.cart
        .map((i) =>
          i.id === payload ? { ...i, quantity: Math.max(1, (i.quantity || 1) - 1) } : i
        );
      save(newCart);
      return { ...state, cart: newCart };
    }

    case REMOVE_FROM_CART: {
      const newCart = state.cart.filter((i) => i.id !== payload);
      save(newCart);
      return { ...state, cart: newCart };
    }

    case CLEAR_CART: {
      const newCart = [];
      save(newCart);
      return { ...state, cart: newCart };
    }

    default:
      return state;
  }
};