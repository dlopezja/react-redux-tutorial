import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ user, redirectPath = '/', children}){
    if(!user){
        return(
            <>
                <Navigate to={redirectPath} replace />
                {alert("YOU SHALL NOT PASS!!!")}
            </>
        );
    }
    return children ? children : <Outlet />;
}

export default ProtectedRoute;
