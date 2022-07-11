import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem"
import styled from "styled-components";
import Context from "../contexts/Context"; 

function Cart() {
    const { data } = useContext(Context);
    const [cartItems, setCartItems] = useState([]);
    const [totalCost, setTotalCost] = useState();
    const URL = "https://back-project-boot-style-back.herokuapp.com/cart";
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
            <CartHeader>
                <h1>Seu carrinho</h1>
            </CartHeader>
            {RenderItems()}
            {RenderFooter()}
        </Container>
    )
}

const EmptyContainer = styled.div`
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

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