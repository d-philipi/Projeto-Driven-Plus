import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./pagelogin/login"
import Cadastro from "./pagecadastro/cadastro"
import Plano from "./pageplano/plano"
import Planos from "./pageplanos/planos"
import Home from "./pagehome/home"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
        path="/"
        element={<Login/>}
        ></Route>
        <Route
        path="/"
        element={<Cadastro/>}
        ></Route>
        <Route
        path="/"
        element={<Plano/>}
        ></Route>
        <Route
        path="/"
        element={<Planos/>}
        ></Route>
        <Route
        path="/"
        element={<Home/>}
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}