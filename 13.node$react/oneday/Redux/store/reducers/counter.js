
// 把一个大型的状态划分为若干个小状态 由各自的reducer维护
// import {INCREMENT} from "../action-types";
import * as types from "../action-types";

export default function (state={number:0}, action) {
    switch (action.type){
        // case INCREMENT:
        case types.INCREMENT:
            return {number:state.number+1};
        case types.DECREMENT:
            return {number:state.number-1};
        default:
            return state
    }
}