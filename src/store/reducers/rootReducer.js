import {combineReducers} from 'redux'

import isAuthenticated from './auth'
import breadCrumb from './breadcrumb'
import pollingUnitState from './pollingUnitState'
import pollingUnitLGA from './pollingUnitLGA'
import measurement from './measurement'
import unitmeasurement from './unitmeasurement'
import instrument from './addInstrument'

export const reducers = {
 isAuthenticated,
 breadCrumb,
 pollingUnitState,
 pollingUnitLGA,
 measurement,
 unitmeasurement,
 instrument
};


const rootReducer = combineReducers({
  ...reducers,
});


export default rootReducer;