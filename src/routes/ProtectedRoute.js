import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { 
	AUTH_PREFIX_PATH, 
	UNAUTHENTICATED_ENTRY, 
	REDIRECT_URL_KEY 
} from 'configs/AppConfig'

const ProtectedRoute = () => {
	
	const token  = localStorage.getItem("auth_token")
	const location = useLocation()


	 if(!token) {
		return <Navigate to={`${AUTH_PREFIX_PATH}${UNAUTHENTICATED_ENTRY}`} replace />;
	}

	return <Outlet />
}

export default ProtectedRoute