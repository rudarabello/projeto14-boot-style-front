import React from 'react'
import styled from 'styled-components'
import logo from '../assets/Boots.png'
import { CartOutline } from 'react-ionicons'
import Dropdown from "./Dropdown";

function Header() {
    return (
            <Container>
                <Dropdown />
                <Logo><img src={logo} width="100%" /></Logo>
                <CartOutline color={'#00000'}
                    height="50px"
                    width="50px" />
            </Container>
    )
}

export default Header

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #AD7373;

`;
const Logo = styled.div`
    display: flex;

`;