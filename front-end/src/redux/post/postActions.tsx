import { Dispatch } from 'redux';
// import axios from "axios";

import axios from "../../utils/axios"
import { REST_API_URL } from '../constants';
import postTypes from './postTypes';

export const postLoad = () => async function(dispatch: Dispatch) {
    


    dispatch(postLoadStart());
    // const token = sessionStorage.getItem("token");
    // const token = Cookies.get("token");
    axios
      .get(REST_API_URL + "/posts")
      .then((result) => {
        dispatch(postLoadSuccess(result.data.data));
      })
      .catch((err) => {
        dispatch(postLoadError(err));
      });
    
}

export const postLoadStart = function() {
    return {
      type: postTypes.POST_LOAD_START,
    };
  };


  export const postLoadSuccess = function(data: Object) {
    return {
      type: postTypes.POST_LOAD_SUCCESS,
      data
    };
  };
  
  export const postLoadError = function(error: any) {
    return {
      type: postTypes.POST_LOAD_FAILURE,
      errorMessage: error.response.data.error.message,
    };
  };  