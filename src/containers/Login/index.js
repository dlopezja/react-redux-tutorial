import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import LoginActions from '../../actions/Login';
import Login from "../../components/pages/Login";

function LoginContainer({user, getUser}) {
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  useEffect(() => {
    if(token){
      navigate('/products');
    }
  },[user]);
  const getUserInformation = (user) =>{
    console.log("from container",user);
    getUser(user);
  }

  return (
    <Login onClick={getUserInformation} />
  );
}

function mapStateToProps(state) {
  console.log("fromlogincontainer", state);
  const { user } = state.login;
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
