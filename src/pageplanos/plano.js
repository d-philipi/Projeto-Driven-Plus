import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyContext from '../context/mycontext';
import styled from 'styled-components';

export default function Plano({nomeCartao, setNomeCartao, numeroCartao, setNumeroCartao, codSeguranca, setCodSeguranca, dataCartao, setDataCartao}){

    const {idPlano} = useParams();
    const {usuario, config} = useContext(MyContext);
    const [plano, setPlano] = useState();

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlano}`,config)
        .then(planoSucesso)
        .catch(planoFalha)

        function planoSucesso(resposta){
            setPlano(resposta.data);
            console.log("Deu certo!", resposta.data);
        }
    
        function planoFalha(erro){
            console.log("Deu ruim!", erro.response);
        }
    },[]);

    if(plano === undefined){
        return <ContainerCarregamento><img src="https://miro.medium.com/max/1400/1*e_Loq49BI4WmN7o9ItTADg.gif"/></ContainerCarregamento>
    }

    function voltar(){
        console.log("Voltei, muito bom dia meu povo!")
    }

    function assinar(){
        console.log("Assinei!");
    }

    return (
        <ContainerPlano>
            <ion-icon name="arrow-back-outline" onClick={voltar}/>
            <img src={plano.image}/>
            <h1>{plano.name}</h1>
            <Informacoes>
                <ion-icon name="reader-outline"/><p>Benefícios:</p>
                <Beneficios>
                    {plano.perks.map((b) => 
                        <li key={b.id}>{b.id}. {b.title}</li>
                    )}
                </Beneficios>
                <ion-icon name="cash-outline"/><p>Preço:</p>
                <p>{plano.price} cobrados mensalmente</p>
            </Informacoes>
            <form onSubmit={assinar}>
                <input type="text" required placeholder="Nome impresso no cartão..." value={nomeCartao} onChange={e => setNomeCartao(e.target.value)}/>
                <input type="number" required placeholder="Digitos do cartão..." value={numeroCartao} onChange={e => setNumeroCartao(e.target.value)}/>
                <input type="number" required placeholder="Código de segurança..." value={codSeguranca} onChange={e => setCodSeguranca(e.target.value)}/>
                <input type="data" required placeholder="Validade..." value={dataCartao} onChange={e => setDataCartao(e.target.value)}/>
                <button type='submit'>ASSINAR</button>
            </form>
        </ContainerPlano>
    )
}

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

const ContainerPlano = styled.div`

`

const Informacoes = styled.div`

`

const Beneficios = styled.ul`

`