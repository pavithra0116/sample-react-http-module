import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    //you can edit your request config here globally
    return request;
}, error => {
    /*This block will be executed when the request is not sent due to internet disconnectivity or something else */
    console.log(error);
    return Promise.reject(error);
});

/*This for processing every response we get */

axios.interceptors.response.use(response => {
    console.log(response);
    //you can edit your response config here globally
    return response;
}, error => {
    return Promise.reject(error);
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
