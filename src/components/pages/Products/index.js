function ProductsComponent({ products }) {
  console.log('products :>> ', products);
  return (
    <div>
      <h3>Product List</h3>
      {products?.map(element => {
        return <div key={element.id}>{element.name}</div>
      })}
    </div>
  );
}

export default ProductsComponent;
