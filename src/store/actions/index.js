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
export const auth = ({email, password}) => {
 
    return (dispatch) => {
        dispatch(authStart());
        axios.post('http://api.wmd.ng/v1/login',{email, password}).then(resp => {
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




export const register = ({email, name, password}) => {
 
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




export const getCompanyStart = () => {
    return {
        type: actionTypes.GET_COMPANY_START
    }
}

export const getCompanySuccess = (payload) => {
    return {
        type: actionTypes.GET_COMPANY_SUCCESS,
        payload
    }
}

export const getCompanyFail = (payload) => {
    return {
        type: actionTypes.GET_COMPANY_FAIL,
        payload
    };
};

export const getCompanyRefresh = () => {
    return {
        type: actionTypes.GET_COMPANY_REFRESH,
    };
};




export const getCompany = ({id}) => {
 
    return (dispatch) => {
        dispatch(getCompanyStart());
        axios.get(`http://api.wmd.ng/v1/company/${id}`).then(resp => {

            setTimeout(() => {
                dispatch(getCompanySuccess(resp.data))
            },1000)
          
        }).catch(err => {
                dispatch(getCompanyFail(err.response !== undefined ? err.response.data.message : 'Network Failed')) 
      })
    };
};