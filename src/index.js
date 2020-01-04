import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import Login from './Login.js';
//import Testmap from './Test.js';
//const list1=[1,3,5,7,4,8];


ReactDOM.render(
    <div>
        <Login/>       
    </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
