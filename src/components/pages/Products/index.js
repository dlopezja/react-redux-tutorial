//import { Link } from "react-router-dom";
// import { claseIndex2 } from "../containers/Products/claseIndex2";

function ProductsComponent({ products }) {
  
  return (
    <div>
      <h3>Product List</h3>
      {products?.map(element => {
        
        return <div key={element.id}>-{element} </div>
      })}

      <br />

      {/* <claseIndex2/> */}
      
     
      {/* <Link to='/products' >Sign In</Link> */}
    </div>
  );
}

export default ProductsComponent;
