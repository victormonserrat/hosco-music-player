import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { reduxForm } from 'redux-form';

import { State } from '@app/reducer';
import { searchByTerm } from '@app/song/actions/search-by-term';
import { selectByIndex } from '@app/song/actions/select-by-index';
import { SearcherView } from '@app/song/components/SearcherView';
import { Song } from '@app/song/reducer';

const mapStateToProps = (
    { song: { searching, songs } }: State
): PropsFromState => ({
    searching,
    songs,
});

export interface PropsFromState {
    searching: boolean,
    songs?: Song[],
}

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
    handleOnSearchByTerm: ({ term }) => dispatch(searchByTerm(term)),
    handleOnSelectByIndex: index => dispatch(selectByIndex(index)),
});

export interface PropsFromDispatch {
    handleOnSearchByTerm: (values: {term: string}) => AnyAction,
    handleOnSelectByIndex: (index: number) => AnyAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: 'searcher',
    })(SearcherView)
);