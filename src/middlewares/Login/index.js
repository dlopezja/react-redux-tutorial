import actions from '../../actions/Login';
//import api from '../../api/Products';

function postUser(dispatch, action) {
    
      //const response = await api.getProducts();
      console.log("from postUser", action.payload);
      dispatch(actions.POST_USER(action.payload));      
      return "null";

  }
  
  export default function userMiddleware(store) {
    const { dispatch } = store;
    return (next) => (action) => {
      console.log("from middleware", action)
      switch(action.type) {
        case actions.POST_USER().type:
           postUser(dispatch, action);
          break;
  
        default:
          next(action);
          break;
      }
    }
  }