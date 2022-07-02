import "./App.css";
import ProductsContainer from "./containers/Products";
import { Routes, Route, Link } from "react-router-dom";
import LoginContainer from "./containers/login";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsContainer />} />
        <Route path="login" element={<LoginContainer />} />
      </Routes>
    </div>
  );
}

export default App;
