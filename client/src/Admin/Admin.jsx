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
import AddGalleryImage from "./pages/AddGalleryImage";
import ListGalleryImages from "./pages/ListGalleryImages";
import ProtectedRoute from "../contextApi/ProtectedRoutes";

const Admin = () => {

    return (
        <>

            <Routes>
                <Route path="/admin" element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                        <AdminRoutes />
                    </ProtectedRoute>
                }>
                    <Route element={<AdminLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="add-product" element={<AddProduct />} />
                        <Route path="add-gallery" element={<AddGalleryImage />} />
                        <Route path="all-products" element={<ListProducts />} />
                        <Route path="list-gallery" element={<ListGalleryImages />} />
                        <Route path="update-product/:id" element={<UpdateProduct />} />
                    </Route>
                </Route>
            </Routes>

        </>
    );
};

export default Admin;