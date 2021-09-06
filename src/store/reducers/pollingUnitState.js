import * as actionTypes from '../actions/actionTypes'


const initState = {
    state: {},
    error: false,
    message: null,
    isLoading: false
}


export const pollingUnitState = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_STATE_START:
            return {
                isLoading: true
            }
        case actionTypes.GET_STATE_SUCCESS:
            return {
                isLoading: false,
                state: action.payload 
            }
        case actionTypes.GET_STATE_FAIL:
            return {
                isLoading: false,
                error: true,
                message: action.payload
            }
        
        default:
            return state;
            }
}

export default pollingUnitState;


