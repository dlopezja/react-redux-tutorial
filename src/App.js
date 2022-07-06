import "./App.css";
import ProductsContainer from "./containers/Products";
import { Routes, Route } from "react-router-dom";
import SignUpContainer from "./containers/SignUp";
import Home from "./components/pages/Home";
import LoginContainer from "./containers/Login";
import ProtectedRoute from "./components/protectedRoute";
import ChartContainer from "./components/pages/Chart"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/products" element={<ProductsContainer />}/>
        </Route>
        <Route path="/signup" element={<SignUpContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/chart" element={<ChartContainer />} />
      </Routes>
    </div>
  );
}

export default App;
