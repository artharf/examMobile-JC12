import AsyncStorage from '@react-native-community/async-storage';
import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAILED,
  AUTH_LOG_OUT,
  AUTH_DP_SUCCESS,
} from '../Types';

export const LoginAction = username => {
  // console.log(username);
  return async dispatch => {
    dispatch({
      type: AUTH_START,
    });
    try {
      dispatch({
        type: AUTH_SUCCESS,
        payload: username,
      });
      await AsyncStorage.setItem("username", username);
    } catch(err) {
      console.log('masuk error');
      dispatch({
        type: AUTH_FAILED,
        payload: err,
      });
    }
  };
};

export const KeepLogin = () => {
  return async dispatch => {
    try {
      const storage = await AsyncStorage.getItem("username");
      if (storage) {
        console.log('Storage ada isinya');
        dispatch({
          type: AUTH_SUCCESS,
          payload: storage,
        });
      }
    } catch(err) {
      console.log('masuk error keeplogin');
      dispatch({
        type: AUTH_FAILED,
        payload: err,
      });
    }
  };
};

export const ChangeDPAction = ({postPhoto, id}) => {
    return async dispatch => {
      dispatch({
        type: AUTH_START,
      });
      try {
        const options = {
          headers: {
            'Content-Type': 'application/form-data',
          },
        };
        const data = new FormData();
        const uri =
          Platform.OS === 'android'
            ? postPhoto.path
            : postPhoto.replace('file://', '');
        const image = {
          uri,
          type: 'image/jpeg',
          name: 'photo.jpg',
        };
        data.append('image', image);
        let response = await axios.post(
          `${API_URL}/users/change-display/${id}`,
          data,
          options,
        );
        let {token, imagePath} = response.data;
        await AsyncStorage.setItem('token', token);
        dispatch({
          type: AUTH_DP_SUCCESS,
          payload: imagePath,
        });
      } catch (err) {
        dispatch({
          type: AUTH_FAILED,
          payload: err.message,
        });
      }
    };
  };
  

export const LogoutAction = () => {
  return async dispatch => {
    await AsyncStorage.removeItem("username");
    dispatch({
      type: AUTH_LOG_OUT,
    });
  };
};
