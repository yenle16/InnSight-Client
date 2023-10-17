import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import { getHotelById, searchHotel } from '../../api/ApiCore';
import { getHotel } from './slice';
function* watchGetHotel() {
    yield takeEvery(actions.GET_HOTEL, function* (payload) {
        const { hotelId } = payload
        try {
            const response = yield call(getHotelById, hotelId);
            console.log(response)
            if (response?.Data) {
                yield put(getHotel(response?.Data))
            }

        } catch (error) {

        } finally {
        }
    });
}
function* watchSearchHotel() {
    yield takeEvery(actions.SEARCH_HOTELS, function* (payload) {
        const { hotelId } = payload
        try {
            const response = yield call(searchHotel, hotelId);
            console.log(response)
            if (response?.Data) {
                yield put(getHotel(response?.Data))
            }

        } catch (error) {

        } finally {
        }
    });
}
export default function* HomeSaga() {
    yield all([
        fork(watchGetHotel),
        fork(watchSearchHotel),
    ]);
}
