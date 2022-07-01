import { useEffect } from "react";
import { connect } from "react-redux";

import UsersActions from '../../actions/Users';
import UsersComponent from "../../components/pages/Users";

function UsersContainer({ users, getUsers }) {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <UsersComponent users={users} />
  );
}

function mapStateToProps(state) {
  const { users } = state;
  return { users }
}

function mapDispatchToProps(dispatch) {
  function getUsers() {
    dispatch(UsersActions.FETCH_USERS());
  }

  return { getUsers }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
