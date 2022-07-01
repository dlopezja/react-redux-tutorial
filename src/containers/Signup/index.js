import { connect } from "react-redux";
import SignupActions from '../../actions/Signup';
import SignupComponent from "../../components/pages/Signup";

function LoginContainer({ userInformation, auth }) {

  function getUserInformation(userInformation){
    console.log(userInformation)
    auth(userInformation)
  }
  return (
    <SignupComponent onClick={getUserInformation} />
  );
}

function mapStateToProps(state) {
  const { userInformation } = state;
  return { userInformation }
}

function mapDispatchToProps(dispatch) {
  function auth() {
    dispatch(SignupActions.FETCH_USER());
  }

  return { auth }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);