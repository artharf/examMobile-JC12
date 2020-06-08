import {
    KOCENG_START,
    KOCENG_SUCCESS,
    KOCENG_DETAIL,
    KOCENG_FAILED,
    } from '../Types';
    
    const INITIAL_STATE = {
      images: [],
      error: '',
      loading: false,
    };
    
    export const fetchReducer = (state = INITIAL_STATE, action) => {
      switch (action.type) {
        case KOCENG_START :
          return {
            ...state,
            loading: true,
          };
        case KOCENG_SUCCESS :
          return {
            ...state,
            images: action.payload,
            loading: false,
          };
        case KOCENG_FAILED :
          return {
            ...state,
            error: action.payload,
            loading: false,
          };
        default : 
          return state;
      };
    };