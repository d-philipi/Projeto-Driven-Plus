import React, { useContext, useState } from 'react';
import MyContext from '../context/mycontext';

export default function Home(){

    const {usuario} = useContext(MyContext);

    return (
        <>
            Home
        </>
    )
}