import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CheckoutScreen(){
    return(
        <Content>
            <RegisterForm />
        </Content>
    );
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

function RegisterForm() {
    const navigate = useNavigate();

    function register(event) {
        event.preventDefault();
        const URL = 'https://localhost:5000/pedidos';
        const promise = axios.post(URL, registerData);

        promise.then(() => {
            navigate("/");
        })

        promise.catch(() => {
            alert("Preencha todos os dados para continuar com a sua compra");
        })

        setRegisterData()
    }

    const [registerData, setRegisterData] = useState({
        email: "",
        phoneNumber: "",
        cep: "",
        city: "",
        andress: "",
        district: "",
        number: ""
    });

    const { email, phoneNumber, cep, city, andress, district, number} = registerData;

    function handleForm(e) {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <RegisterStyle onSubmit={register}>
            
            <label>Dados de Contato:</label>
            <input
                type="email"
                id='email'
                placeholder=' Email'
                required
                name='email'
                onChange={handleForm}
                value={email}
            />
            <input
                type="text"
                id='phoneNumber'
                placeholder=' Número do celular'
                required
                name='phoneNumber'
                onChange={handleForm}
                value={phoneNumber}
            />

            <label>Dados de Entrega:</label>
            <input
                type="text"
                id='cep'
                placeholder=' CEP'
                required
                name='cep'
                onChange={handleForm}
                value={cep}
            />
            <input
                type="text"
                id='city'
                placeholder=' Cidade'
                required
                name='city'
                onChange={handleForm}
                value={city}
            />
            <input
                type="url"
                id='andress'
                placeholder=' Endereço'
                required
                name='andress'
                onChange={handleForm}
                value={andress}
            />
            <input
                type="url"
                id='district'
                placeholder=' Bairro'
                required
                name='district'
                onChange={handleForm}
                value={district}
            />
            <input
                type="number"
                id='number'
                placeholder=' Número'
                required
                name='number'
                onChange={handleForm}
                value={number}
            />

            <Link to={'/pagamento'}>
                <button type='submit'>CONTINUAR</button>
            </Link>

        </RegisterStyle>
    );
}

const RegisterStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: start;

    input{
        width: 280px;
        height: 45px;
        margin-bottom: 12px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }
    button {
        width: 280px;
        height: 45px;
        margin-bottom: 5px;
        background: #AD7373;
        border-radius: 5px;
        border-style: none;
        color: #FFFFFF;
        font-weight: bold;
        font-size: 20.976px;
    }
    label    {
        font-weight: bold;
        font-size: 20px;
        line-height: 17px;
        text-align: left;
        margin-bottom: 10px;
    }
`