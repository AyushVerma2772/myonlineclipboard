import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { mobile1 } from '../styles/Responsive';
import { Button, CopyBtn, Heading3, Heading4, TextArea, TextBox } from './commonComp';
import copy from '../images/copy.png';
import check from '../images/check.png';
import { addDoc, collection } from "firebase/firestore";
import {db} from "../firebase-config";


export const Wrapper = styled.div`
    width: 45%;
    border: 0.1rem solid snow;
    border-radius: 1rem;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    ${mobile1({ width: '100%' })}
`;

const ButtonBox = styled.div`
    width: 95%;
`;



const SendBox = () => {

    const [textData, setTextData] = useState("");
    const [fetchID, setFetchID] = useState(0);
    const colRef = collection(db, "clipboardData")

    const copyImg = useRef();

    const copyFucn = () => {
        navigator.clipboard.writeText(textData);
        copyImg.current.src = check;

        setTimeout(() => {
            copyImg.current.src = copy;
        }, 1000);
    }

    const sendFunc = async () => {
        const id = Math.floor(10000 + Math.random() * 90000);
        await addDoc(colRef, {
            fetchNo: id.toString(),
            text: textData
        })

        setFetchID(id);
    }

    return (
        <>
            <Wrapper className='d-flex' >
                <Heading3>Send Text</Heading3>
                <TextBox>
                    <TextArea name="send-text" id="send-text" rows="9"
                        placeholder='Enter your text' value={textData}
                        onChange={e => setTextData(e.target.value)} ></TextArea>

                    <CopyBtn title='Copy' onClick={copyFucn}  >
                        <img ref={copyImg} src={copy} alt="" />
                    </CopyBtn>
                </TextBox>


                <ButtonBox>
                    <Button onClick={sendFunc}>Send</Button>
                    <Heading4>Fetch ID: {fetchID === 0 ? '' : fetchID}</Heading4>
                </ButtonBox>
            </Wrapper>
        </>
    )
}

export default SendBox