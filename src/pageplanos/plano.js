import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MyContext from '../context/mycontext';
import styled from 'styled-components';
import Swal from 'sweetalert2';


export default function Plano({setUsuario, nomeCartao, setNomeCartao, numeroCartao, setNumeroCartao, codSeguranca, setCodSeguranca, dataCartao, setDataCartao}){

    const Swal = require('sweetalert2');
    const {idPlano} = useParams();
    const {usuario, config} = useContext(MyContext);
    const [plano, setPlano] = useState();
    const navigate = useNavigate();

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
        navigate("/subscriptions");
        console.log("Voltei, muito bom dia meu povo!")
    }

    function assinaturaSucesso(resposta){
        setUsuario()

        navigate("/home");
        console.log("Assinei!", resposta);
    }

    function assinaturaFalha(erro){
        console.log(erro.response);
    }

    function assinar(e){
        e.preventDefault();

        Swal.fire({
            title: '',
            width: 248,
            text: `Tem certeza que deseja assinar o plano ${plano.name} (${plano.price})?`,
            showCancelButton: true,
            cancelButtonColor:'#CECECE',
            cancelButtonText: 'Não',
            confirmButtonColor: '#FF4791',
            confirmButtonText: 'Sim',
            background:'#FFFFFF',
            backdrop: `
                rgba(0,0,0,0.6)
                url("/img/xdaquestao.png")
                left top
                no-repeat
            `
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', {
                    membershipId: 1,
                    cardName: nomeCartao,
                    cardNumber: numeroCartao,
                    securityNumber: codSeguranca,
                    expirationDate: dataCartao
                }, config).then(assinaturaSucesso).catch(assinaturaFalha);
            }
        })
    }

    return (
        <ContainerPlano>
            <Voltar>
                <ion-icon name="arrow-back" onClick={voltar}/>
            </Voltar>
            <Titulo>
               <img src={plano.image}/>
               <h1>{plano.name}</h1> 
            </Titulo>
            <Informacoes>
                <Categoria>
                    <ion-icon name="reader"/><p>Benefícios:</p>
                </Categoria>
                <Beneficios>
                    {plano.perks.map((b) => 
                        <li key={b.id}>{b.id}. {b.title}</li>
                    )}
                </Beneficios>
                <Categoria>
                    <ion-icon name="cash-outline"/><p>Preço:</p>
                </Categoria>
                <p>{plano.price} cobrados mensalmente</p>
            </Informacoes>
            <form /*onSubmit={assinar}*/>
                <input type="text" required placeholder="Nome impresso no cartão..." value={nomeCartao} onChange={e => setNomeCartao(e.target.value)}/>
                <input type="number" required placeholder="Digitos do cartão..." value={numeroCartao} onChange={e => setNumeroCartao(e.target.value)}/>
                <div>
                    <input type="number" required placeholder="Código de segurança..." value={codSeguranca} onChange={e => setCodSeguranca(e.target.value)}/>
                    <input type="data" required placeholder="Validade..." value={dataCartao} onChange={e => setDataCartao(e.target.value)}/>
                </div>
                <button /*type='submit'*/ onClick={assinar}>ASSINAR</button>
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
    width: 100%;
    height: 667px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 140px;
        height: 96px;
    }
    h1{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        color: #FFFFFF;
    }
    form{
        height: 300px;
        margin: 10px 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        input{
            width: 350px;
            height: 55px;
            background: #FFFFFF;
            border-radius: 8px;
            border: 1px solid #FFFFFF;
            padding-left: 10px;
            margin: 2px;

            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color: #7E7E7E;
            }
        div{
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 0;
            padding: 0;
            input{
                width: 175px;
                height: 48px;
            }

        }
        button{
            width: 299px;
            height: 52px;
            background: #FF4791;
            border-radius: 8px;
            border: 1px solid #FF4791;
            margin: 10px 0 35px 0;
            cursor:pointer;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            color: #FFFFFF;
        }
    }
`

const Voltar = styled.div`
    width: 100%;
    padding: 20px;
    ion-icon{
        width: 40px;
        height: 40px;
        color: #FFFFFF;
        background: #000000;
        transform: matrix(1, 0, 0, -1, 0, 0);
        cursor:pointer;
    }
`

const Titulo = styled.div`
    height: 150px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Informacoes = styled.div`
    width: 100%;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;

    p{
        margin: 0;
        padding: 0;
    }
    
`

const Categoria = styled.div`
    display: flex;
    align-items: center;
    margin: 7px 0;
    ion-icon{
        width: 22px;
        height: 22px;
        margin-right: 10px;
        color: #FF4791;
        background: #000000;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
    }
`

const Beneficios = styled.ul`
    vertical-align: baseline;
    list-style: none;
    margin: 0;
	padding: 0;
`