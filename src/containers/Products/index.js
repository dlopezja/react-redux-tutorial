import { useEffect } from "react";
import { connect } from "react-redux";

import ProductActions from '../../actions/Products';
import ProductsComponent from "../../components/pages/Products";

function ProductsContainer({ products, getProducts }) {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <ProductsComponent products={products} />
  );
}

function mapStateToProps(state) {
  const { products } = state;
  return { products }
}

function mapDispatchToProps(dispatch) {
  function getProducts() {
    dispatch(ProductActions.FETCH_PRODUCTS());
  }

  return { getProducts }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
