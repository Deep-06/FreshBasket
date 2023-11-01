import { YET_TO_COME } from "./actionType";


const initialState={};

export const reducer=(state=initialState,{type,payload})=>{

    switch(type){
case YET_TO_COME:{
    return {...state,payload}
}
        default:return state;
    }

}