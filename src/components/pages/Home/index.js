import { Route, Routes, Link, Navigate } from "react-router-dom";
// import ProductsContainer from "../containers/Products";


function HomeComponent({ options, user }) {
  return (
    <div>
      <h3>Options List</h3>
      {options?.map(element => {
        return <span key={element}>-{element} </span>
      })}

      <br />
      {/* <Link to='/sign-in' >Sign In</Link> */}
      <Link to='/' onClick={() => window.location.reload()} >Home</Link>
      <br />
      
      <Link to='/products' user={user}>Products</Link>
      {/* <Route path="/products" element={<ProductsContainer />} /> */}
    </div>
  );
}

export default HomeComponent;
