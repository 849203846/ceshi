import React, {Component} from 'react'
import {createStore} from 'redux'

const ADD = 'ADD';
let reducer = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        default:
            return state
    }
};
let store = createStore(reducer);
console.log(store.getState());
store.dispatch({type:ADD});
console.log(store.getState());
