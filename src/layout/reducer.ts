import { AnyAction, Reducer } from 'redux';

import { SELECT_BY_INDEX } from '@app/song/actions/select-by-index';

export const reducer: Reducer<State> = (state: State = initialState, action: AnyAction) => {
    switch(action.type) {
        case SELECT_BY_INDEX: {
            return {
                ...state,
                view: 'player',
            };
        }
        default: {
            return state;
        }
    }
};

export interface State {
    readonly view: View,
}

export type View = 'player' | 'searcher';

const initialState: State = {
    view: 'searcher',
};