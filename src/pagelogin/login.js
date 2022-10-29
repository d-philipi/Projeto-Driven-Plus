import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ContainerLogin } from '../styled-components/styleds';
import MyContext from '../context/mycontext';

export default function Login({email, setEmail, senha, setSenha, setUsuario}){

    const navigate = useNavigate();
    const {token, manterLogado} = useContext(MyContext);

    useEffect(()=>{
        if (token != null){

            const userSerializado = localStorage.getItem('usuario');
            const user = JSON.parse(userSerializado);

            setUsuario(user);

            if (user.membership == null){
                console.log("Esse inscrito não possui plano");
                navigate('/subscriptions');
            }else{
                console.log("Plano fixo");
                navigate('/home');
            }
        }
    },[]);

    function fazerLogin(e){
        e.preventDefault();
        
        axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', {
            email: email,
            password: senha,
        }).then(LoginSucesso).catch(loginFalha);
    }

    function LoginSucesso(resposta){
        setUsuario(resposta.data);
        manterLogado(resposta.data.token);

        const user = resposta.data;
        const userSerializado = JSON.stringify(user);
        localStorage.setItem('usuario', userSerializado);

        if (resposta.data.membership == null){
            console.log("Esse inscrito não possui plano");
            navigate('/subscriptions');
        }else{
            console.log("Esse inscrito já possui um plano");
            navigate('/home');
        }
    }

    function loginFalha(erro){
        alert(erro.response.data.message);
    }

    return (
        <ContainerLogin>
            <img src="./img/Driven_white 1.png" alt='Logo do site'/>
            <form onSubmit={fazerLogin}>
                <input type="email" required placeholder="Digite o seu email..." value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" required placeholder="Digite a sua senha..." value={senha} onChange={e => setSenha(e.target.value)}/>
                <button type='submit'>ENTRAR</button>  
            </form>
            <Link to={"/sign-up"}>
                <p>Não possuí uma conta? Cadastre-se</p>
            </Link>
        </ContainerLogin>
    )
}