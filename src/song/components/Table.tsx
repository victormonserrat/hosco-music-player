import * as React from 'react';
import { Header, Image, Table as UITable } from 'semantic-ui-react';

import { Song } from '@app/song/reducer';

export class Table extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            column: undefined,
            direction: undefined,
        };
    }

    handleOnSortByColumn = (column: Column): void => {
        const { direction } = this.state;

        if(column !== this.state.column) {
            this.setState({
                column: column,
                direction: 'ascending',
            });
            return;
        }

        this.setState({
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        });
    };

    render() {
        const { handleOnSelectByIndex, songs } = this.props;
        const { column, direction } = this.state;

        const sortedSongs = [...songs].sort((a, b) => {
            if (
                direction === 'ascending' && a[column] < b[column] ||
                direction === 'descending' && a[column] > b[column]
            ) {
                return -1;
            }
            return 1;
        });

        return(
            <UITable
                basic={'very'}
                selectable
                sortable
                unstackable
            >
                <UITable.Header>
                    <UITable.Row>
                        <UITable.HeaderCell
                            onClick={() => this.handleOnSortByColumn('title')}
                            sorted={column === 'title' ? direction : null}
                        >
                            Song
                        </UITable.HeaderCell>
                        <UITable.HeaderCell
                            onClick={() => this.handleOnSortByColumn('length')}
                            sorted={column === 'length' ? direction : null}
                            textAlign={'center'}
                        >
                            Length
                        </UITable.HeaderCell>
                        <UITable.HeaderCell
                            onClick={() => this.handleOnSortByColumn('genre')}
                            sorted={column === 'genre' ? direction : null}
                            textAlign={'center'}
                        >
                            Genre
                        </UITable.HeaderCell>
                        <UITable.HeaderCell
                            onClick={() => this.handleOnSortByColumn('price')}
                            sorted={column === 'price' ? direction : null}
                            textAlign={'center'}
                        >
                            Price
                        </UITable.HeaderCell>
                    </UITable.Row>
                </UITable.Header>
                <UITable.Body>
                    { sortedSongs.map((song, index) =>
                        <UITable.Row
                            key={index}
                            onClick={() => handleOnSelectByIndex(songs.indexOf(song))}
                        >
                            <UITable.Cell>
                                <Header
                                    as={'h4'}
                                    image
                                >
                                    <Image
                                        rounded
                                        src={song.cover}
                                    />
                                    <Header.Content>
                                        {song.title} - {song.artist}
                                        <Header.Subheader>{song.album} · {song.year}</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </UITable.Cell>
                            <UITable.Cell textAlign={'center'}>
                                {~~(song.length / 60)}:{~~(song.length % 60) < 10 && '0'}{~~(song.length % 60)}
                            </UITable.Cell>
                            <UITable.Cell textAlign={'center'}>{song.genre}</UITable.Cell>
                            <UITable.Cell textAlign={'center'}>
                                {song.price > 0 ? `$${song.price}` : 'FREE'}
                            </UITable.Cell>
                        </UITable.Row>
                    )}
                </UITable.Body>
            </UITable>
        );
    }
}

export interface Props {
    handleOnSelectByIndex: (index: number) => any,
    songs: Song[],
}

export interface State {
    column: Column,
    direction: Direction,
}

export type Column =  'length' | 'genre' | 'price' | 'title';

export type Direction = 'ascending' | 'descending';
