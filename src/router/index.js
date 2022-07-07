import { Route, Routes,Navigate,Outlet } from "react-router-dom";
import LoginContainer from "../containers/Login";
import ProductsContainer from '../containers/Products';



function MainRouter() {
  // const user = JSON.parse(window.localStorage.getItem('user'));
 
  

  const ProtectedRoute = ({
    user,  
    redirectPath = '/',    
    children,    
    }) => {    
     if (!user) {   
    return <Navigate to={redirectPath} replace />;    
    }  
    return children ? children : <Outlet />;    
    };
  
  return (
    <Routes>
      <Route element={<ProtectedRoute user={JSON.parse(window.localStorage.getItem('user'))}/>}>
        <Route path="products" element={<ProductsContainer/>} /> 
      </Route>          
      <Route path="/" element={<LoginContainer />} />
    </Routes>
  )
}

export default MainRouter;
