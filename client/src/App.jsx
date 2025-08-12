import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes, Route, useLocation } from 'react-router-dom';
import AdminRoutes from './components/admin/AdminRoutes';
import Dashboard from './pages/admin/Dashboard';
import AddProduct from './pages/admin/AddProduct';
import ListProducts from './pages/admin/ListProducts';
import UpdateProduct from './pages/admin/UpdateProduct';
import AdminLayout from './pages/admin/AdminLayout';

// Import your admin 

const App = () => {
  const isAdmin = useLocation().pathname.includes("admin");

  return (
    <>
      <ToastContainer position="top-right" />
      <Routes>
        <Route path='/' element={<AdminRoutes />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='add-product' element={<AddProduct />} />
            <Route path='all-products' element={<ListProducts />} />
            <Route path='update-product/:id' element={<UpdateProduct />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
