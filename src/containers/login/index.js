import React, {useState, useEffect } from "react";
import { connect } from "react-redux";

import LoginActions from '../../actions/Login';
import Login from "../../components/login-form";

function LoginContainer({user, getUser}) {


  function getUserInformation(user){
    console.log(user);
    getUser(user);
  }

  return (
    <Login onClick={getUserInformation} />
  );
}

function mapStateToProps(state) {
  const { userInformation } = state;
  return { userInformation }
}

function mapDispatchToProps(dispatch) {
  function getUser(user) {
    dispatch(LoginActions.GET_USER(user));
  }

  return { getUser }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
