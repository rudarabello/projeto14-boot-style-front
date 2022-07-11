import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Products from '../components/Products';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <Container>
            <Header />
            <Banner />
            <Products />
            <Footer />
        </Container>
    );
}

export default Home

const Container = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
`;