import { Navigate } from "react-router-dom";
import cookieService from '../../Services/CookieService';

export default function PublicRoute({children}){
    const user =  cookieService.getCookie('user');
    return !user
    ? children
    : <Navigate to='/products' />
}