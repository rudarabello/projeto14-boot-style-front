import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Boots from '../components/Boots';
import Hoods from '../components/Hoods';

const Home = () => {
    return (
        <Container>
            <Header />
            <Banner />
            <Boots />
            <Hoods />
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