import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import { DataContext } from './myContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <DataContext>
      <App />
      </DataContext>
    </BrowserRouter>
);