import { AnyAction } from 'redux';

export const handlePause = (action: AnyAction) => {
    const audio = <HTMLAudioElement>document.getElementById('audio');
    audio.pause();
};
