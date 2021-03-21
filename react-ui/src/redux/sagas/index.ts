import { all } from 'redux-saga/effects';
import actionSagas from '../../models/user/sagas';

function* rootSagas() {
    yield all([
        ...actionSagas
    ]);
}

export default rootSagas;