import { AnyAction } from 'redux';

export const PLAY: string = '@@song/PLAY';

export const play: AnyAction = {
    type: PLAY,
};