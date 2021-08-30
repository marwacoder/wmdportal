import * as actionTypes from '../actions/actionTypes'


const initState = {
    data: {},
    error: false,
    message: null,
    isLoading: false
}


export const company = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_COMPANY_START:
            return {
                isLoading: true
            }
        case actionTypes.GET_COMPANY_SUCCESS:
            return {
                isLoading: false,
                data: { ...state.data, ...action.payload.data }
            }
        case actionTypes.GET_COMPANY_FAIL:
            return {
                isLoading: false,
                error: true,
                message: action.payload
            }
        case actionTypes.GET_COMPANY_REFRESH:
            return {
                
            }
        default:
            return state;
            }
}

export default company;


