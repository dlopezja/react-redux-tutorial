import { useEffect } from "react";
import { connect } from "react-redux";

import ProductActions from '../../actions/Products';
import ProductsComponent from "../../components/pages/Products";
import UsersComponent from "../../components/pages/Users";

function UsersContainer({ users, login }) {
  useEffect(() => {
    login();
  }, [login]);

  return (
    <UsersComponent users={users} />
  );
}

function mapStateToProps(state) {
  const { users } = state;
  return { users }
}

function mapDispatchToProps(dispatch) {
  function login() {
    dispatch(ProductActions.SET_USERS());
  }

  return { login }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
