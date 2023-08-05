import { getLocalJWT, loginRequest, registerRequest, removeToken, saveToken } from '../../../helpers/auth';
import request from '../../../helpers/request';
import * as actionTypes from './userActionTypes';



const apiUrl = 'https://post-app-ccdba-default-rtdb.firebaseio.com/';

export function register(data, navigate) {
    return (dispatch) => {
        dispatch({type: actionTypes.AUTH_LOADING});

        registerRequest(data)
        .then(() => {
            dispatch({type: actionTypes.REGISTER_SUCCESS});
            navigate('/login'); 
        })
        .catch(error => {
            dispatch({type: actionTypes.AUTH_ERROR, error: error.message});
        })
    }
}

export function login(data, navigate) {
    return (dispatch) => {
        dispatch({type: actionTypes.AUTH_LOADING});

        loginRequest(data)
        .then(token => {
            saveToken(token);
            dispatch({type: actionTypes.LOGIN_SUCCESS});
            navigate("/");

        })
        .catch(error => {
            dispatch({type: actionTypes.AUTH_ERROR, error: error.message});
        })
    }
}

export function logout(navigate){

    return async (dispatch)=>{
        dispatch({type: actionTypes.AUTH_LOADING});
        const jwt = getLocalJWT();
        if(jwt){
            request(`${apiUrl}/user/sign-out`, "POST", {jwt})
            .then(() => {
                removeToken();
                dispatch({type: actionTypes.LOGOUT_SUCCESS});
                navigate('/login');  
            })
            .catch(error => {
                dispatch({type: actionTypes.AUTH_ERROR, error: error.message});  
            });

        }
        else {
            dispatch({type: actionTypes.LOGOUT_SUCCESS});
            navigate('/login');  
        } 
    }
}

export function getUserInfo() {
    
    return (dispatch) => {
        dispatch({type: actionTypes.AUTH_LOADING});

        request(`${apiUrl}/user`)
        .then(data => {
            dispatch({type: actionTypes.GET_USER_INFO_SUCCESS, userInfo: data})
        })
        .catch(error => {
            dispatch({type: actionTypes.AUTH_ERROR, error: error.message})
        })
    }
}
