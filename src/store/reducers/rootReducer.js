import {combineReducers} from 'redux'

import isAuthenticated from './auth'
import breadCrumb from './breadcrumb'
import pollingUnitState from './pollingUnitState'
import pollingUnitLGA from './pollingUnitLGA'
import measurement from './measurement'
import unitmeasurement from './unitmeasurement'
import instrument from './addInstrument'
import measurementCapacity from './measurementCapacity'
import getInstrument from './getInstrument'

export const reducers = {
 isAuthenticated,
 breadCrumb,
 pollingUnitState,
 pollingUnitLGA,
 measurement,
 unitmeasurement,
 instrument,
 measurementCapacity,
 getInstrument
};


const rootReducer = combineReducers({
  ...reducers,
});


export default rootReducer;