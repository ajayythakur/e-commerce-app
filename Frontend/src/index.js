import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Component/context/auth';
import { CartProvider } from './Component/context/Cart';
import { OrderProvider } from './Component/context/order';
import { RecentProvider } from './Component/context/Recent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <React.StrictMode>
      <CartProvider>
        <OrderProvider>
          <RecentProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </RecentProvider>
        </OrderProvider>
      </CartProvider>
    </React.StrictMode>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
