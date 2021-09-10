import { createStore, applyMiddleware, compose } from 'redux';
 import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {encryptTransform} from 'redux-persist-transform-encrypt'
import rootReducer from './rootReducer';


const logger = createLogger();

const persistedReducer = persistReducer(
    {
        storage,
        key: 'my-low-key',
        transforms: [
          encryptTransform({
            secretKey: 'my-super-secret-key',
            onError: function (error) {
              // Handle the error.
            },
          }),
        ],
      },
  rootReducer,
   )

 const store =  createStore(
    persistedReducer,
    {},
    compose(applyMiddleware(thunk, logger),
      //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store