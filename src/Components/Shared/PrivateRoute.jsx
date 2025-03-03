import React from 'react'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {
    const accessToken = localStorage.getItem("smfAccessToken")
    return accessToken === "@smartmove2024" ? children : <Navigate to='/login'/> ;
}
