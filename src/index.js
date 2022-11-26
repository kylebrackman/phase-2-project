import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './Components/App';
import { BrowserRouter, Router } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
