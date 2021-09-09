import * as actionTypes from '../actions/actionTypes'


const initState = {
    measurementcapacity: {},
    error: false,
    message: null,
    isLoading: false
}


export const measurementCapacity = (state = initState, action) => {
    switch (action.type) {
            case actionTypes.GET_MEASUREMENT_CAPACITY_START:
                return {
                    isLoading: true
                }
            case actionTypes.GET_MEASUREMENT_CAPACITY_SUCCESS:
                return {
                    isLoading: false,
                    measurementcapacity: action.payload.data,
                    message: action.payload.message
                }
            case actionTypes.GET_MEASUREMENT_CAPACITY_FAIL:
                return {
                    isLoading: false,
                    error: true,
                    message: action.payload
                }
        default:
            return state;
            }
}

export default measurementCapacity;


