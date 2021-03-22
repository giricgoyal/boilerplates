import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './action-types';
import * as userActions from '../../models/user/actions';

function* onActivate() {
    yield put(userActions.fetchUser());
}

function* onDeactivate() {
    
}

export const activateSaga = takeEvery(actionTypes.ACTIVATE, onActivate);
export const deactivateSaga = takeEvery(actionTypes.DEACTIVATE, onDeactivate);

export default [
    activateSaga,
    deactivateSaga
];
