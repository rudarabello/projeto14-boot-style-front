import { useState } from "react";
import { Link } from "react-router-dom";
import onClickOutside from "react-onclickoutside";
import { MenuOutline } from "react-ionicons";
import styled from "styled-components";

function Dropdown() {
    const [showMenu, setShowMenu] = useState(false);
    const toggle = () => {
        if (showMenu === false) {
            setShowMenu(true);
        } else {setShowMenu(false)};
    }

    Dropdown.handleClickOutside = () => setShowMenu(false);

    return (
        <div>
            <MenuOutline onClick={toggle}
                    color={'#00000'}
                    height="35px"
                    width="35px" />
            { showMenu ? <Menu /> : null }
        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => Dropdown.handleClickOutside,
};

const Menu = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const toggle = () => {
        if (showSubMenu === false) {
            setShowSubMenu(true);
        } else {setShowSubMenu(false)};
    }

    return (
        <Container>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/">Cadastro</Link></li>
                <li><Link to="/">Usuário</Link></li>
                <li onClick={toggle}>Categorias</li>
                { showSubMenu ? <SubMenu /> : null }
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
    width: 200px;
    background-color: #AD7373;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #FFFFFF;
    position: fixed;
    z-index: 2;
    top: 100px;
    left: 0;
    

    li {
        height: 30px;
        padding-left: 15px;
        border-top: 1px solid #FFFFFF;
        display: flex;
        align-items: center;
    }

    li:last-child {
        border-bottom: 1px solid #FFFFFF;
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

export default onClickOutside(Dropdown, clickOutsideConfig);