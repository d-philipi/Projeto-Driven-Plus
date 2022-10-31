import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MyContext from '../context/mycontext';

export default function Home(){

    const {usuario, plano, config, setPlano} = useContext(MyContext);
    const navigate = useNavigate();

    function mudarPlano(){
        navigate("/subscriptions");
    }

    function cancelarPlano(){
        axios.delete(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`,config)
        .then(cancelarSucesso)
        .catch(cancelarFalha)
    }

    function cancelarSucesso(resposta){
        setPlano("");
        navigate("/subscriptions")
    }

    function cancelarFalha(erro){
        alert(erro.response.mensage);
    }

    return (
        <ContainerHome>
            <Topo>
                <img src={plano.image} alt=''/>
                <ion-icon name="person-circle"></ion-icon>
            </Topo>
            <p>Olá,{usuario.name}</p>
            <Beneficios>
                {plano.perks.map((p) => <a key={p.id} href={p.link}>{p.title}</a>)}
            </Beneficios>
            <Sidebar>
                <Mudar onClick={mudarPlano}>Mudar plano</Mudar>
                <Cancelar onClick={cancelarPlano}>Cancelar plano</Cancelar>
            </Sidebar>
        </ContainerHome>
    )
}

const ContainerHome = styled.div`
    padding-top: 30px;
    p{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #FFFFFF;
        text-align: center;
    }
`

const Topo = styled.div`
    width: 100%;
    height: 80px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 100px;
    }
    ion-icon{
        height: 50px;
        width: 50px;
    }
`

const Beneficios = styled.div`
    width: 100%;
    height: 427px;
    display: flex;
    flex-direction: column;
    align-items: center;
    a{
        width: 299px;
        height: 52px;
        background: #FF4791;
        border-radius: 8px;
        border: 1px solid #FF4791;
        margin: 7px 0;

        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Sidebar = styled.div`
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Mudar = styled.button`
    width: 299px;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
    border: 1px solid #FF4791;
    margin: 7px 0;
    cursor:pointer;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
`

const Cancelar = styled.button`
    width: 299px;
    height: 52px;
    background: #FF4747;
    border-radius: 8px;
    border: 1px solid #FF4747;
    margin: 7px 0;
    cursor:pointer;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
`