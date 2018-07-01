import * as React from 'react';
import styled from 'styled-components';

import { PropsFromDispatch, PropsFromState } from '@app/layout/containers/App';
import SearcherView from '@app/song/containers/SearcherView';
import PlayerView from '@app/song/containers/PlayerView';

export const App = ({
    view,
}: Props): JSX.Element =>
    <Wrapper>
        { view === 'searcher' &&
            <SearcherView />
        }
        { view === 'player' &&
            <PlayerView />
        }
    </Wrapper>
;

export type Props = PropsFromState & PropsFromDispatch;

const Wrapper = styled.div`
    background-color: #f7f7f7;
    min-height: 100vh;
    padding: 10vh 5vw;

    @media only screen and (min-width: 600px) {
        padding: 10vh 5vw;
    }
    
    @media only screen and (min-width: 768px) {
        padding: 10vh 10vw;
    }
    
    @media only screen and (min-width: 992px) {
        padding: 10vh 15vw;
    }
    
    @media only screen and (min-width: 1200px) {
        padding: 10vh 20vw;
    }
`;
