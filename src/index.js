import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import './index.css';
import 'tachyons';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
//import Login from './Login.js';
import { createStore,applyMiddleware, combineReducers} from 'redux';
import thunkmiddileware from 'redux-thunk';
import { searchRobots,requestRobtos } from './reducers/reducers';


const rootReducer=combineReducers({searchRobots,requestRobtos})
const logger=createLogger(); 
const store = createStore(rootReducer,applyMiddleware(thunkmiddileware,logger)) 

ReactDOM.render(
        <Provider store={store}>
        <App />
        </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
