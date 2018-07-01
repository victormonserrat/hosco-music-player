import { AnyAction } from 'redux';
import { call, put } from 'redux-saga/effects';

import { searchByTermFailure, searchByTermSuccess } from '@app/song/actions/search-by-term';
import { searchByTerm } from '@app/song/api/search-by-term';
import { Song } from '@app/song/reducer';

export function* handleSearchByTerm({ term }: AnyAction) {
    try {
        const { data: { resultCount, results } } = yield call(searchByTerm, term);
        let songs: Song[] = [];

        if(resultCount > 0) {
            songs = results.filter(({ kind }: any) => kind === 'song')
            .map(({
                artistName,
                artworkUrl100,
                collectionName,
                previewUrl,
                primaryGenreName,
                releaseDate,
                trackName,
                trackPrice,
                trackTimeMillis,
            }: any) => ({
                album: collectionName,
                artist: artistName,
                cover: `${artworkUrl100.slice(0, -13)}500x500bb.jpg`,
                genre: primaryGenreName,
                length: trackTimeMillis / 1000,
                price: trackPrice,
                title: trackName,
                track: previewUrl,
                year: Number(releaseDate.slice(0, 4)),
            }));
        }
        yield put(searchByTermSuccess(songs));
    } catch(error) {
        yield put(searchByTermFailure);
    }
}
