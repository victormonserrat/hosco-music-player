import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Player } from '@app/song/components/Player';

const song = {
    album: 'Thriller',
    artist: 'Michael Jackson',
    cover: 'https://is1-ssl.mzstatic.com/' +
        'image/thumb/Music128/v4/a6/60/4a/a6604a4e-c90d-4b32-ebff-1c8ebc6be615/source/500x500bb.jpg',
    genre: 'Pop',
    length: 357,
    price: 1.29,
    title: 'Thriller',
    year: 1982,
};

storiesOf('SongPlayer', module)
    .add('default', () =>
        <Player
            artist={song.artist}
            cover={song.cover}
            handleOnMoveToNext={action('moved-to-next')}
            handleOnMoveToPrevious={action('moved-to-previous')}
            handleOnPlay={action('play')}
            handleOnPause={action('pause')}
            socialUrl={process.env.URL}
            title={song.title}
        />
    )
    .add('playing', () =>
        <Player
            artist={song.artist}
            cover={song.cover}
            handleOnMoveToNext={action('moved-to-next')}
            handleOnMoveToPrevious={action('moved-to-previous')}
            handleOnPlay={action('play')}
            handleOnPause={action('pause')}
            playing={true}
            socialUrl={process.env.URL}
            title={song.title}
        />
    )
;