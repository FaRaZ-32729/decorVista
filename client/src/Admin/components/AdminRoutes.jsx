import React, { useContext } from 'react'
import {  Outlet } from 'react-router-dom';

const AdminRoutes = () => {
    // const { user } = useContext(UserContext);
    // return user && user.role === "admin" ? <Outlet /> : <Navigate to="/" replace />
    return <Outlet />;
}


export default AdminRoutes
