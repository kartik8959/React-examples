import {takeLatest} from 'redux-saga/effects'
function* setLoginInfo(){

}

function* appSaga(){
    yield takeLatest('SET_LOGIN_INFO',setLoginInfo)
}

export default appSaga

