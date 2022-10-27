import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./pagelogin/login";
import Cadastro from "./pagecadastro/cadastro";
import Plano from "./pageplano/plano";
import Planos from "./pageplanos/planos";
import Home from "./pagehome/home";

import GlobalStyle from './styled-components/globalstyle';


export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route
        path="/"
        element={<Login/>}
        ></Route>
        <Route
        path="/sign-up"
        element={<Cadastro/>}
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
    </BrowserRouter>
  )
}