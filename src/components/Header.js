import React from 'react'
import styled from 'styled-components'
import logo from '../assets/Boots.png'
import DisplayCart from "./Cart";
import Dropdown from "./Dropdown";

function Header() {
    return (
            <Container>
                <Dropdown />
                <Logo><img src={logo} width="100%" /></Logo>
                <DisplayCart />
            </Container>
    )
}

export default Header

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #AD7373;
`;
const Logo = styled.div`
    display: flex;
    width: 100%;
    img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

`;