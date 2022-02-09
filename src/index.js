import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore} from "redux";
import GrafikReducer from "./store/GrafikReducer";
import {Provider} from "react-redux";


const reducer = combineReducers({
    grafik: GrafikReducer,
});
const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
