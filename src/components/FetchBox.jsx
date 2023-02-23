import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button, CopyBtn, Heading3, Input, TextArea, TextBox } from './commonComp';  
import { Wrapper } from './SendBox';
import copy from '../images/copy.png';
import check from '../images/check.png';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase-config';

const InputBox = styled.div`
    width: 95%;
    justify-content: space-between;
`;

const FetchBox = () => {

    const copyImg = useRef();
    const colRef = collection(db, "clipboardData");
    const [fetchID, setFetchID] = useState(0);
    const [data, setData] = useState([]);
    
    const fetchData = async () => {
        const q = query(colRef, where("fetchNo", "==", fetchID.toString()));
        const getData = await getDocs(q);
        setData(getData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    const copyFucn = () => {
        navigator.clipboard.writeText(data.length !== 0 ? data[0].text : "");
        copyImg.current.src = check;

        setTimeout(() => {
            copyImg.current.src = copy;
        }, 1000);
    }

    return (
        <>
            <Wrapper className='d-flex'>
                <Heading3>Fetch Text</Heading3>
                <TextBox>
                    <TextArea rows="9" placeholder='Enter fetch ID to fetch the data' disabled value={data.length !== 0 ? data[0].text : ""} ></TextArea>

                    <CopyBtn title='Copy' onClick={copyFucn} >
                        <img src={copy} ref={copyImg} alt="" />
                    </CopyBtn>
                </TextBox>

                <InputBox className='d-flex' >
                    <Input type="text" name="fetch-text" id="fetch-text" placeholder='Fetch ID' onChange={e => setFetchID(e.target.value)} />
                    <Button onClick={fetchData} >Fetch</Button>
                </InputBox>
            </Wrapper>
        </>
    )
}

export default FetchBox