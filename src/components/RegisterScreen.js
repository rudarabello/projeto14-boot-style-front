import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RegisterScreen() {
    return (
        <Container>
            <p className='logo'>BS STORE</p>
            <RegisterForm />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .logo{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        margin-bottom: 20px;
    }
`

function RegisterForm() {
    const navigate = useNavigate();

    function register(event) {
        event.preventDefault();
        const URL = 'https://localhost:5000/usuarios';
        const promise = axios.post(URL, registerData);

        promise.then(() => {
            navigate("/");
        })

        promise.catch(() => {
            alert("Preenchido de forma incorreta ou usuário já foi cadastrado.");
        })

        setRegisterData()
    }

    const [registerData, setRegisterData] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: ""
    });

    const { email, name, password, confirmPassword} = registerData;

    function handleForm(e) {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <RegisterStyle onSubmit={register}>
             <input
                type="text"
                id='name'
                placeholder=' Nome'
                required
                name='name'
                onChange={handleForm}
                value={name}
            />
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
                id='password'
                placeholder=' Senha'
                required
                name='password'
                onChange={handleForm}
                value={password}
            />
            <input
                type="url"
                id='confirmPassword'
                placeholder=' Confirme a sua Senha'
                required
                name='confirmPassword'
                onChange={handleForm}
                value={confirmPassword}
            />

            <button type='submit'>CADASTRAR</button>

            <Link to={'/'}>
                <p>Já tem uma conta? Faça Login!</p>
            </Link>
        </RegisterStyle>
    );
}

const RegisterStyle = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

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

    p {
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline; 
        color: #7C3333;
    }
`