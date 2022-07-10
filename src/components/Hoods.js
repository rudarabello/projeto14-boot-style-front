import {React, useState, useEffect} from "react"
import axios from "axios";
import styled from "styled-components";

export default function Hoods() {
  const [productsList, setProductsList] = useState([]);
    const URL = "http://localhost:5000/products";

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

  const Hood = productsList.map((product) => {
    return (
      <ProductContainer>
          <img src={product.image}/>
          <Tittle>{product.product}</Tittle>
          <Price>{product.price}</Price>
          <Button>COMPRAR</Button>
      </ProductContainer>
    )
  })

  return(
      <Container>
          {Hood}
      </Container>
  );
}

const Container = styled.div`
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