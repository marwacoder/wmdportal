import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import store from './store/reducers';
import { persistStore } from 'redux-persist';
import axios from 'axios'

import Spinner from './helpers/Spinner/Spinner'

let spinner = <Spinner/>

const persistor = persistStore(store)

const token = sessionStorage.getItem('user-token')

if(token){
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}else{
  delete axios.defaults.headers.common['Authorization'];
}
axios.interceptors.request.use(request => {
  console.log(request)
  return request;
}, error => {
  console.log(error)
 return Promise.reject(error)
})


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={spinner} persistor={persistor}>
       <App />
    </PersistGate>
   
  </Provider>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
