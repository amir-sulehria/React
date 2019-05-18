import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
/*1.1
here the app component is rendered, into place of the root, usually u render one root component i.e. App.js 
in this case, and u nest all component ur ap might need in app component, u can also nest components 
inside components
*/








// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
