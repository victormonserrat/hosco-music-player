import { AnyAction } from 'redux';

export const MOVE_TO_NEXT: string = '@@song/MOVE_TO_NEXT';

export const moveToNext: AnyAction = {
    type: MOVE_TO_NEXT,
};