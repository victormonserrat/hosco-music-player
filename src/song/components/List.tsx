import * as React from 'react';
import { Header, Image, Table } from 'semantic-ui-react';

import { Song } from '@app/song/reducer';

export const List = ({
    current,
    handleOnSelectByIndex,
    songs,
}: Props): JSX.Element =>
    <Table
        basic={'very'}
        selectable
        sortable
        unstackable
    >
        <Table.Body>
            { songs.map((song, index) =>
                <Table.Row
                    active={index === current}
                    key={index}
                    onClick={() => handleOnSelectByIndex(songs.indexOf(song))}
                >
                    <Table.Cell>
                        <Header
                            as={'h4'}
                            image
                        >
                            <Image
                                rounded
                                src={song.cover}
                            />
                            <Header.Content>
                                {song.title}
                                <Header.Subheader>{song.artist}</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell textAlign={'right'}>
                        {~~(song.length / 60)}:{~~(song.length % 60) < 10 && '0'}{~~(song.length % 60)}
                    </Table.Cell>
                </Table.Row>
            )}
        </Table.Body>
    </Table>
;

export interface Props {
    current: number,
    handleOnSelectByIndex: (index: number) => any,
    songs: Song[],
}