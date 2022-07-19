import React from "react";
import { useNavigate } from "react-router-dom";

export const DetailPage = () => { 

   const navigate = useNavigate()
    
    const goToHome = () => {
        navigate("/")
    }
    return(
        <div>
            <p>Página de Detalhes</p>
            <button onClick={goToHome}>Home</button>
        </div>
    )
}