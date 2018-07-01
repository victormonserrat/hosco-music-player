import { combineReducers, Reducer } from 'redux';
import { FormStateMap, reducer as formReducer } from 'redux-form';

import { reducer as layoutReducer, State as LayoutState } from '@app/layout/reducer';
import { reducer as songReducer, State as SongState } from '@app/song/reducer';

export const reducer: Reducer<State> = combineReducers({
    form: formReducer,
    layout: layoutReducer,
    song: songReducer,
});

export interface State {
    readonly form: FormStateMap,
    readonly layout: LayoutState,
    readonly song: SongState,
}