import * as actionTypes from '../actions/actionTypes'


const initState = {
    unitmeasurement: {},
    error: false,
    message: null,
    isLoading: false
}


export const unitmeasurement = (state = initState, action) => {
    switch (action.type) {
            case actionTypes.GET_UNIT_MEASUREMENT_START:
                return {
                    isLoading: true
                }
            case actionTypes.GET_UNIT_MEASUREMENT_SUCCESS:
                return {
                    isLoading: false,
                    unitmeasurement: action.payload.data,
                    message: action.payload.message
                }
            case actionTypes.GET_UNIT_MEASUREMENT_FAIL:
                return {
                    isLoading: false,
                    error: true,
                    message: action.payload
                }
        default:
            return state;
            }
}

export default unitmeasurement;


