import {createStore} from 'redux';
import reducer from './reducers'
// 仓库将要存放两种状态 一个是counter 一个todo
// 最终的状态数 counter｛number:0｝ todo{list:[]}
let store=createStore(reducer);
export default store
