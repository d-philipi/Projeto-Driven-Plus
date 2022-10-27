import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ContainerLogin } from '../styled-components/styleds';

export default function Login(){
    function fazerLogin(e){
        e.preventDefault();
        console.log("Fiz login!")
    }
    return (
        <ContainerLogin>
            <img src="./img/Driven_white 1.png" alt='Logo do site'/>
            <form onSubmit={fazerLogin}>
                <input type="email" required placeholder="Digite o seu email..."/>
                <input type="password" required placeholder="Digite a sua senha..."/>
                <button type='submit'>ENTRAR</button>  
            </form>
            <Link to={"/sign-up"}>
                <p>Não possuí uma conta? Cadastre-se</p>
            </Link>
        </ContainerLogin>
    )
}