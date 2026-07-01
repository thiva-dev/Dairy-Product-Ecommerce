import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import './App.css'
import Topbar from './Topbar.jsx';
import { CartProvider } from './CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <BrowserRouter>
      <Topbar/>
      <App/>
    </BrowserRouter>
  </CartProvider>
)
