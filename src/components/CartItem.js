import styled from "styled-components";

export default function CartItem({ product, price, image }) {

    return (
        <Container>
            <LeftDiv>
                <img src={image} alt="product" />
                <span>{product}</span>
            </LeftDiv>
            <RightDiv>
                <span>{price}</span>
            </RightDiv>
        </Container>
    )
};

const Container = styled.div`
    height: 115px;
    margin: 0 20px;
    padding: 25px 0;
    border-bottom: 1px solid #C4C1C1;
    display: flex;
    justify-content: space-between;

    img {
        height: 67px;
        width: 67px;
    }

    span {
        font-weight: 400;
        font-size: 14px;
        color: #000000;
    }
`

const LeftDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`