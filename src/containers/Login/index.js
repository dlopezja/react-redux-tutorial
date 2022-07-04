import LoginComponent from "../../components/pages/Login";
import actions from '../../actions/Login';
import { connect } from "react-redux";
import { useState } from "react";

function LoginContainer({ user, signIn }) {
  const [values, setValues] = useState({ email: '', password: '' });

  // TODO: try this approach first
  // function handleTextChange(event) {
  //   setUser({ email: event.target.value, password: event.target.value });
  // }

  // TODO: then try this approach
  // function handleTextChange(property) {
  //   return function (event) {
  //       setValues({ ...values, [property]: event.target.value });
  //   }
  // }

  const handleTextChange = (property) => (e) => {
    setValues({ ...values, [property]: e.target.value });
  }

  function handleLogin() {
    signIn({ email: values.email, password: values.password })
    window.localStorage.setItem('user', JSON.stringify(user));
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
