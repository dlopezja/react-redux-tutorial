import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProductActions from '../../actions/Products';
import ProductsComponent from "../../components/pages/Products";
import HomeComponent from "../../components/pages/Home";

function HomeContainer({ options, getOptions }) {

  useEffect(() => {
    getOptions();
  }, [getOptions]);

  return (
    <HomeComponent options={options} />
  );
}

HomeContainer.propTypes = {
    getOptions: PropTypes.func,
    options: PropTypes.array,
}

HomeContainer.defaultProps = {
    getOptions: () => {},
    options: [],
};

export default HomeContainer;
// function mapStateToProps(state) {
//   const { options } = state.options;
//   return { options }
// }

// function mapDispatchToProps(dispatch) {
//   function getOptions() {
//     dispatch(OptionActions.FETCH_OPTIONS());
//   }

//   return { getOptions }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
