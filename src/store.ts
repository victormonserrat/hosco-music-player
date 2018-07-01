import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer, State } from '@app/reducer';
import { saga, sagaMiddleware } from '@app/saga';

export const store: Store<State> = createStore(reducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(saga);