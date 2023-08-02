import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXTcQhz7tEEULTLmUIkfRQD1ZHVqjjJk8",
  authDomain: "create-react-app-92266.firebaseapp.com",
  databaseURL: "https://create-react-app-92266-default-rtdb.firebaseio.com",
  projectId: "create-react-app-92266",
  storageBucket: "create-react-app-92266.appspot.com",
  messagingSenderId: "873044528365",
  appId: "1:873044528365:web:cf23491b3bbcaf153c10e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />

);

