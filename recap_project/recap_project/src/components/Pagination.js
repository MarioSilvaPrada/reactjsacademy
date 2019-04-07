import React from 'react';
import styled from "styled-components";

const Pagination = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;

`
const NumberPage = styled.a`
    border: 2px solid transparent;
    padding: 10px;
    margin: 10px 0;

    &:hover {

        cursor: pointer;
        border-bottom: 2px solid #444444;
    }
`

const pageNumbers = [];

for (let i = 1; i <= 25; i++) {
    pageNumbers.push(<NumberPage key={i}>{i}</NumberPage>);
}

const Pages = () => (
    <Pagination>
        <NumberPage>previous</NumberPage>
        {pageNumbers}
        <NumberPage>next</NumberPage>

    </Pagination>
)

export default Pages;