import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase/app";
import './index.css';
import App from './App';
import ReduxProvider from './redux';
import reportWebVitals from './reportWebVitals';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCTvy_4JFijlmkcsyiXZ5tpW88qKoWT1Y",
  authDomain: "clover-lorena.firebaseapp.com",
  projectId: "clover-lorena",
  storageBucket: "clover-lorena.appspot.com",
  messagingSenderId: "1004045429794",
  appId: "1:1004045429794:web:84c334b44ef1036db7ee7b",
  measurementId: "G-QDZ82KPQKS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
        <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
