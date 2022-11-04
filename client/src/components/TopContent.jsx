import styled from "styled-components";
import React from 'react';
import { TopText } from "../data";
import { Link } from "react-router-dom";

const TopContainer = styled.div`
margin-top: 30px;
margin-bottom:100px;
background-color: #dcd9da;
`;
const Walp = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
`;
const Col2 = styled.div`
    flex-basis: 50%;
    min-width: 300px;
    padding-left: 50px;
`;
const ColH1 = styled.h1`
    font-size: 60px;
    line-height: 75px;
    margin: 30px 0;
`;

const ColP = styled.p``;

const TopBtn = styled.button`
background: linear-gradient(180deg, rgb(187, 83, 45), sandybrown);
    display: inline-block;
    padding: 10px 30px;
    margin: 30px 0;
    border-radius: 40px;
    cursor: pointer;
`;

const TopContent = () => {
  return (
    <TopContainer>
        <Walp>
           {TopText.map((text, id) => (
            <>
             <Col2 key={id}>
             <ColH1>{text.title1} <br/> {text.title2}</ColH1>
             <ColP>{text.desc}</ColP>
          </Col2>
          <Link to="/cart">
          <TopBtn>{text.btnText} &#9756;</TopBtn>
          </Link>
          </>
           ))}
        </Walp>
    </TopContainer>
  )
}

export default TopContent