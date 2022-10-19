import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import Product from './components/Product/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Product />
  </React.StrictMode>
);
