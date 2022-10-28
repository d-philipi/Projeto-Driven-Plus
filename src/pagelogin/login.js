import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ContainerLogin } from '../styled-components/styleds';

export default function Login({email, setEmail, senha, setSenha, setUsuario}){

    const navigate = useNavigate();

    function fazerLogin(e){
        e.preventDefault();
        
        axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', {
            email: email,
            password: senha,
        }).then(LoginSucesso).catch(loginFalha);
    }

    function LoginSucesso(resposta){
        setUsuario(resposta.data);
        navigate('/subscriptions');
        if (resposta.data.membership == null){
            navigate('/subscriptions');
        }else{
            console.log("Plano fixo");
            //navigate(`/subscriptions/${resposta.data.membership.id}`);
        }
    }

    function loginFalha(erro){
        console.log(erro);
        //alert(erro.response.data.message);
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