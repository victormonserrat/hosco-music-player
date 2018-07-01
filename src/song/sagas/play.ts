import { AnyAction } from 'redux';

export const handlePlay = (action: AnyAction) => {
    const audio = <HTMLAudioElement>document.getElementById('audio');
    audio.play();
    audio.autoplay = true;
    console.log('play');

    //if(!audio.onended) {
        //audio.onended = () => {yiel put(moveToNext);};
    //}
};