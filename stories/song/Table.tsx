import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Table } from '@app/song/components/Table';

const songs = [
    {
        album: 'Thriller',
        artist: 'Michael Jackson',
        cover: 'https://is1-ssl.mzstatic.com/' +
            'image/thumb/Music128/v4/a6/60/4a/a6604a4e-c90d-4b32-ebff-1c8ebc6be615/source/500x500bb.jpg',
        genre: 'Pop',
        length: 357,
        price: 1.29,
        title: 'Thriller',
        track: 'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/' +
            'AudioPreview71/v4/d3/14/22/d3142293-0b9a-babc-9e3b-d304b7ff6012/mzaf_4648147054405747980.plus.aac.p.m4a',
        year: 1982,
    },
    {
        album: 'The Essential Michael Jackson',
        artist: 'Michael Jackson',
        cover: 'https://is2-ssl.mzstatic.com/' +
            'image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/500x500bb.jpg',
        genre: 'Pop',
        length: 294,
        price: 1.29,
        title: 'Billie Jean',
        track: 'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/' +
            'AudioPreview19/v4/41/cb/e3/41cbe381-2991-071b-7985-76afbbabab6a/mzaf_5021382539648526963.plus.aac.p.m4a',
        year: 1982,
    },
    {
        album: 'The Essential Michael Jackson',
        artist: 'Michael Jackson',
        cover: 'https://is2-ssl.mzstatic.com/' +
            'image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/500x500bb.jpg',
        genre: 'Pop',
        length: 258,
        price: 1.29,
        title: 'Smooth Criminal',
        track: 'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/' +
            'AudioPreview111/v4/97/cc/24/97cc2441-7e2a-4539-3d5a-c7ccaeec5564/mzaf_7852665412301268650.plus.aac.p.m4a',
        year: 1987,
    },
];

storiesOf('SongsTable', module)
    .add('default', () =>
        <Table
            handleOnSelectByIndex={action('song-selected')}
            songs={songs}
        />
    )
;