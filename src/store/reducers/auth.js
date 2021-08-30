import * as actionTypes from '../actions/actionTypes'


const initState = {
    data: {},
    token: null,
    message: null,
    isLoading: false,
    isLoggedIn: false,
    isLoggedOut: false,
    error: false,
    success: false
}


export const isAuthenticated = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                isLoading: true
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                isLoading: false,
                isLoggedIn:true,
                data: { ...state.data, ...action.payload.user },
                token: action.payload.token
            }
        case actionTypes.AUTH_FAIL:
            return {
                isLoading: false,
                isLoggedIn: false,
                error: true,
                message: action.payload
            }
        case actionTypes.AUTH_REFRESH:
            return {
                
            }
        case actionTypes.LOG_OUT:
            return {
                isLoggedOut: true,
                isLoggedIn: false,
                data: {...state.data}
            }

            case actionTypes.REGISTER_START:
            return {
                isLoading: true
            }
        case actionTypes.REGISTER_SUCCESS:
            return {
                isLoading: false,
                data: { ...state.data, ...action.payload.data },
                token: action.payload.token,
                message: action.payload.message,
                success: true
            }
        case actionTypes.REGISTER_FAIL:
            return {
                isLoading: false,
                isLoggedIn: false,
                error: true,
                message: action.payload
            }
        default:
            return state;
            }
}

export default isAuthenticated;


