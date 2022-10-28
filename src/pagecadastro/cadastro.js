import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ContainerSign } from '../styled-components/styleds';

export default function SignUp({email, setEmail, senha, setSenha, nome, setNome, cpf, setCpf}){

    const navigate = useNavigate();

    function fazerCadastro(e){
        e.preventDefault();

        axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up', {
            email: email,
            name: nome,
            cpf: cpf,
            password: senha
        }).then(CadastroSucesso).catch(cadastroFalha)
    }

    function CadastroSucesso(resposta){
        alert("Cadastro feito com sucesso!");
        navigate("/");
        setEmail("");
        setNome("");
        setCpf("");
        setSenha("");
    }

    function cadastroFalha(erro){
        console.log(erro.response);
        alert(erro.response.data.message);
        setEmail("");
        setNome("");
        setCpf("");
        setSenha("");
    }
    
    return (
        <ContainerSign>
            <form onSubmit={fazerCadastro}>
                <input type="text" required placeholder="Digite o seu nome..." value={nome} onChange={e => setNome(e.target.value)}/>
                <input type="number" required placeholder="Digite seu CPF..." value={cpf} onChange={e => setCpf(e.target.value)}/>
                <input type="email" required placeholder="Digite o seu email..." value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" required placeholder="Digite a sua senha..." value={senha} onChange={e => setSenha(e.target.value)}/>
                <button type='submit'>CADASTRAR</button>
            </form>
            <Link to={"/"}>
                <p>Já possuí uma conta? Entre</p>
            </Link>
        </ContainerSign>
    )
}