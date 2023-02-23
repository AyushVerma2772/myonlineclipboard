import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
    background-color: #181823;
    border-top: 1px solid gray;
    text-align: center;
    padding: 1.5rem 0;
    width: 100%;
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    color: snow;
    a {
        color: #1abc9c;
    }
    position: sticky;
    bottom: 0;
`;

const Footer = () => {
  return (
    <>
        <Wrapper>
                Made with ❤️ by <a target="_blank" href="https://github.com/AyushVerma2772" rel="noreferrer">Ayush Verma</a>
        </Wrapper>
    </>
  )
}

export default Footer