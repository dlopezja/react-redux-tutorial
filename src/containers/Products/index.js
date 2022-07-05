import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProductActions from '../../actions/Products';
import ProductsComponent from "../../components/pages/Products";

// container recibe del reducer.
// product component
// clase nueva que ejecuta la action

function ProductsContainer({ products, getProducts }) {

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <ProductsComponent products={products} />
  );
}

ProductsContainer.propTypes = {
  getProducts: PropTypes.func,
  products: PropTypes.array,
}

ProductsContainer.defaultProps = {
  getProducts: () => {},
  products: [],
};


function mapStateToProps(state) {
  const { products } = state.products;
  return { products }
}

//function mapDispatchToProps(dispatch) {
//  function getProducts() {
//    dispatch(ProductActions.FETCH_PRODUCTS());
//  }

//  return { getProducts }
//}

export default connect(mapStateToProps, null)(ProductsContainer);

// TEAM: react-redux: createStore, Higher Order Component, connect, mapStateToProps, mapDispatchToProps, middlewares, reducers
// ME: stronglthy connected components
