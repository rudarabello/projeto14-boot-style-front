import { React, useState, useEffect } from "react"
import axios from "axios";
import styled from "styled-components";

export default function Boots() {
  const [productsList, setProductsList] = useState([]);
  const URL = "https://back-project-boot-style-back.herokuapp.com/products";

  useEffect(() => {
    async function GetBoots() {
      const config = {
        headers: {
          category: "Botas"
        }
      };
      const { data } = await axios.get(URL, config);
      setProductsList(data)
    }
    GetBoots();
  }, [])
  return (
    <Container>
      {productsList.map(p => { return (
        <ProductContainer>
          <img src={p.image} />
          <Tittle >{p.product}</Tittle>
          <Price >{p.price}</Price>
          <Button>COMPRAR</Button>
        </ ProductContainer>)
      })}
    </Container>
  );
};

const Container = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    height: 276px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    overflow-x: scroll;
    padding-left: 380px;
    img {
        height: 185px;
        width: 185px;
    }
`

const ProductContainer = styled.div`
    padding-left: 80px;
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