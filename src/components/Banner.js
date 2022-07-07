import React from 'react'
import styled from 'styled-components'

const Banner = () => {
  return (
    <Container>

      
      <Img>
        <img src='https://img.lojasrenner.com.br/banner/01-home/20220704_HOME_CARROSSEL_PROMO_SALDOS_MOB.jpg' loading='eager' alt='banner entrada' width="100%" max-height="350px" />
      </Img>
      <Img>
        <img src='https://img.lojasrenner.com.br/banner/01-home/20220630_HOME_CARROSSEL_SALDOSRENOVADO_CALCADOS_GERAL_MOB.jpg' loading='eager' alt='banner entrada' width="100%" max-height="350px" />
      </Img>
    </Container>

  )
}

export default Banner

const Container = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
`;

const Img = styled.div`
box-sizing: border-box;
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
  
`;