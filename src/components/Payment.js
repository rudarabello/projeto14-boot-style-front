import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import CartItem from "./CartItem"
import Context from "../contexts/Context"; 

function Payment() {
    const { data } = useContext(Context);
    const [cartItems, setCartItems] = useState([]);
    const [totalCost, setTotalCost] = useState();
    const URL = "http://localhost:5000/cart";
    const config = {
        headers: {
            Authorization: `Bearer ${data.token}`
        }
    };

    useEffect(() => {
        const promise = axios.get(URL, config);
        promise.then(response => setCartItems(response.data));
        promise.catch(error => console.log(error));
    }, []);

    useEffect(() => {
        if (typeof(cartItems) === "object") {
            const prices = cartItems.map(({ price }) => { return price });
            let total = 0;
            for (let j = 0; j < prices.length; j++) {
                total += parseFloat(prices[j])
            }
            setTotalCost(total.toFixed(2));
        }
    }, [cartItems])

    function RenderItems() {
        if (typeof(cartItems) === "object") {
            return cartItems.map(({ product, image, price }, index) => <CartItem key={index} product={product} image={image} price={price} />);
        } else {
            return (
                <EmptyContainer>
                    <p>Seu carrinho está vazio</p>
                </EmptyContainer>    
            )
        }   
    }

    function RenderFooter() {
        if (typeof(cartItems) === "object") {
            return (
                <>
                    <CartTotal>
                        <h2>Total:</h2>
                        <h2>R$ {totalCost}</h2>
                    </CartTotal>
                    <CartFooter>
                        <Confirm>
                            <Link to="/pagamento"><h2>FINALIZAR COMPRA</h2></Link>
                        </Confirm>
                    </CartFooter>
                </>
            )
        }
    }


    return (
        <Container>
            <Header />
            <PaymentOptions>
                <h2>Forma de pagamento</h2>
                <button>Cartão de crédito</button>
                <button>Pix</button>
                <button>Boleto bancário</button>
            </PaymentOptions>
            <RenderContainer>
                <h2>Resumo do pedido</h2>
                {RenderItems()}
                {RenderFooter()}
            </RenderContainer>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;

    h2 {
        padding: 20px;
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 18px;
    }
`

const PaymentOptions = styled.div`
    width: 100vw;
    background-color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    display: flex;
    align-items: center;
    flex-direction: column;

    button {
        width: 280px;
        height: 45px;
        margin-bottom: 10px;
        padding-left: 15px;
        background-color: #FFFFFF;
        border: 1px solid #000000;
        border-radius: 5px;
        font-weight: 700;
        font-size: 14px;
        text-align: left;
        
    }
`

const RenderContainer = styled.div`
    width: 100vw;
    background-color: #FFFFFF;
    border-top: 1px solid #FFFFFF; 
    font-family: 'Inter', sans-serif;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const EmptyContainer = styled.div`
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-bottom: 20px;
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

export default Payment;