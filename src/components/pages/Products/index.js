import { Link } from "react-router-dom";

function ProductsComponent({ products }) {
  return (
    <div>
      <h3>Product List</h3>
      {products?.map(element => {
        return <span key={element}>-{element} </span>
      })}

      <br />
      <Link to='/sign-in' >Sign In</Link>
    </div>
  );
}

export default ProductsComponent;
