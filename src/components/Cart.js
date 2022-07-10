import { TrashOutline } from "react-ionicons";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Cart() {
    return (
        <Container>
            <CartHeader>
                <h1>Seu carrinho</h1>
            </CartHeader>
            <CartItem>
                <LeftDiv>
                    <img src="https://www.cheaney.co.uk/images/cheaney-trudie-capped-derby-boot-in-black-calf-leather-p942-6626_zoom.jpg" alt="product" />
                    <span>Bota</span>
                </LeftDiv>
                <RightDiv>
                    <TrashOutline color={'#000000'}
                        height="15px"
                        width="15px" />
                    <span>R$99.90</span>
                </RightDiv>
            </CartItem>
            <CartItem>
                <LeftDiv>
                    <img src="https://www.cheaney.co.uk/images/cheaney-trudie-capped-derby-boot-in-black-calf-leather-p942-6626_zoom.jpg" alt="product" />
                    <span>Bota</span>
                </LeftDiv>
                <RightDiv>
                    <TrashOutline color={'#000000'}
                        height="15px"
                        width="15px" />
                    <span>R$99.90</span>
                </RightDiv>
            </CartItem>
            <CartTotal>
                <h2>Total:</h2>
                <h2>$$$</h2>
            </CartTotal>
            <CartFooter>
                <Confirm>
                    <h2>FINALIZAR COMPRA</h2>
                </Confirm>
                <Link to="/produtos"><h3>Ver mais produtos</h3></Link>
            </CartFooter>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #FFFFFF;
    border-top: 1px solid #FFFFFF; 
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 2;
    top: 100px;
    right: 0;
`

const CartHeader = styled.div`
    height: 50px;
    padding: 15px;
    background-color: #AD7373;
    display: flex;
    align-items: center;

    h1 {
        font-weight: 700;
        font-size: 16px;
        color: #000000;
    }   
`

const CartTotal = styled.div`
    margin: 20px;
    display: flex;
    justify-content: space-between;    

    h2 {
        font-weight: 700;
        font-size: 22px;
        color: #000000;
    }
`

const CartItem = styled.div`
    height: 115px;
    margin: 0 20px;
    padding: 25px 0;
    border-bottom: 1px solid #C4C1C1;
    display: flex;
    justify-content: space-between;

    img {
        height: 67px;
        width: 67px;
    }

    span {
        font-weight: 400;
        font-size: 14px;
        color: #000000;
    }
`

const LeftDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
`

const CartFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    

    h3 {
        margin-top: 10px;
        font-weight: 400;
        font-size: 14px;
        text-decoration-line: underline;
        color: #7C3333;
    }
`

const Confirm = styled.div`
    height: 40px;
    padding: 0 45px;
    border-radius: 20px;
    background-color: #AD7373;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        font-weight: 700;
        font-size: 18px;
        color: #FFFFFF;
    }
`

export default Cart;