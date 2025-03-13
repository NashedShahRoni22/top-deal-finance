import React from 'react'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {
    const accessToken = localStorage.getItem("topdealfinanceAccessToken")
    return accessToken === "@topdealfinance2025" ? children : <Navigate to='/login'/> ;
}
