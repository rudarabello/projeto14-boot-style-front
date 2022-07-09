import { useState } from "react";
import { CartOutline } from "react-ionicons";
import onClickOutside from "react-onclickoutside";
import styled from "styled-components";

function DisplayCart() {
    const [showCart, setShowCart] = useState(false);
    const toggle = () => {
        if (showCart === false) {
            setShowCart(true);
        } else {setShowCart(false)};
    }

    Cart.handleClickOutside = () => setShowCart(false);

    return (
        <div>
            <CartOutline onClick={toggle}
                    color={'#00000'}
                    height="50px"
                    width="50px" />
            { showCart ? <Cart /> : null }
        </div>
    )

}

const clickOutsideCart = {
    handleClickOutside: () => Cart.handleClickOutside,
};

const Cart = () => {
    return (
        <Container>
            <div><h1>Seu carrinho</h1></div>
            <div>Itens do carrinho</div>
            <total>Total: $$$</total>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 50vw;
    background-color: #AD7373;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #FFFFFF;
    position: fixed;
    z-index: 2;
    top: 162px;
    right: 0;
`

export default onClickOutside(DisplayCart, clickOutsideCart);