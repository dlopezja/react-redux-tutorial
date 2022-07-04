function ProductsComponent({ products }) {
  console.log('products Component:>> ', products);
  return (
    <div>
      <h3>Product List</h3>
      {products.map(element => {
        return <span key={element}>-{element} </span>
      })}
    </div>
  );
}

export default ProductsComponent;
