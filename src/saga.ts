import createSagaMiddleware  from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import { saga as songSaga } from '@app/song/sagas';

export const sagaMiddleware = createSagaMiddleware();

export function* saga() {
    yield all([fork(songSaga)]);
}