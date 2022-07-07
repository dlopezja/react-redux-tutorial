import { connect } from "react-redux";
import LoginActions from "../../actions/Login";
import Login from "../../components/pages/Login";
import ErrorAlert from "../../components/errorAlert";

function LoginContainer({ user, getUser }) {
  
  
  const getUserInformation = (user) => {
    console.log("from container", user);
    getUser(user);
  };

  return (
    <>
      {user.errors.message.length !== 0 && <ErrorAlert statusCode={user.errors.code} description={user.errors.message}/>}
      <Login onClick={getUserInformation} />
    </>
  );
}

function mapStateToProps(state) {
  console.log("fromlogincontainer", state);

  const  user  = state.login;
  console.log("fromlogincontainer", user);
  return { user };
}

function mapDispatchToProps(dispatch) {
  function getUser(user) {
    console.log("from actions", user);
    dispatch(LoginActions.AUTH_USER(user));
  }

  return { getUser };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
