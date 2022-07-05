import Barchart from '../Barchart.js';
import styles from './style.modules.css';                                 

function ProductsComponent({ products }) {
  
  return (
    <div className={styles.container}>
      <h3>Product List</h3>
      {products?.map(element => {
        return <div key={element.id}>-{element.name} </div>
      })}

      <br />
      <Barchart />
      {/* <Link to='/products' >Sign In</Link> */}
    </div>
  );
}

export default ProductsComponent;
