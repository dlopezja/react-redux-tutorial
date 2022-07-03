import actions from '../../actions/ConfirmAccount';
//import api from '../../api/Products';

function authUser(dispatch, action) {
    
      //const response = await api.getProducts();
      console.log("from postUser", action.payload);
      dispatch(actions.CONFIRM(action.payload));      
      
      return action.payload;

  }
  
  export default function userMiddleware(store) {
    const { dispatch } = store;
    return (next) => (action) => {
      console.log("from middleware", action)
      switch(action.type) {
        case actions.CONFIRM_USER().type:
            authUser(dispatch, action);
          break;
  
        default:
          next(action);
          break;
      }
    }
  }