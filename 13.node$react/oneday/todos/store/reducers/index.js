import todos from './todos'
import filter from './filter'
import {combineReducers} from 'redux'

let reducers=combineReducers({
    todos,
    filter

})
export default reducers