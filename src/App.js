import "./App.css";
import ProductsContainer from "./containers/Products";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/login-form";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductsContainer />} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
