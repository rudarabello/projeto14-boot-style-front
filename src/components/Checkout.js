import { useContext, useEffect, useState } from "react";
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cart from './Cart';
import Context from "../contexts/Context";  

export default function Checkout() {
    const { data } = useContext(Context);
    
    const navigate = useNavigate();
    function register(event) {
        const config = {
            headers: {
                Authorization: `Bearer ${data.token}`
            }
        };

        event.preventDefault();
        const URL = "https://back-project-boot-style-back.herokuapp.com/orders";
        const promise = axios.post(URL, registerOrder, config);
        promise.then(() => {
            navigate("/");
        })
        promise.catch(() => {
            alert("Preenchido de forma incorreta ou usuário já foi cadastrado.");
        })
        setRegisterOrder()
    }
    const [registerOrder, setRegisterOrder] = useState({
        phoneNumber: "",
        cep: "",
        city: "",
        andress: "",
        district: "",
        number: "",

        paymentMethod: "",

        cartItens: {}
    });
    const { phoneNumber, cep, city, andress, district, number, paymentMethod } = registerOrder;

    return (
        <Content>
            <ClientDataForm phoneNumber={phoneNumber} cep={cep} city={city} andress={andress} district={district} number={number} setRegisterOrder={setRegisterOrder} registerOrder={registerOrder} />
            <PaymentMethod paymentMethod={paymentMethod}/>
        </Content>
    )
}

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

function ClientDataForm(props) {
    const { phoneNumber, cep, city, andress, district, number, setRegisterOrder, registerOrder } = props;

    function handleForm(e) {
        setRegisterOrder({
            ...registerOrder,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <ClientDataBox>
            <p>Dados de Entrega:</p>
            <Input
                type="text"
                id='phoneNumber'
                placeholder=' Número do celular'
                required
                name='phoneNumber'
                onChange={handleForm}
                value={phoneNumber}
            />
            <Input
                type="text"
                id='cep'
                placeholder=' CEP'
                required
                name='cep'
                onChange={handleForm}
                value={cep}
            />
            <Input
                type="text"
                id='city'
                placeholder=' Cidade'
                required
                name='city'
                onChange={handleForm}
                value={city}
            />
            <Input
                type="text"
                id='andress'
                placeholder=' Endereço'
                required
                name='andress'
                onChange={handleForm}
                value={andress}
            />
            <Input
                type="text"
                id='district'
                placeholder=' Bairro'
                required
                name='district'
                onChange={handleForm}
                value={district}
            />
            <Input
                type="number"
                id='number'
                placeholder=' Número'
                required
                name='number'
                onChange={handleForm}
                value={number}
            />
        </ClientDataBox>
    )
}

const ClientDataBox = styled.div`
    max-width: 240px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 25px;

    p{
        font-weight: bold;
        font-size: 18px;
    }
`

const Input = styled.input`
width: 100%;
height: 45px;
background: white;
border: 1px solid #DBDBDB;
border-radius: 8px;
box-sizing: border-box;
padding: 11px;
margin-top: 20px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #7E7E7E;
`;

function PaymentMethod(props) {
    const{paymentMethod} = props;
    const PaymentMethodList = ["PIX", "BOLETO BANCÁRIO", "CARTÃO DE CRÉDITO"];


    return (
        <PaymentMethodContainer>
            {PaymentMethodList.map((method,index) => {
                return <PaymentMethodBox index={index} id={index} method={method} paymentMethod={paymentMethod}/>
            })}
        </PaymentMethodContainer>
    )
}

const PaymentMethodContainer = styled.div`

`

function PaymentMethodBox(props){
    const {id, method} = props
    const [selected, setSelected] = useState(false);

    function selectedMethod(){
        if (!selected) {
            setSelected(true);
        } else if (selected) {
            setSelected(false);
        }
    }

    return ( 
    <PaymentMethodBoxStyle  onClick={selectedMethod} status={selected}>
        <p>{method}</p>
    </PaymentMethodBoxStyle>
    )
}

const PaymentMethodBoxStyle = styled.div`
    width: 245px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #C4C1C1;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    background: ${props => props.status ? "#CFCFCF" : "FFFFFF"};
`


function OrderResume() {
    <OrderResumeBox>
        <Cart />
    </OrderResumeBox>
}

const OrderResumeBox = styled.div`

`