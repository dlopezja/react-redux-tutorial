import actions from '../../actions/Login';
//import api from '../../api/Products';

function postUser(dispatch, {getUser}) {
    
      //const response = await api.getProducts();
      console.log("from postUser", getUser);
      dispatch(actions.POST_USER(getUser));      
      return getUser;

  }
  
  export default function userMiddleware(store) {
    const { dispatch } = store;
    return (next) => (action) => {
      switch(action.type) {
        case actions.POST_USER().type:
           postUser(dispatch);
          break;
  
        default:
          next(action);
          break;
      }
    }
  }