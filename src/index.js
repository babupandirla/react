import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import './index.css';
import 'tachyons';
import App from './components/App.js';
import * as serviceWorker from './serviceWorker';
import { combineReducers } from 'redux';
import Login from './components/Login.js';
//import Testmap from './Test.js';
//const list1=[1,3,5,7,4,8];


// const rootReducer=combineReducers({searchRobots,requestRobtos})
// const logger=createLogger(); 
// const store = createStore(rootReducer,applyMiddleware(thunkmiddileware,logger)) 

ReactDOM.render(
    <div>
        <Login/>       
    </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
