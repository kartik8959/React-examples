import {createStore,applyMiddleware} from 'redux'
import {rootReducer} from './reducers/rootReducer'
import rootSaga from './sagas/rootSaga';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

const sagaMiddleware=createSagaMiddleware()

const middlewares=applyMiddleware(logger,sagaMiddleware)
export const store=createStore(rootReducer,middlewares)
sagaMiddleware.run(rootSaga)