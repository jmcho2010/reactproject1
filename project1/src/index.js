import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from './chatUI/App.js';
//import App from './chatUI/ReactTyping.js';
//import App from './chatUI/useEffectReview.js'
import App from './conn/App.js'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
