import './styles.css'

function ProductsComponent({ products }) {
  console.log('products :>> ', products);
  return (
    <div className="products-container">
      <h3>Product List</h3>
      {products?.map(element => {
        return <span key={element}>-{element} </span>
      })}
    </div>
  );
}

export default ProductsComponent;
