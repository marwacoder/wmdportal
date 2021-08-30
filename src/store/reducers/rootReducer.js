import {combineReducers} from 'redux'

import isAuthenticated from './auth'


export const reducers = {
 isAuthenticated
};


const rootReducer = combineReducers({
  ...reducers,
});


export default rootReducer;