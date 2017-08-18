import React from 'react'
import ReactDOM from 'react-dom'
import Todos from "./components/Todos";
import 'bootstrap/dist/css/bootstrap.css'
import {Provider} from 'react-redux'
import store from './store'
// 通过provider向下层组件传递给store
// 1.增加一个 action type 操作类型
// 在todos的reducer增加一个case
// 在actions 增肌一个actioncreatar
// 在组件中发射action
ReactDOM.render(
    <Provider
    store={store}
    >
        <Todos/>
    </Provider>,document.querySelector('#root'));