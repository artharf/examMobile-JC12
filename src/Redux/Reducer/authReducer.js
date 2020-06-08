import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAILED,
    AUTH_LOG_OUT,
    AUTH_DP_SUCCESS,
  } from '../Types';

const INITIAL_STATE = {
    username: '',
    displayPicture:'https://drive.google.com/file/d/1tiPENTyuoYY3vnCOuXylHwTofmKLzmcJ/view',
    error: '',
    loading: false,
  };

  export const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case AUTH_START :
        return {
          ...state,
          loading: true,
        };
      case AUTH_SUCCESS :
        return {
          ...state,
          username: action.payload,
          error: "",
          loading: false,
        };
        case AUTH_DP_SUCCESS:
            return {
              ...state,
              loading: false,
              displayPicture: action.payload,
            };
      case AUTH_FAILED :
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case AUTH_LOG_OUT :
        return INITIAL_STATE;
      default : 
        return state;
    };
  };