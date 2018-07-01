import { AnyAction } from 'redux';

export const PAUSE: string = '@@song/PAUSE';

export const pause: AnyAction = {
    type: PAUSE,
};