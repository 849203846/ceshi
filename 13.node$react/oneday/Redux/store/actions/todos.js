import * as types from '../action-types'
export default {
    add_todo(text){
        return {type:types.ADD_TODO,text}
    },
    del_todo(index){
        return {type:types.DEL_TODO,index}
    }
}