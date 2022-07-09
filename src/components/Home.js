import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Banner from './Banner';
import Products from './Products.js';
import Footer from './Footer';

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