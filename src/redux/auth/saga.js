import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import { Login } from '../../api/ApiCore';
// import { getHotel } from './slice';
function* watchSignIn() {
    yield takeEvery(actions.SIGNIN, function* (payload) {
        const { data } = payload
        try {
            const response = yield call(Login, data);
            if (response?.Token) {
                localStorage.setItem("Token", JSON.stringify(response?.Token))
            }

        } catch (error) {

        } finally {
        }
    });
}

export default function* AuthSaga() {
    yield all([
        fork(watchSignIn),
    ]);
}
