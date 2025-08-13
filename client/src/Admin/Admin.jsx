import React from "react";
import "./admin.css"
import { Routes, Route } from "react-router-dom";

// ADMIN COMPONENTS
import AdminRoutes from "./components/AdminRoutes";
import AdminLayout from "./pages/AdminLayout";

// ADMIN PAGES
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import ListProducts from "./pages/ListProducts";
import UpdateProduct from ".//pages/UpdateProduct";

const Admin = () => {

    return (
        <>

            <Routes>
                <Route path="/admin" element={<AdminRoutes />}>
                    <Route element={<AdminLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="add-product" element={<AddProduct />} />
                        <Route path="all-products" element={<ListProducts />} />
                        <Route path="update-product/:id" element={<UpdateProduct />} />
                    </Route>
                </Route>
            </Routes>

        </>
    );
};

export default Admin;