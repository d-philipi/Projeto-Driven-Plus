import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./pagelogin/login";
import SignUp from './pagecadastro/cadastro';
import Plano from "./pageplanos/plano";
import Planos from "./pageplanos/planos";
import Home from "./pagehome/home";

import GlobalStyle from './styled-components/globalstyle';
import MyContext from './context/mycontext';



export default function App() {

  const tokenLocalStorage = localStorage.getItem("token");

  const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
	const [cpf, setCpf] = useState("");
  const [nomeCartao, setNomeCartao] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [codSeguranca, setCodSeguranca] = useState("");
  const [dataCartao, setDataCartao] = useState("")
  const [usuario, setUsuario] = useState({});
  const [plano, setPlano] = useState()
  const [token, setToken] = useState(tokenLocalStorage);
  const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
  }

  function manterLogado(token) {
		setToken(token);
		localStorage.setItem("token", token);
	}

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <MyContext.Provider value={{usuario, token, setToken, manterLogado, config, plano, setPlano}}>
        <Routes>
          <Route
          path="/"
          element={<Login
          email={email}
          setEmail={setEmail}
          senha={senha}
          setSenha={setSenha}
          setUsuario={setUsuario}
          />}
          ></Route>
          <Route
          path="/sign-up"
          element={<SignUp
          email={email}
          setEmail={setEmail}
          senha={senha}
          setSenha={setSenha}
          nome={nome}
          setNome={setNome}
          cpf={cpf}
          setCpf={setCpf}
          />}
          ></Route>
          <Route
          path="/subscriptions/:idPlano"
          element={<Plano
          setUsuario={setUsuario}
          nomeCartao={nomeCartao}
          setNomeCartao={setNomeCartao}
          numeroCartao={numeroCartao}
          setNumeroCartao={setNumeroCartao}
          codSeguranca={codSeguranca}
          setCodSeguranca={setCodSeguranca}
          dataCartao={dataCartao}
          setDataCartao={setDataCartao}
          />}
          ></Route>
          <Route
          path="/subscriptions"
          element={<Planos/>}
          ></Route>
          <Route
          path="/home"
          element={<Home/>}
          ></Route>
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  )
}