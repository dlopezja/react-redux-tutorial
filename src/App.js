import './App.css';
import ProductsContainer from './containers/Products';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import UsersContainer from './containers/Users'
import LoginContainer from './containers/Login'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsContainer />} />
        <Route path="login" element={<LoginContainer/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
