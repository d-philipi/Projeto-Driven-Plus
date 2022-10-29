import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import MyContext from '../context/mycontext';
import ListaPlanos from './listaplanos';

export default function Planos(){

    return (
        <ContainerPlanos>
            <h1>Escolha seu Plano</h1>
            <ListaPlanos/>
        </ContainerPlanos>
    )
}

const ContainerPlanos = styled.div`
    width: 100%;
    height: 667px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        color: #FFFFFF;
    }
`