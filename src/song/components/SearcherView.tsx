import * as React from 'react';
import { Grid, Image, Message } from 'semantic-ui-react';
import { Field, Form, InjectedFormProps } from 'redux-form';

import { SearcherInput } from '@app/song/components/SearcherInput';
import { Table } from '@app/song/components/Table';
import { PropsFromDispatch, PropsFromState } from '@app/song/containers/SearcherView';

const logo = require('@assets/img/logo.png').toString();

export const SearcherView = ({
    handleOnSearchByTerm,
    handleOnSelectByIndex,
    handleSubmit,
    searching,
    songs,
}: Props): JSX.Element =>
    <Grid>
        <Grid.Row>
            <Grid.Column>
                <Image src={logo} />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Form onSubmit={handleSubmit(handleOnSearchByTerm)}>
                    <Field
                        component={SearcherInput}
                        name={'term'}
                        searching={searching}
                    />
                </Form>
                { songs && songs.length === 0 &&
                    <Message error>
                        No results found.
                    </Message>
                }
            </Grid.Column>
        </Grid.Row>
        { songs && songs.length > 0 &&
            <Grid.Row>
                <Grid.Column>
                    <Table songs={songs} handleOnSelectByIndex={handleOnSelectByIndex} />
                </Grid.Column>
            </Grid.Row>
        }
    </Grid>
;

export type Props = PropsFromState & PropsFromDispatch & InjectedFormProps;