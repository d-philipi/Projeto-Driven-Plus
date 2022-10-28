import React, { useContext, useState } from 'react';
import MyContext from '../context/mycontext';

export default function Plano(){

    const {usuario} = useContext(MyContext);

    return (
        <>
            Plano
        </>
    )
}