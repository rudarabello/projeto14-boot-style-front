import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Banner from './Banner';
import Boots from './Boots';
import Hoods from './Hoods';
import Footer from './Footer';

const Home = () => {
    return (
        <Container>
            <Header />
            <Banner />
            <Boots />
            <Hoods/>
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