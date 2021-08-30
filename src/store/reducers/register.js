import * as actionTypes from '../actions/actionTypes'


const initState = {
    data: {},
    error: false,
    message: null,
    isLoading: false
}


export const register = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_START:
            return {
                isLoading: true
            }
        case actionTypes.REGISTER_SUCCESS:
            return {
                isLoading: false,
                data: { ...state.data, ...action.payload.data },
                message: action.payload.message
            }
        case actionTypes.REGISTER_FAIL:
            return {
                isLoading: false,
                isLoggedIn: false,
                error: true,
                message: action.payload
            }
        case actionTypes.REGISTER_REFRESH:
            return {
                
            }
        default:
            return state;
            }
}

export default register;


