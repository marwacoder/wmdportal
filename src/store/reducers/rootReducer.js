import {combineReducers} from 'redux'

import isAuthenticated from './auth'
import breadCrumb from './breadcrumb'


export const reducers = {
 isAuthenticated,
 breadCrumb
};


const rootReducer = combineReducers({
  ...reducers,
});


export default rootReducer;