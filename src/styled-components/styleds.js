import styled from 'styled-components';


//Estilos aplicados na página de login//
export const ContainerLogin = styled.div`
    width: 100%;
    height: 667px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    img{
        width: 299px;
        height: 49px;
        margin-top: 72px;
    }
    form{
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        input{
            width: 299px;
            height: 52px;
            background: #FFFFFF;
            border-radius: 8px;
            border: 1px solid #7E7E7E;
            padding-left: 10px;

            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color: #7E7E7E;
        }
        button{
            width: 298px;
            height: 52px;
            background: #FF4791;
            border-radius: 8px;
            border: 1px solid #FF4791;
            margin-top: 20px;
            cursor: pointer;

            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            color: #FFFFFF;
        }
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #FFFFFF;
        margin-bottom: 72px;
    }
`

//Estilos aplicados na página de Cadastro//
export const ContainerSign = styled.div`
    width: 100%;
    height: 667px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    form{
        height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-top: 80px;
        input{
            width: 299px;
            height: 52px;
            background: #FFFFFF;
            border-radius: 8px;
            border: 1px solid #7E7E7E;
            padding-left: 10px;

            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color: #7E7E7E;
        }
        button{
            width: 298px;
            height: 52px;
            background: #FF4791;
            border-radius: 8px;
            border: 1px solid #FF4791;
            margin-top: 20px;
            cursor: pointer;

            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            color: #FFFFFF;
        }
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #FFFFFF;
        margin-bottom: 72px;
    }
`