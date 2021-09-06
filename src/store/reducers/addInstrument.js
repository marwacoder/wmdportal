import * as actionTypes from '../actions/actionTypes'


const initState = {
    instrument: {},
    error: false,
    message: null,
    isLoading: false,
    success: false
}


export const instrument = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INSTRUMENT_START:
            return {
                isLoading: true
            }
        case actionTypes.ADD_INSTRUMENT_SUCCESS:
            return {
                isLoading: false,
                instrument: { ...state.instrument, ...action.payload.data },
                message: action.payload.message,
                success: true
            }
        case actionTypes.ADD_INSTRUMENT_FAIL:
            return {
                isLoading: false,
                isLoggedIn: false,
                error: true,
                message: action.payload
            }
        case actionTypes.ADD_INSTRUMENT_REFRESH:
            return {
                
            }
        default:
            return state;
            }
}

export default instrument;


