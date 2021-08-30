import axios from 'axios'

import setAuthToken from '../../API'
import * as actionTypes from './actionTypes';






//AUTHENTICATION ACTION
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (payload) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload
    }
}

export const authFail = (payload) => {
    return {
        type: actionTypes.AUTH_FAIL,
        payload
    };
};

export const authRefresh = () => {
    return {
        type: actionTypes.AUTH_REFRESH,
    };
};

export const logout = () => {
    return {
        type: actionTypes.LOG_OUT
    };
};

export const checkAuthTimeOut = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(userLogout());   
        },expirationTime)
    }
}
export const clearSession = () => {
    try {
      localStorage.removeItem("user-token");
    } catch (error) {
      console.log(error);
    }
  };

export const userLogout = () => (dispatch) => {
    dispatch(logout()); 
     clearSession();
};
//LOGIN
export const auth = (username, password) => {
 
    return (dispatch) => {
        dispatch(authStart());
        axios.post('http://api.wmd.ng/v1/login',{username, password}).then(resp => {
            setTimeout(() => {
                dispatch(authSuccess(resp.data))
                dispatch(checkAuthTimeOut(1209600000))
                const token = resp.data.token;
                localStorage.setItem('user-token', token);
                setAuthToken(token)
            },2000)
        }).catch(err => {
           console.log(err,'error')
                dispatch(authFail(err.response !== undefined ? err.response.data.message : 'Network Failed')) 
      })
    };
};


//REGISTER

export const registerStart = () => {
    return {
        type: actionTypes.REGISTER_START
    }
}

export const registerSuccess = (payload) => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        payload
    }
}

export const registerFail = (payload) => {
    return {
        type: actionTypes.REGISTER_FAIL,
        payload
    };
};

export const registerRefresh = () => {
    return {
        type: actionTypes.REGISTER_REFRESH,
    };
};




export const register = (email, name, password) => {
 
    return (dispatch) => {
        dispatch(registerStart());
        axios.post('http://api.wmd.ng/v1/register',{name,email, password}).then(resp => {
            console.log(resp,'resp')
            setTimeout(() => {
                dispatch(registerSuccess(resp.data))
                const token = resp.data.token;
                localStorage.setItem('user-token', token);
                setAuthToken(token)
            },2000)
          
        }).catch(err => {
           console.log(err.response.data.message,'error')
                dispatch(registerFail(err.response !== undefined ? err.response.data.message : 'Network Failed')) 
      })
    };
};