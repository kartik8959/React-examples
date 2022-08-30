import {createStore,combineReducers,applyMiddleware} from 'redux';
import {reducer} from '../myReducers/reducer';
import logger from 'redux-logger'

const reducers=combineReducers({reducer})

const middlewares=applyMiddleware(logger)

export const store=createStore(reducers,middlewares);
