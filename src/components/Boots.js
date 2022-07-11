import {React, useState, useEffect} from "react"
import axios from "axios";
import styled from "styled-components";

export default function Boots() {
  const [productsList, setProductsList] = useState([]);
    const URL = "http://localhost:5000/products";

  useEffect(() => {
    async function GetBoots() {
        const config = {
            headers:{
              category: "Botas"
            }
          };
        const { data } = await axios.get(URL, config);
        setProductsList(data);
    }
    GetBoots();
  }, [])

  const Boot = productsList.map((product) => {
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
          {Boot}
      </Container>
  );
}

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    overflow-y: scroll;
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