import { SET_USER, SET_USER_AGE, SET_TOKEN_AUTHENTICATION} from './Actions'

const initialState = {
  user : '',
  age : 0,
  authentication : false
}

function userReducer(state= initialState, action){
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload};
      break;
    case SET_USER_AGE:
      return { ...state, age: action.payload};
      break;
    case SET_TOKEN_AUTHENTICATION:
      return { ...state, authentication: action.payload};
      break;
    default:
        return state;
      break;
  }
}
export default userReducer;