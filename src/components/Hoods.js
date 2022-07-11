import {React, useState, useEffect} from "react"
import axios from "axios";
import styled from "styled-components";

export default function Hoods() {
  const [productsList, setProductsList] = useState([]);
    const URL = "https://back-project-boot-style-back.herokuapp.com/products";

  useEffect(() => {
    async function GetHoods() {
        const config = {
            headers:{
              category: "Moletons"
            }
          };
        const { data } = await axios.get(URL, config);
        setProductsList(data);
    }
    GetHoods();
  }, [])
  

  return(
      <Container>
      {productsList.map((product) => {
    return (
      <ProductContainer>
          <img src={product.image}/>
          <Tittle>{product.product}</Tittle>
          <Price>{product.price}</Price>
          <Button>COMPRAR</Button>
      </ProductContainer>)}
    )
  }
      </Container>
  );
}

const Container = styled.div`
    width: 100vw;
    overflow-y: scroll;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`

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