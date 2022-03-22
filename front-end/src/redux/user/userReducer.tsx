import userTypes from './userTypes';
import Cookies from "js-cookie";

export const INITIAL_STATE = {
    currentUser: null,
    logginIn: false,
    error: false,
    errorMessage: null,
    userId: null,
    token: Cookies.get("token"),
  };
  
const userReducer = (state=INITIAL_STATE, action: any) => {
    switch (action.type) {
        case userTypes.SIGN_IN_START:
            return {...state, logginIn: true}
        case userTypes.SIGN_IN_SUCCESS:
            return {...state, logginIn: false, token: action.token, userId: action.userId}
        case userTypes.SIGN_IN_FAILURE:
          return {...state, logginIn: false, error: true, errorMessage: action.errorMessage}
        case userTypes.LOGOUT:
          return {...state, userId: null, token: null}
        default:
          return state;
    }
  }
  export default userReducer;
