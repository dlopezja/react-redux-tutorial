import { Route, Routes } from "react-router-dom";
import LoginContainer from "../containers/Login";
import ProductsContainer from '../containers/Products';

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<ProductsContainer />} />
      <Route path="sign-in" element={<LoginContainer />} />
    </Routes>
  )
}

export default MainRouter;
