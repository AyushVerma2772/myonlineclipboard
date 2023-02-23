import styled from "styled-components";

export const Heading1 = styled.h1`
    text-align: center;
    font-size: 4.8rem;
    margin: 3rem 0;
    color: #1abc9c;
`;

export const Heading3 = styled.h3`
    font-size: 2.3rem;
    font-weight: lighter;
    color: snow;
`;

export const Heading4 = styled.h3`
    font-size: 2rem;
    color: snow;
    display: inline-block;
    margin-left: 2rem;
    font-weight: lighter;
`;

export const TextBox = styled.div`
    width: 100%;
    position: relative;
`;

export const TextArea = styled.textarea`
    width: 100%;
    border-radius: 0.5rem;
    font-size: 1.7rem;
    padding: 0.5rem;
    color: black;
    &:focus{
        outline: none;
    }
    
    &:disabled {
        background-color: #e2e2e2;
    }
`;

export const Button = styled.button`
    color: snow;
    background-color: #1abc9c;
    border-radius: 0.5rem;
    font-size: 1.75rem;
    padding: 0.3rem 2.5rem;
    cursor: pointer;
    border: 0;
`;

export const Input = styled.input`

    font-size: 1.75rem;
    padding: 0.3rem 0.5rem;
    background-color: transparent;
    border: 0;
    border-bottom: 0.2rem solid #1abc9c;
    color: snow;
    width: 70%;
    letter-spacing: 0.1rem;

    &:focus{
         outline: none;
    }
`;

export const CopyBtn = styled.button`
    position: absolute;
    cursor: pointer;
    top: 2%;
    right: 2%;
    img {
        width: 3.3rem;
    }
    opacity: 0.8;
    border: 0;
    background-color: transparent;
`;