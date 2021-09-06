import * as actionTypes from '../actions/actionTypes'


const initState = {
    lga: {},
    error: false,
    message: null,
    isLoading: false
}


export const pollingUnitLGA = (state = initState, action) => {
    switch (action.type) {
            case actionTypes.GET_LGA_START:
                return {
                    isLoading: true
                }
            case actionTypes.GET_LGA_SUCCESS:
                return {
                    isLoading: false,
                    lga: action.payload 
                }
            case actionTypes.GET_LGA_FAIL:
                return {
                    isLoading: false,
                    error: true,
                    message: action.payload
                }
        default:
            return state;
            }
}

export default pollingUnitLGA;


