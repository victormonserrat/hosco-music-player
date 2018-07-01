import * as React from 'react';
import { Grid } from 'semantic-ui-react';

import { List } from '@app/song/components/List';
import { Player } from '@app/song/components/Player';
import { PropsFromDispatch, PropsFromState } from '@app/song/containers/PlayerView';

export const PlayerView = ({
    current,
    handleOnMoveToNext,
    handleOnMoveToPrevious,
    handleOnPause,
    handleOnPlay,
    handleOnSelectByIndex,
    playing,
    songs,
}: Props): JSX.Element => {
    const { artist, cover, title, track } = songs[current];

    return(
        <Grid>
            <audio
                autoPlay={playing}
                id={'audio'}
                onEnded={() => handleOnMoveToNext()}
                src={track}
            />
            <Grid.Row only={'mobile'}>
                <Grid.Column>
                    <Player
                        artist={artist}
                        cover={cover}
                        handleOnMoveToNext={handleOnMoveToNext}
                        handleOnMoveToPrevious={handleOnMoveToPrevious}
                        handleOnPause={handleOnPause}
                        handleOnPlay={handleOnPlay}
                        playing={playing}
                        socialUrl={process.env.URL}
                        title={title}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row only={'mobile'}>
                <Grid.Column>
                    <List
                        current={current}
                        handleOnSelectByIndex={handleOnSelectByIndex}
                        songs={songs}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row only={'tablet'}>
                <Grid.Column>
                    <Player
                        artist={artist}
                        cover={cover}
                        handleOnMoveToNext={handleOnMoveToNext}
                        handleOnMoveToPrevious={handleOnMoveToPrevious}
                        handleOnPause={handleOnPause}
                        handleOnPlay={handleOnPlay}
                        playing={playing}
                        socialUrl={process.env.URL}
                        title={title}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row only={'tablet'}>
                <Grid.Column>
                    <List
                        current={current}
                        handleOnSelectByIndex={handleOnSelectByIndex}
                        songs={songs}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row only={'computer'}>
                <Grid.Column width={6}>
                    <Player
                        artist={artist}
                        cover={cover}
                        handleOnMoveToNext={handleOnMoveToNext}
                        handleOnMoveToPrevious={handleOnMoveToPrevious}
                        handleOnPause={handleOnPause}
                        handleOnPlay={handleOnPlay}
                        playing={playing}
                        socialUrl={process.env.URL}
                        title={title}
                    />
                </Grid.Column>
                <Grid.Column width={10}>
                    <List
                        current={current}
                        handleOnSelectByIndex={handleOnSelectByIndex}
                        songs={songs}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export type Props = PropsFromState & PropsFromDispatch;