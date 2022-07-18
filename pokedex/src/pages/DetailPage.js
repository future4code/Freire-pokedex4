import React from "react";
import { useNavigate } from "react-router-dom";

export const DetailPage = () => { 

    useNavigate()
    
    const goToHome = () => {
        useNavigate("/")
    }
    return(
        <div>
            <p>Página de Detalhes</p>
            <button onClick={goToHome}></button>
        </div>
    )
}