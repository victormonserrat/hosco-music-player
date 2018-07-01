import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { App } from '@app/layout/components/App';
import { View } from '@app/layout/reducer';
import { State } from '@app/reducer';

const mapStateToProps = (
    { layout: { view } }: State
): PropsFromState => ({
    view: view,
});

export interface PropsFromState {
    view: View,
}

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
});

export interface PropsFromDispatch {
}

export default connect(mapStateToProps, mapDispatchToProps)(App);