import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./Website.css";

// USER COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

// USER PAGES
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Favorite from "./pages/Favorite";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import DesignerPage from "./pages/DesignerPage";
import DesignerEdit from "./pages/DesignerEdit";
import DesignerProfile from "./pages/DesignerProfile";
import ProtectedRoute from "../contextApi/ProtectedRoutes";

const Website = () => {
    const location = useLocation();

    const hideHeaderFooter = ["/login", "/signup"];

    return (
        <div className="website">
            {!hideHeaderFooter.includes(location.pathname) && <Header />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/designer-page" element={
                    <ProtectedRoute allowedRoles={["designer"]}>
                        <DesignerPage />
                    </ProtectedRoute>
                } />
                <Route path="/designer-edit" element={
                    <ProtectedRoute allowedRoles={["designer"]}>
                        <DesignerEdit />
                    </ProtectedRoute>

                } />
                <Route path="/designer-profile" element={
                    <ProtectedRoute allowedRoles={[ "designer"]}>
                        <DesignerProfile />
                    </ProtectedRoute>

                } />
            </Routes>

            {!hideHeaderFooter.includes(location.pathname) && <Footer />}
        </div>
    );
};

export default Website;
