import { connect } from "react-redux";
import LoginActions from '../../actions/Login';
import LoginComponent from "../../components/pages/Login";

function LoginContainer({ userInformation, auth }) {

  function getUserInformation(userInformation){
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