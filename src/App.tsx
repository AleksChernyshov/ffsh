import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import ProductDescriptionPage from './Pages/ProductDescriptionPage';
import CartPage from './Pages/CartPage';
import OrdersPage from './Pages/OrdersPage';
import ProductsPage from './Pages/ProductsPage';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import { ToastContainer } from 'react-toastify';

function App() {
  return <>
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductDescriptionPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/landing" element={<LandingPage />} />
    </Routes>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      // theme="dark"
    />
  </>
}

export default App;
