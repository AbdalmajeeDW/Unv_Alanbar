import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const NotAllowedRoute = ({ children }) => {
    const token = useSelector((state) => state.auth.token);

    if (token) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default NotAllowedRoute;