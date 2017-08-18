import * as types from "../action-types";

export default function (state = {list: []}, action) {
    switch (action.type){
        case types.ADD_TODO:
            return {list:[...state.list,action.text]}
        case types.DEL_TODO:
            return {list:state.list.filter((item,index)=>index!=action.index)}
        default:
            return state
    }
}