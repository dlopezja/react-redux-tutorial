import { connect } from "react-redux";

import SignupActions from '../../actions/SignUp';
import SignUp from "../../components/pages/SignUp";

function SignUpContainer({getUser}) {


  const getUserInformation = (user) =>{
    console.log("from container",user);
    getUser(user);
  }

  return (
    <SignUp onClick={getUserInformation} />
  );
}

function mapStateToProps(state) {
  console.log("fromlogincontainer",state);
  const { user } = state.signup.user;
  return { user }
}

function mapDispatchToProps(dispatch) {
  function getUser(user) {
    console.log("from actions", user);
    dispatch(SignupActions.POST_USER(user));
  }

  return { getUser }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
