import { connect } from "react-redux";

import LoginActions from '../../actions/Login';
import Login from "../../components/login-form";

function LoginContainer({getUser}) {


  function getUserInformation(user){
    console.log("from container",user);
    getUser(user);
  }

  return (
    <Login onClick={getUserInformation} />
  );
}

function mapStateToProps(state) {
  const { user } = state;
  return { user }
}

function mapDispatchToProps(dispatch) {
  function getUser(user) {
    console.log("from actions", user);
    dispatch(LoginActions.POST_USER(user));
  }

  return { getUser }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
