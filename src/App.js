import './App.css';
import ProductsContainer from './containers/Products';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import UsersContainer from './containers/Users'
import LoginContainer from './containers/Login'
import SignupContainer from './containers/Signup'
import RouteProtector from "./components/utils/RouteProtected";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsContainer />} />
        <Route element={<RouteProtector user={localStorage.getItem('user')} />}>
          <Route path="/products" element={<ProductsContainer />}/>
        </Route>
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/login" element={<LoginContainer/>} />
        <Route path="signup" element={<SignupContainer/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
