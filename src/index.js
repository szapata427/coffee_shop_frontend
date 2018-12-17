import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import index from '../src/Store/Reducers/index'
import semantic from './../node_modules/semantic-ui/dist/semantic.css';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const middleware = [thunk]
const store = createStore(index, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
