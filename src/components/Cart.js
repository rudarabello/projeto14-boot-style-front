import { useState } from "react";
import { CartOutline } from "react-ionicons";
import onClickOutside from "react-onclickoutside";
import styled from "styled-components";

function Cart() {
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
            { showCart ? <Xablau /> : null }
        </div>
    )

}

const clickOutsideCart = {
    handleClickOutside: () => Cart.handleClickOutside,
};

const Xablau = () => {
    return (
        <Container>
            <h1>Shopping cart</h1>
        </Container>
    )
}

const Container = styled.div`
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

export default onClickOutside(Cart, clickOutsideCart);