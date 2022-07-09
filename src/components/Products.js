import {React, useState} from "react"
import styled from "styled-components";

export default function Products(){
    const ProductsList = useState([
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
        }
    ])

    function builsProductsList(){
        if(ProductsList.length > 0){
            return ProductsList.map(product => {
                const { id, url, tittle, price, collection} = product;
                return <Product key={id} id={id} url={url} tittle={tittle} price={price} collection={collection}/>
            })
        } else {
            return <p>LOADING ...</p>
        }
    }

    return(
        <Container>
            {builsProductsList}
        </Container>
    )
    }

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

function Product(props){
    const {id, url, tittle, price, collection} = props;

    return (
        <ProductContainer>
            <img src={url}/>
            <Tittle>{tittle}</Tittle>
            <Price>{price}</Price>
            <Button></Button>
        </ProductContainer>
    )
}

const ProductContainer = styled.div`
    width: 185px;
    height: 276px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Tittle = styled.p`

`
const Price = styled.p`

`
const Button = styled.button`
    width: 133px;
    height: 26px;
    background: #AD7373;
    border-radius: 10px;    
`