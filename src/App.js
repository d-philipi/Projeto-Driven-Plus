import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./pagelogin/login";
import SignUp from './pagecadastro/cadastro';
import Plano from "./pageplano/plano";
import Planos from "./pageplanos/planos";
import Home from "./pagehome/home";

import GlobalStyle from './styled-components/globalstyle';
import MyContext from './context/mycontext';



export default function App() {
  const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
	const [cpf, setCpf] = useState("");
  const [usuario, setUsuario] = useState({});

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <MyContext.Provider value={usuario}>
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
          path="/subscriptions/ID_DO_PLANO"
          element={<Plano/>}
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