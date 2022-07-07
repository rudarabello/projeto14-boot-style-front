import "../style/style.css";
import styled from 'styled-components';
import React from 'react'
import { Carousel } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


const Banner = () => {
  const navigate = useNavigate();
  return (
      <Container>
        <Carousel  controls ={false} fade={true} indicators={false} pause={true}>
        <Carousel.Item interval={5000}>
          <img onClick={() => navigate('/produtos')}
            className="d-block w-100"
            src='https://img.lojasrenner.com.br/banner/01-home/20220704_HOME_CARROSSEL_PROMO_SALDOS_MOB.jpg'alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img onClick={() => navigate('/produtos')}
            className="d-block w-100"
            src='https://img.lojasrenner.com.br/banner/01-home/20220630_HOME_CARROSSEL_SALDOSRENOVADO_CALCADOS_GERAL_MOB.jpg' alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img onClick={() => navigate('/produtos')}
            className="d-block w-100"
            src='https://img.lojasrenner.com.br/banner/01-home/20220707_HOME_CARROSSEL_SALDOS_CALCADOS_GERAL_MOB.jpg' alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      </Container>
  )
}
export default Banner

const Container = styled.div`
  width: 100%;
  height: 100%;
`;