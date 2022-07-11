import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/Boots.png";
import Footer from "../components/Footer";


export default function RegisterScreen() {
    const navigate = useNavigate();
    function register(event) {
        event.preventDefault();
        const URL = "https://back-project-boot-style-back.herokuapp.com/usuarios";
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
    const { email, name, password, confirmPassword } = registerData;
    function handleForm(e) {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <ContainerL>
            <Page>
                <img onClick={() => navigate('/')} src={logo} alt="Logo loja" />
                <Form onSubmit={register}>
                    <Input
                        type="text"
                        id='name'
                        placeholder=' Nome'
                        required
                        name='name'
                        onChange={handleForm}
                        value={name}
                    />
                    <Input
                        type="email"
                        id='email'
                        placeholder=' Email'
                        required
                        name='email'
                        onChange={handleForm}
                        value={email}
                    />
                    <Input
                        type="text"
                        id='password'
                        placeholder=' Senha'
                        required
                        name='password'
                        onChange={handleForm}
                        value={password}
                    />
                    <Input
                        type="text"
                        id='confirmPassword'
                        placeholder=' Confirme a sua Senha'
                        required
                        name='confirmPassword'
                        onChange={handleForm}
                        value={confirmPassword}
                    />
                    <FormButton type='submit'>CADASTRAR</FormButton>
                    </Form>
                    <Linkto>
                        <Link to="/login">
                            <a href="https://git.heroku.com/boot-style-back.git/login">
                                Já tem uma conta? Faça Login!
                            </a>
                        </Link>
                    </Linkto>
                    <Footer />
                
            </Page>
        </ContainerL>
    );
}



const ContainerL = styled.div`
    height: 100vh;
`;
const Page = styled.div`
display: flex;
width: 100%;
align-items: center;
flex-direction: column;
justify-content: center;
align-items: center;

img{
    margin-top: 50px;
}
`;
const Form = styled.form`
max-width: 240px;
display: flex;
flex-direction: column;
gap: 6px;
margin-bottom: 25px;
`;
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
const FormButton = styled.button`
width: 100%;
height: 45px;
border: none;
background: #AD7373;
border-radius: 8px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
margin-top: 20px;
`;
const Linkto = styled.div`
text-decoration: none !important;
margin-bottom: 50px;
a{
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;
color: #000000;
text-decoration: none !important;
}
:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(999, 999, 999, 0.9);
    }
`;