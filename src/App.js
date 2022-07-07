import "./App.css";
import ProductsContainer from "./containers/Products";
import { Routes, Route } from "react-router-dom";
import SignUpContainer from "./containers/SignUp";
import Home from "./components/pages/Home";
import LoginContainer from "./containers/Login";
import ProtectedRoute from "./components/protectedRoute";
import ChartContainer from "./components/pages/Chart";
import { connect } from "react-redux";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            
              <Home />
            
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginContainer />
            </PublicRoute>
          }
        />
        <Route path="/signup" element={<SignUpContainer />} />
        <Route path="/chart" element={<ChartContainer />} />

        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ProductsContainer />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("from app", state);

  const { user } = state.login;
  return { user };
}

export default connect(mapStateToProps)(App);
