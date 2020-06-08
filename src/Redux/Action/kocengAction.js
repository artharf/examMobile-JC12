import Axios from 'axios';
import {
    KOCENG_START,
    KOCENG_SUCCESS,
    KOCENG_DETAIL,
    KOCENG_FAILED,
    } from '../Types';

    export const FetchData = () => {
        return async dispatch => {
          dispatch({
            type: KOCENG_START,
          });
          try {
            const res = await Axios.get('https://api.thecatapi.com/v1/images?api_key= 2fac2066-265d-41b6-9f0f-592a4c45bd39');
            console.log(res.data);
            dispatch({
              type: KOCENG_SUCCESS,
              payload: res.data.imges,
            });
          } catch (err) {
            console.log(err);
            dispatch({
              type: KOCENG_FAILED,
              payload: err,
            });
          }
        };
      };
      
 