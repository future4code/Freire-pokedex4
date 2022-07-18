import React from "react";
import { useNavigate } from "react-router-dom";

export const Pokedex = () => { 


    useNavigate()

    const goToHome = () => {
        useNavigate("/")
    }

    const goDetailPage = () => {
        useNavigate("detail")
    }
    return(
        <div>
            <p>Pokedex</p>
            <button onClick={goDetailPage}>página de detalhe</button>
            <button onClick={goToHome}>Home</button>
        </div>
    )
}