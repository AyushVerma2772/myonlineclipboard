import React from 'react';
import styled from 'styled-components';
import { mobile1 } from '../styles/Responsive';
import FetchBox from './FetchBox';
import SendBox from './SendBox';

const Wrapper = styled.div`
    width: 90%;
    margin: 4rem auto;
    justify-content: space-between;
    ${mobile1({flexDirection: 'column', gap: '5rem'})}
`;

const Main = () => {
    return (
        <>
            <Wrapper className='d-flex' >
                <SendBox />
                <FetchBox />
            </Wrapper>
        </>
    )
}

export default Main