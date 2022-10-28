import React, { useContext, useState } from 'react';
import MyContext from '../context/mycontext';

export default function Planos(){

    const {usuario} = useContext(MyContext);

    return (
        <>
            Planos
        </>
    )
}