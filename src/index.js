import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Result from './components/result';
import Question from './components/question';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>}></Route>
      <Route path="/result" element={<Result></Result>}></Route>
      <Route path="/question" element={<Question></Question>}></Route>


     
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
