import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginActions from "../../actions/Login";
import Login from "../../components/pages/Login";
import { errorHandler } from "../../utils/errorHandler";
import ErrorAlert from "../../components/errorAlert";

function LoginContainer({ user, getUser }) {
  const [errorPanel, openPanel] = useState(false);
  let token = localStorage.getItem("token");
  let navigate = useNavigate();

  useEffect(() => {
    if (errorHandler(user)) {
      openPanel(true);
    } else if (typeof token !== "string") {
      openPanel(false);
    } else{
      navigate("/products");
    }
  }, [user]);

  const getUserInformation = (user) => {
    console.log("from container", user);
    getUser(user);
  };

  return (
    <>
      {errorPanel && <ErrorAlert statusCode={500} description={'The email or password is incorrect'}/>}
      <Login onClick={getUserInformation} />
    </>
  );
}

function mapStateToProps(state) {
  console.log("fromlogincontainer", state);

  const { user } = state.login;
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
