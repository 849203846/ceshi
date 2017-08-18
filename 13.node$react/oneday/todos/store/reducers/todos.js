import * as types from './action-type'
export default function (state = {list: []}, action) {
    switch (action.type){
        case types.ADD_TODO:
            return {list:[...state.list,{id:Date.now(),text:action.text,completed:false}]};
        case types.TOGGLE_TODO:
            return {list:state.list.map((item,index)=>{
                return {...item,completed:item.id==action.id?!item.completed:item.completed}
                }
            )};
        case types.TOGGLE_ALL:
            return {list:state.list.map((item,index)=>{
            return {...item,completed:action.checked}
            })};
        case types.DEL_TODO:
            return {
                list:state.list.filter((item,index)=>item.id!=action.id)
            };
        case types.DEL_ALL_COMPLETED:
            return {
                list:state.list.filter((item,index)=>!item.completed)
            }
        default:
            return state
    }
}