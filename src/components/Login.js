import { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Context from "../contexts/Context";
import logo from "../assets/Boots.png";
import Footer from "./Footer";




export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const localUser = localStorage.getItem("user");
    const navigate = useNavigate()
    const { data, setData } = useContext(Context);
    const URL = "http://localhost:5000/login";
    const tempAxiosFunction = useRef();
    const axiosFunction = () => {
        if (localUser !== null) {
            const localUserParse = JSON.parse(localUser);
            setEmail(localUserParse.email);
            setPassword(localUserParse.password);
        }
    }
    tempAxiosFunction.current = axiosFunction;
    useEffect(() => {
        tempAxiosFunction.current();
    }, []);
    function handleLogin(e) {
        e.preventDefault();
        const user = {
            email,
            password
        }
        const promise = axios.post(URL, user);
        promise.then(response => GoTo(response.data));
        promise.catch(error => alert(error));
    }
    function GoTo(data) {
        setData(data);
        const user = { email, password };
        localStorage.removeItem("user");
        const userStrigify = JSON.stringify(user);
        localStorage.setItem("user", userStrigify);
        alert("Login realizado com sucesso!")
        navigate('/');
    };
    return (
        <Container>
            <Page>
                <img onClick={() => navigate('/')} src={logo} alt="Logo loja" />
                <Form onSubmit={handleLogin}>
                    <Input
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                        placeholder="E-mail"
                        type="email"
                        required
                        autoComplete="email" />
                    <Input
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        value={password}
                        placeholder="Senha"
                        type="password"
                        required
                        autoComplete="password" />
                    <FormButton type="submit">ENTRAR</FormButton>
                </Form>
                <Linkto>
                    <Link to="/cadastro">
                        <a href="https://git.heroku.com/boot-style-back.git/home">
                            Primeira vez? Cadastre-se!
                        </a>
                    </Link>
                </Linkto>
            </Page>
            <Footer />
        </Container>
    )
};

const Container = styled.div`
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
    margin-top: 150px;
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
margin-bottom: 120px;
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