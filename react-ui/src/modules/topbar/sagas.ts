import { put, takeEvery } from 'redux-saga/effects'
import * as actionTypes from './action-types'
import * as userActions from '../../models/user/actions'
import * as navigationActions from '../../models/navigation/actions'

function* onActivate() {
    yield put(navigationActions.setPage(window.location.pathname))
    yield put(userActions.fetchUser())
}

function* onDeactivate() {
    console.log('deactivated')
}

export const activateSaga = takeEvery(actionTypes.ACTIVATE, onActivate)
export const deactivateSaga = takeEvery(actionTypes.DEACTIVATE, onDeactivate)

export default [activateSaga, deactivateSaga]
