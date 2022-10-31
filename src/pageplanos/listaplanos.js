import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import MyContext from '../context/mycontext';
import { Link } from 'react-router-dom';

export default function ListaPlanos(){

    const {config, usuario} = useContext(MyContext);
    const [planos, setPlanos] = useState();

    useEffect(() => {
        axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships',config)
        .then(listaSucesso)
        .catch(listFalha)

        function listaSucesso(resposta){
            setPlanos(resposta.data);
            console.log("Deu certo!", resposta.data);
        }
    
        function listFalha(erro){
            console.log("Deu ruim!", erro.response);
        }
    },[]);

    if(planos === undefined){
        return <ContainerCarregamento><img src="https://miro.medium.com/max/1400/1*e_Loq49BI4WmN7o9ItTADg.gif"/></ContainerCarregamento>
    }

    return(
        <>
            {planos.map((p) => 
            <Link to={`/subscriptions/${p.id}`} key={p.id}>
                <Plano>
                    <img src={p.image}/>
                    <p>{p.price}</p>
                </Plano>
            </Link>)}
        </>
    )
};

const ContainerCarregamento = styled.div`
    width: 100%;
    height: 667px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 200px;
    }
`

const Plano = styled.div`
    width: 290px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 7px 0;
    background: #000000;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    img{
        width: 140px;
        height: 96px;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #FFFFFF;
    }
`