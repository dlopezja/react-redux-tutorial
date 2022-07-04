import { Route, Routes, Link, Navigate } from "react-router-dom";
import ProductsContainer from '../containers/Products';
import LoginContainer from "../containers/Login";
import HomeContainer from "../containers/HomeContainer";
import React, { useState } from 'react';
import Login2 from '../components/pages/Login2';

function MainRouter() {
  const [user, setUser] = React.useState(null);
  

  const handleLogin = () => setUser({ id: '1', name: 'robin' });
  const handleLogout = () => setUser(null);
  return (
    <>
    <Navigation />

    {/* {user ? (
        <button onClick={handleLogout}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )} */}

    <Routes>
      {/* <Route path="/" element={<HomeContainer />} /> */}
      <Route path="/" element={<Login2 />} />
      {/* <Route path="/products" element={ <ProductsContainer /> } /> */}
      <Route path="/products" element={<> <ProductsContainer /> , <Product user={user}/> </> } />
      <Route path="sign-in" element={<LoginContainer user={user} />} />
      <Route path="*" element={<p>There's nothing here: 404!</p> } />
    </Routes>

    </>
  )
}

const Navigation = () => (
  <nav>
    
    {/* <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/sign-in">Sign in</Link> */}
    
  </nav>
);

const Product = ( user ) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }
}

const Products = () => {
  return <h2>Products (Protected: authenticated user required)</h2>;
};

export default MainRouter;
