import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS, SINGLE_PRODUCT_FAILURE, SINGLE_PRODUCT_REQUEST, SINGLE_PRODUCT_SUCCESS } from './actionTypes'

const initialState={
  isLoading: false,
  isError: false,
  products: [],
  singleProduct: null,
}

export const reducer = (state=initialState,{type,payload}) => {
  switch(type){
    case PRODUCT_REQUEST:
      return {...state, isLoading:true }
    case PRODUCT_SUCCESS:
      return {...state, isLoading:false, isError:false, products:payload}
    case PRODUCT_FAILURE:
      return {...state,isError:true,isLoading:false}
    case SINGLE_PRODUCT_REQUEST:
      return {...state, isLoading:true }
    case SINGLE_PRODUCT_SUCCESS:
      return {...state, isLoading:false, isError:false, singleProduct: payload}
    case SINGLE_PRODUCT_FAILURE:
      return {...state,isError:true,isLoading:false}
      default:
        return state;
  }
}
