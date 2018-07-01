import { AnyAction, Reducer } from 'redux';

import { MOVE_TO_NEXT } from '@app/song/actions/move-to-next';
import { MOVE_TO_PREVIOUS } from '@app/song/actions/move-to-previous';
import { PAUSE } from '@app/song/actions/pause';
import { PLAY } from '@app/song/actions/play';
import { SEARCH_BY_TERM, SEARCH_BY_TERM_FAILURE, SEARCH_BY_TERM_SUCCESS } from '@app/song/actions/search-by-term';
import { SELECT_BY_INDEX } from '@app/song/actions/select-by-index';

export const reducer: Reducer<State> = (state: State = initialState, action: AnyAction) => {
    switch(action.type) {
        case MOVE_TO_NEXT: {
            return {
                ...state,
                current: state.current < state.songs.length - 1 ? state.current + 1 : 0,
            };
        }
        case MOVE_TO_PREVIOUS: {
            return {
                ...state,
                current: state.current > 0 ? state.current - 1 : state.songs.length - 1,
            };
        }
        case PAUSE: {
            return {
                ...state,
                playing: false,
            };
        }
        case PLAY: {
            return {
                ...state,
                playing: true,
            };
        }
        case SEARCH_BY_TERM: {
            return {
                ...state,
                searching: true,
                songs: undefined,
            };
        }
        case SEARCH_BY_TERM_FAILURE: {
            return {
                ...state,
                searching: false,
                songs: [],
            };
        }
        case SEARCH_BY_TERM_SUCCESS: {
            return {
                ...state,
                searching: false,
                songs: action.songs,
            };
        }
        case SELECT_BY_INDEX: {
            return {
                ...state,
                current: action.index,
            };
        }
        default: {
            return state;
        }
    }
};

export interface State {
    readonly current?: number,
    readonly playing: boolean,
    readonly searching: boolean,
    readonly songs?: Song[],
}

export interface Song {
    album: string,
    artist: string,
    cover: string,
    genre: string,
    length: number,
    price: number,
    title: string,
    track: string,
    year: number,
}

const initialState: State = {
    current: undefined,
    playing: false,
    searching: false,
    songs: undefined,
};