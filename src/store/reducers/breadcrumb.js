import * as actionTypes from '../actions/actionTypes'


const initState = {
    breadcrumbs: [],
    areBreadcrumbsVisible: true
}


export const breadCrumb = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_BREADCRUMBS:
            return {
                breadcrumbs: action.payload // except with a new breadcrumbs value
            };
        case actionTypes.TOGGLE_BREADCRUMBS:
            return {
            areBreadcrumbsVisible: {...state.areBreadcrumbsVisible, ...action.payload}
            }
        
        default:
            return state;
            }
}

export default breadCrumb;


