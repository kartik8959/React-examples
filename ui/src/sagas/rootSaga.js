import appSaga from './appSaga';
import {all} from 'redux-saga/effects'

function* rootSaga(){
  return  yield all([
        appSaga()
    ])
}

export default rootSaga;