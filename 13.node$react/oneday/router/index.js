import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import model from './local'
ReactDOM.render(<App
model={model}
/>,document.querySelector('#root'));
