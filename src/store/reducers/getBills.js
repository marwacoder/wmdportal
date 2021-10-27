import * as actionTypes from '../actions/actionTypes'


const initState = {
    bills: {},
    error: false,
    message: null,
    isLoading: false,
    success: false
}


export const getInstrument = (state = initState, action) => {
    switch (action.type) {
            case actionTypes.GET_BILLS_START:
            return {
                isLoading: true
            }
        case actionTypes.GET_BILLS_SUCCESS:
            return {
                isLoading: false,
                instrument: action.payload.data,
                message: action.payload.message,
                success: true
            }
        case actionTypes.GET_BILLS_FAIL:
            return {
                isLoading: false,
                error: true,
                message: action.payload
            }
        case actionTypes.GET_BILLS_REFRESH:
            return {
                
            }
        default:
            return state;
            }
}

export default getBills;
