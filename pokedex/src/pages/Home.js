import React from "react";
import { useNavigate } from "react-router-dom";


export const Home = () => { 
    useNavigate()
    
    const goToPokedex = () => {
        useNavigate("/pokedex")
    }
    const goDetailPage = () => {
        useNavigate("detail")
    }


    return(
        <div>
            <p>Home</p>
            <button onClick={goToPokedex}>ir para pokedex</button>
            <button onClick={goDetailPage}>página de detalhe</button>
        </div>
    )
}