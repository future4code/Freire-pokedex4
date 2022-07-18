import React from "react";
import { useNavigate } from "react-router-dom";


export const Home = () => { 
    const navigate = useNavigate()
    
    const goToPokedex = () => {
        navigate("/pokedex")
    }
    const goDetailPage = () => {
        navigate("/detail")
    }


    return(
        <div>
            <p>Home</p>
            <button onClick={goToPokedex}>ir para pokedex</button>
            <button onClick={goDetailPage}>página de detalhe</button>
        </div>
    )
}