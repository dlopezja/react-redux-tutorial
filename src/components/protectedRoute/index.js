import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({  redirectPath = '/', children}){
    let user=localStorage.getItem('token')
    if(!user){
        return(
            <>
                <Navigate to={redirectPath} replace />
            </>
        );
    }
    return children ? children : <Outlet />;
}

export default ProtectedRoute;
