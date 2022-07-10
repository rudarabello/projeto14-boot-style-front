import {React, useState, useEffect} from "react"
import styled from "styled-components";
import axios from "axios";

export default function Products(){
    const [productsList, setProductsList] = useState([
        {
            id: 1,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa1gFCmk4f7E2Xzk3LLy5zExrA-2ivcKOnAA&usqp=CAU",
            tittle: "Botas",
            price: "89.90",
            collection: "botas"
        },
        {
            id: 2,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsnwrivsOQA0a4guEb9EkGJljaXEDXhtbNSQ&usqp=CAU",
            tittle: "Botas 02",
            price: "109.90",
            collection: "botas"
        },
        {
            id: 1,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa1gFCmk4f7E2Xzk3LLy5zExrA-2ivcKOnAA&usqp=CAU",
            tittle: "Botas",
            price: "89.90",
            collection: "botas"
        },
        {
            id: 1,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa1gFCmk4f7E2Xzk3LLy5zExrA-2ivcKOnAA&usqp=CAU",
            tittle: "Botas",
            price: "89.90",
            collection: "botas"
        },
        {
            id: 1,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa1gFCmk4f7E2Xzk3LLy5zExrA-2ivcKOnAA&usqp=CAU",
            tittle: "Botas",
            price: "89.90",
            collection: "botas"
        },
    ])

     
    // useEffect(() => {
    //     const config = {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     }

    //     const URL = "https://localhost/5000/products"
    //     const promise = axios.get(URL, config);

    //     promise.then((res) => {
    //         const { data } = res;
    //         setProductsList([...data]);
    //     });

    //     promise.catch((err) => {
    //         alert(err.message);
    //     });
    // }, []);

    console.log(productsList.length);

    function buildProductsList(){
        if(productsList.length > 0){
            return productsList.map(product => {
                const { id, url, tittle, price, collection} = product;
                return <Product key={id} id={id} url={url} tittle={tittle} price={price} collection={collection}/>
            })
        } else {
            return <p>LOADING ...</p>
        }
    }

    return(
        <Container>
            {buildProductsList()}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
`

function Product(props){
    const {id, url, tittle, price, collection} = props;

    return (
        <ProductContainer>
            <img src={url}/>
            <Tittle>{tittle}</Tittle>
            <Price>{price}</Price>
            <Button>COMPRAR</Button>
        </ProductContainer>
    );
}


const ProductContainer = styled.div`
    width: 185px;
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