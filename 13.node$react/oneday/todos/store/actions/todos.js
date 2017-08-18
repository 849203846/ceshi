import * as types from '../reducers/action-type'
export default {
    addTodo(text){
        return {type:types.ADD_TODO,text}
    },
    toggleTodo(id){
        return {type:types.TOGGLE_TODO,id}
    },
    toggleAll(checked){
        return {type:types.TOGGLE_ALL,checked}
    },
    delTodo(id){
        return{
            type:types.DEL_TODO,
            id
        }
    },
    delAllCompleted(){
        return {type:types.DEL_ALL_COMPLETED}
    },

}
