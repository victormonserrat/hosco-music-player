import { AnyAction } from 'redux';

export const MOVE_TO_PREVIOUS: string = '@@song/MOVE_TO_PREVIOUS';

export const moveToPrevious: AnyAction = {
    type: MOVE_TO_PREVIOUS,
};