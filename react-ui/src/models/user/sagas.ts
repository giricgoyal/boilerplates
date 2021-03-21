import { call, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from './action-types';
import api from '../../modules/api';

function* fetchUser() {
    const { data } = yield call(api.v1.get, 'user');
    
    yield put({
        type: actionTypes.FETCH_USER_SUCCESS,
        payload: data
    })
}

export const fetchUserSaga = takeLatest(actionTypes.FETCH_USER, fetchUser);

export default [
    fetchUserSaga
];
