import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card'



import UserActions from '../../../actions/Users';


function LoginPage({users,getUsers}){
    
    const [user,setUser] = useState({ 
        username: '',
        password: '',
        submitted: false,
    });

    useEffect(() => {
        getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
        


    function handleChange(e) {
        e.preventDefault();
       setUser({
            ...user,
            [e.target.name]: e.target.value
       })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setUser({ submitted: true });
      
        window.location.href = '/';
    }
       
        const { username, password, submitted } = user;

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

                        {/* aca va loggingIn && */}
                        {
                            // <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="img not found"/>

                        }
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
                </Card.Body>
            </Card>
         
        );
    }

function mapStateToProps(state) {
    // const { loggingIn } = state.authentication;
    const { users } =state;
    return { users };
}

// const actionCreators = {
//     login: actions.login,
//     logout: actions.logout
// };

function mapDispatchToProps(dispatch) {
    function getUsers(){
        dispatch(UserActions.SET_USERS());
    }
    return {
        // login: (username, password) => dispatch(actions.SET_USERS(username, password)),
        // getUsers: () => dispatch(UserActions.getUsers()),
        getUsers,
        
    };

}

// const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
// export { connectedLoginPage as LoginPage };
// export default LoginPage

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);