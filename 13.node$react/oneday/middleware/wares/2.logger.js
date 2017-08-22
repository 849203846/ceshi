import React, {Component} from 'react'
import {createStore,applyMiddleware} from 'redux'
// applyMiddleware 应用中间件
import logger from 'redux-logger'
// 用来在动作派发前后写日志的
import promise from 'redux-promise'
import thunk from 'redux-thunk'
const ADD = 'ADD';
let reducer = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        default:
            return state
    }
};

/**
 * *
 * 第一种方法
 * @type {Store<any>}
 */

// let store=applyMiddleware(logger)(createStore)(reducer);
// let store = createStore(reducer);
/**
 * 第二种写法
 */
let store=createStore(reducer,applyMiddleware(logger));
store.dispatch({type:ADD});

/**
 * 状态数的初始值
 */
// let inistate=0;// state 状态数的初始值
// let store=createStore(reducer,inistate,applyMiddleware(logger));
// store.dispatch({type:ADD});
