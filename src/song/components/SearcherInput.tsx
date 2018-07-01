import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { Input } from 'semantic-ui-react';

export const SearcherInput = ({
    input,
    searching = false,
}: Props): JSX.Element =>
    <Input
        icon='music'
        iconPosition='left'
        input={input}
        fluid
        loading={searching}
        placeholder='Search songs...'
    />
;

export interface Props extends WrappedFieldProps {
    searching?: boolean,
}
