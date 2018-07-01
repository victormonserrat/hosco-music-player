import { AnyAction } from 'redux';

import { Song } from '@app/song/reducer';

export const SEARCH_BY_TERM: string = '@@song/SEARCH_BY_TERM';
export const SEARCH_BY_TERM_SUCCESS: string = '@@song/SEARCH_BY_TERM_SUCCESS';
export const SEARCH_BY_TERM_FAILURE: string = '@@song/SEARCH_BY_TERM_FAILURE';

export const searchByTerm = (term: string): AnyAction => ({
    type: SEARCH_BY_TERM,
    term,
});

export const searchByTermSuccess = (songs: Song[]): AnyAction => ({
    type: SEARCH_BY_TERM_SUCCESS,
    songs,
});

export const searchByTermFailure: AnyAction = ({
    type: SEARCH_BY_TERM_FAILURE,
});