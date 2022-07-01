import { connect } from "react-redux";
import LoginActions from '../../actions/Signup';
import LoginComponent from "../../components/pages/Signup";

function LoginContainer({ userInformation, auth }) {

  function getUserInformation(userInformation){
    console.log(userInformation)
    auth(userInformation)
  }
  return (
    <LoginComponent onClick={getUserInformation} />
  );
}

function mapStateToProps(state) {
  const { userInformation } = state;
  return { userInformation }
}

function mapDispatchToProps(dispatch) {
  function auth() {
    dispatch(LoginActions.FETCH_USER());
  }

  return { auth }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);