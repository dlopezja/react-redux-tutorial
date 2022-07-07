import { Navigate, Outlet } from "react-router-dom";
import cookieService from '../../Services/CookieService';

function ProtectedRoute({children}){
    const user =  cookieService.getCookie('user');
    console.log("from protected",user)
    return user 
    ? children 
    : <Navigate to='/login' />
}

export default ProtectedRoute;
