import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import {add,sub,div,multi} from './components/Cal';

//import App from './App';
//import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  //<React.StrictMode>
   //<App />
  
  //</React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


ReactDOM.render(
  <>
  <ul>
    <li>Sum of two no is {add(40,2)}</li>
    <li>Sub of two no is {sub(30,5)}</li>
    <li>Div of two no is {div(20,5)}</li>
    <li>Multi of two no is {multi(30,5)}</li>
  </ul>
  </>,
  document.getElementById('root')
);
