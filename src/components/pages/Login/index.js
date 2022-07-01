import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import { connect } from "react-redux";

import UsersActions from '../../../actions/Users';

function LoginPage(users,getUsers) {

    // reset login status
     const[user,setUser]=useState({
        username: '',
        password: '',
         submitted: false,
    })
    // const state = {
    //     username: '',
    //     password: '',
    //     submitted: false,
    // };

    function handleChange(e) {
        e.preventDefault();        
        setUser({
             ...user,
             [e.target.name]: e.target.value,
            });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setUser({ 
            ...user,
            submitted: true });
        // TODO call to dispatch the action
        window.location.href = '/';
        
    }

    return (
        <Card className="mt-3 mx-auto w-50">
            <Card.Header>
                <h2>Login</h2>
            </Card.Header>
            <Card.Body>
                <form name="form" onSubmit={handleSubmit}>
                    <div className={'form-group' + (user.submitted && !user.username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={user.username} onChange={handleChange} />
                        {user.submitted && !user.username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (user.submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={handleChange} />
                        {user.submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        {
                            // loggingIn &&
                            // <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </Card.Body>
        </Card>
    );
}

function mapStateToProps(state) {
    const { users } = state;
    return { users };
  }
  
  function mapDispatchToProps(dispatch) {
    function getUsers() {
      dispatch(UsersActions.FETCH_USERS());
    }
  
    return { getUsers }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);