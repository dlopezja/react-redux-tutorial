import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import LoginActions from '../../actions/Login';
import Login from "../../components/pages/Login";

function LoginContainer({getUser}) {
  let navigate = useNavigate();

  const getUserInformation = (user) =>{
    console.log("from container",user);
    getUser(user);
    setTimeout(() => {
      if(localStorage.getItem("token")){
        navigate('/products');
      }
    }, 3000);
  }

  return (
    <Login onClick={getUserInformation} />
  );
}

function mapStateToProps(state) {
  console.log("fromlogincontainer", state);
  const { user } = state.login.user;
  return { user }
}

function mapDispatchToProps(dispatch) {
  function getUser(user) {
    console.log("from actions", user);
    dispatch(LoginActions.AUTH_USER(user));
  }

  return { getUser }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
