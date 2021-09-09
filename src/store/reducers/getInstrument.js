import * as actionTypes from '../actions/actionTypes'


const initState = {
    instrument: {},
    error: false,
    message: null,
    isLoading: false,
    success: false
}


export const getInstrument = (state = initState, action) => {
    switch (action.type) {
            case actionTypes.GET_REGISTERED_INSTRUMENT_START:
            return {
                isLoading: true
            }
        case actionTypes.GET_REGISTERED_INSTRUMENT_SUCCESS:
            return {
                isLoading: false,
                instrument: action.payload.data,
                message: action.payload.message,
                success: true
            }
        case actionTypes.GET_REGISTERED_INSTRUMENT_FAIL:
            return {
                isLoading: false,
                isLoggedIn: false,
                error: true,
                message: action.payload
            }
        case actionTypes.GET_REGISTERED_INSTRUMENT_REFRESH:
            return {
                
            }
        default:
            return state;
            }
}

export default getInstrument;


