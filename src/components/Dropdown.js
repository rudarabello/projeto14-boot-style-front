import { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

function Dropdown() {
    const [showMenu, setShowMenu] = useState(false);
    const onClick = () => {
        if (showMenu === false) {
            setShowMenu(true);
        } else {setShowMenu(false)};
    }

    return (
        <>
            <Icon>
                <ion-icon name="menu-sharp" onClick={onClick}></ion-icon>  
            </Icon>
            { showMenu ? <Menu /> : null}
        </>
    )
}

const Menu = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const onClick = () => {
        if (showSubMenu === false) {
            setShowSubMenu(true);
        } else {setShowSubMenu(false)};
    }

    return (
        <Container>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/">Cadastro</Link></li>
                <li><Link to="/">Usuário</Link></li>
                <li onClick={onClick}>Categorias</li>
                { showSubMenu ? <SubMenu /> : null}
            </ul>
        </Container>
    )
}

const SubMenu = () => (
    <SubContainer>
        <ul>
            <li><Link to="/">Botas</Link></li>
            <li><Link to="/">Moletons</Link></li>
        </ul>
    </SubContainer>
)

const Container = styled.div`
    height: 100vh;
    width: 50vw;
    background-color: #AD7373;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #FFFFFF;

    li {
        height: 30px;
        padding-left: 15px;
        border-bottom: 1px solid #FFFFFF;
        display: flex;
        align-items: center;
    }

    a {
        color: #FFFFFF;
        text-decoration: none;    
    }
`

const SubContainer = styled.div`
    font-size: 14px;

    li {
        height: 25px;
        padding-left: 30px;
    }
`

const Icon = styled.div`
    ion-icon {
        font-size: 32px;
        color: #000000;
    }
`

export default Dropdown;