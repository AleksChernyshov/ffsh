import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import ProductDescriptionPage from './Pages/ProductDescriptionPage';
import CartPage from './Pages/CartPage';
import OrdersPage from './Pages/OrdersPage';
import ProductsPage from './Pages/ProductsPage';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductDescriptionPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/landing" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
