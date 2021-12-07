import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

// Initialize Firebase
const app = initializeApp({
  apiKey: 'AIzaSyA4TMb7_2CZakYbzxsf_715v2WMmPNjDjQ',
  authDomain: 'everyones-a-critic.firebaseapp.com',
  databaseURL: 'https://everyones-a-critic-default-rtdb.firebaseio.com',
  projectId: 'everyones-a-critic',
  storageBucket: 'everyones-a-critic.appspot.com',
  messagingSenderId: '351114533923',
  appId: '1:351114533923:web:0643e965a451cdcd9ca596',
  measurementId: 'G-NZDR28KBM3'
});
getAnalytics(app);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
