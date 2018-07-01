import { all, fork, takeEvery } from 'redux-saga/effects';

import { PAUSE } from '@app/song/actions/pause';
import { PLAY } from '@app/song/actions/play';
import { SEARCH_BY_TERM } from '@app/song/actions/search-by-term';
import { handlePause } from '@app/song/sagas/pause';
import { handlePlay } from '@app/song/sagas/play';
import { handleSearchByTerm } from '@app/song/sagas/search-by-term';

export function* saga() {
    yield all([
        fork(watchPause),
        fork(watchPlay),
        fork(watchSearchByTerm),
    ]);
}

export function* watchPause() {
    yield takeEvery(PAUSE, handlePause);
}

export function* watchPlay() {
    yield takeEvery(PLAY, handlePlay);
}

export function* watchSearchByTerm() {
    yield takeEvery(SEARCH_BY_TERM, handleSearchByTerm);
}