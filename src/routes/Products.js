import { React, useState, useEffect } from "react"
import axios from "axios";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Products() {
    const [productsList, setProductsList] = useState([]);
    const URL = "https://back-project-boot-style-back.herokuapp.com/allproducts";

    useEffect(() => {
        async function GetHoods() {
            const { data } = await axios.get(URL);
            setProductsList(data);
        }
        GetHoods();
    }, [])


    return (
        <><Header /><Container>
            {productsList.map((product) => {
                return (
                    <ProductContainer>
                        <img src={product.image} />
                        <Tittle>{product.product}</Tittle>
                        <Price>{product.price}</Price>
                        <Button>COMPRAR</Button>
                    </ProductContainer>);
            })}
        </Container><Footer /></>
    );
}

const Container = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    overflow-y: scroll;
`
const ProductContainer = styled.div`
    min-width: 250px;
    height: 276px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    img {
        height: 185px;
        width: 185px;
    }
`
const Tittle = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
`
const Price = styled.p`
    font-weight: bold;
`
const Button = styled.button`
    width: 133px;
    height: 26px;
    background: #AD7373;
    border-radius: 10px;    

    color: #FFFFFF;
    font-weight: bold;
    
    border-style: none;
`