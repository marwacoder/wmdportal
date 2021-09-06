import * as actionTypes from '../actions/actionTypes'


const initState = {
    measurement: {},
    error: false,
    message: null,
    isLoading: false
}


export const measurement = (state = initState, action) => {
    switch (action.type) {
            case actionTypes.GET_MEASUREMENT_START:
                return {
                    isLoading: true
                }
            case actionTypes.GET_MEASUREMENT_SUCCESS:
                return {
                    isLoading: false,
                    measurement: action.payload.data,
                    message: action.payload.message
                }
            case actionTypes.GET_MEASUREMENT_FAIL:
                return {
                    isLoading: false,
                    error: true,
                    message: action.payload
                }
        default:
            return state;
            }
}

export default measurement;


