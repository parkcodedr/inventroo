import { actionTypes } from '../constants/ActionTypes';
import {ApiService} from '../constants/ApiService';
import Cookies from 'js-cookie';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token,user) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token,
        user
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logoutUser = () => {
    return {
        type: actionTypes.USER_LOGOUT
    };
};

export const setToken = (token)=>{
    Cookies.set("x-token",token,{expires:7,secure:true});
}
export const getToken = ()=>{
    const token = Cookies.get("x-token");
    return token;
};

const getLocalState = (key)=>{
    const state = localStorage.getItem(key);
    return state!==undefined? JSON.parse(state):""
}
const setLocalState = (key,data)=>{
    localStorage.setItem(key,JSON.stringify(data));
}

const checkAuthTimeout = (expireTime)=>{
    return (dispatch)=>{
        console.log(expireTime* 1000 - 60000);
setTimeout(()=>{
    dispatch(refreshToken())
},expireTime * 1000 -  60000)
    }
}

const refreshToken = async()=>{
    
    return async(dispatch)=>{
        dispatch({type:'REFRESH_TOKEN'})
        const token = getToken();
        const userInfo = getLocalState('user');
        const header = {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
        try {
            const res = await ApiService.get('/account/refreshToken',header);
            const {access_token,expires_in} = res.data.token;
            console.log(res.data);

            const expirationDate = new Date(
                new Date().getTime() + expires_in * 1000
              );
              console.log(expirationDate);
              setLocalState('x-token',access_token);
              setToken(access_token);
              setLocalState("expirationDate", expirationDate)

                dispatch(authSuccess(access_token,userInfo));
                dispatch(checkAuthTimeout(expires_in))
            
        } catch (error) {
            console.log(error);
        }
    }
}

export const loginUser = (email, password) => {
    return (dispatch) => {
        dispatch(authStart());
        try {
            ApiService.post("/login", { email, password })
                .then(response => {
                    const { token,userInfo } = response.data;
                    const {access_token,token_type,expires_in} = token;
                    setToken(access_token);
                    localStorage.setItem("user",JSON.stringify(userInfo));
                    const expirationDate = new Date(
                        new Date().getTime() + expires_in * 1000
                      );
                      setLocalState("expirationDate", expirationDate);
                     
                    dispatch(authSuccess(access_token,userInfo));
                    dispatch(checkAuthTimeout(expires_in));
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        dispatch(authFail(ResponseMessage));
                    } else if (error.request) {
                        console.log(error);
                        dispatch(authFail("Connection failure! Try Again"));
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }

}

export const logout =()=>{
  return (dispatch)=>{
    dispatch(logoutUser());
    Cookies.remove("x-token");
    localStorage.removeItem("user");
  }
}

const checkTokenExpire = ()=>{
    return {type:'CHECK_AUTH_TOKEN_EXPIRE'}
}
export const authCheckState = () => {
    return (dispatch) => {
        dispatch(checkTokenExpire())
      const token = getToken();
      if (!token) {
        dispatch(logout());
      } else {

        const expirationDate = new Date(getLocalState("expirationDate"));
        if (expirationDate <= new Date()) {
          dispatch(logout());
        } else {
          const userInfo = getLocalState("user");
          dispatch(authSuccess(token, userInfo));
          dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
        }
      }
    }
}