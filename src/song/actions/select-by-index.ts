import { AnyAction } from 'redux';

export const SELECT_BY_INDEX: string = '@@song/SELECT_BY_INDEX';

export const selectByIndex = (index: number): AnyAction => ({
    type: SELECT_BY_INDEX,
    index,
});