import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ContainerSign } from '../styled-components/styleds';

export default function Cadastro(){
    function fazerCadastro(){
        console.log("Me cadastrei!");
    }
    return (
        <ContainerSign>
            <form onSubmit={fazerCadastro}>
                <input type="text" required placeholder="Digite o seu nome..."/>
                <input type="number" required placeholder="Digite seu CPF..."/>
                <input type="email" required placeholder="Digite o seu email..."/>
                <input type="password" required placeholder="Digite a sua senha..."/>
                <button type='submit'>CADASTRAR</button>
            </form>
            <Link to={"/"}>
                <p>Já possuí uma conta? Entre</p>
            </Link>
        </ContainerSign>
    )
}