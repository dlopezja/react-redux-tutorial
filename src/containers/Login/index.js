import { useEffect } from "react";
import { connect } from "react-redux";

import LoginActions from '../../actions/Login';
import LoginComponent from "../../components/pages/Login";

function LoginContainer({ userInformation, auth }) {
  useEffect(() => {
    auth();
  }, [auth]);

  return (
    <Login userInformation={userInformation} />
  );
}

function mapStateToProps(state) {
  const { userInformation } = state;
  return { userInformation }
}

function mapDispatchToProps(dispatch) {
  function auth() {
    dispatch(LoginActions.FETCH_PRODUCTS());
  }

  return { getProducts }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);