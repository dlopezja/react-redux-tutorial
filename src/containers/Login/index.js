import actions from '../../actions/Login';
import { connect } from "react-redux";
import { useState } from "react";
import LoginComponent from "../../components/pages/Login";

function LoginContainer({ user, signIn }) {
  const [values, setValues] = useState({ email: '', password: '' });


  const handleTextChange = (property) => (e) => {
    setValues({ ...values, [property]: e.target.value });
  }

  function handleLogin() {
    signIn({ email: values.email, password: values.password })
  }
  return (
    <div>
      <LoginComponent
        onTextChange={handleTextChange}
        onSignIn={handleLogin} />
      {user.id &&
        <div>
          Id: {user.id}
          <br />
          Name: {user.name}
          <br />
          Email: {user.email}
        </div>
      }
    </div>
  )
}

function mapStateToProps(state) {
  const { user } = state.login;
  return { user };
}

function mapDispatchToProps(dispatch) {
  function signIn(payload) {
    dispatch(actions.SIGN_IN(payload));
  }

  return { signIn }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);