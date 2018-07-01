import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { moveToNext } from '@app/song/actions/move-to-next';
import { moveToPrevious } from '@app/song/actions/move-to-previous';
import { pause } from '@app/song/actions/pause';
import { play } from '@app/song/actions/play';
import { selectByIndex } from '@app/song/actions/select-by-index';
import { PlayerView } from '@app/song/components/PlayerView';
import { Song } from '@app/song/reducer';
import { State } from '@app/reducer';

const mapStateToProps = (
    { song: { current, playing, songs } }: State
): PropsFromState => ({
    current,
    playing,
    songs,
});

export interface PropsFromState {
    current: number,
    playing: boolean,
    songs: Song[],
}

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
    handleOnMoveToNext: () => dispatch(moveToNext),
    handleOnMoveToPrevious: () => dispatch(moveToPrevious),
    handleOnPause: () => dispatch(pause),
    handleOnPlay: () => dispatch(play),
    handleOnSelectByIndex: index => dispatch(selectByIndex(index)),
});

export interface PropsFromDispatch {
    handleOnMoveToNext: () => AnyAction,
    handleOnMoveToPrevious: () => AnyAction,
    handleOnPause: () => AnyAction,
    handleOnPlay: () => AnyAction,
    handleOnSelectByIndex: (index: number) => AnyAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerView);