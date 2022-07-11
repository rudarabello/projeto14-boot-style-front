import React from 'react'
import styled from 'styled-components'
import logo from '../assets/Boots.png'
import DisplayCart from "./DisplayCart";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    return (
            <Container>
                <Dropdown />
                <Logo onClick={() => navigate('/')} ><img src={logo} width="40%" /></Logo>
                <DisplayCart />
            </Container>
    )
}

export default Header

const Container = styled.div`
    height: 100px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    background-color: #AD7373;
    padding-left: 20px;
    padding-right: 20px;
`;
const Logo = styled.div`
    display: flex;
    width: 100%;
    img {
    display: block;
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
}

`;