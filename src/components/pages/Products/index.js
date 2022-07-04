import { Link } from "react-router-dom";

function ProductsComponent({ products }) {
  
  return (
    <div>
      <h3>Product List</h3>
      {products?.map(element => {
        return <span key={element.id}>-{element.name} </span>
      })}

      <br />
     
      <Link to='/products' >Sign In</Link>
    </div>
  );
}

export default ProductsComponent;
