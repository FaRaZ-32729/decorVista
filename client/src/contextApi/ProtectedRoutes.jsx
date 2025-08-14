import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

const ProtectedRoute = ({ allowedRoles, children }) => {
    const { user, isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <div>Loading...</div>; 
    }
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
