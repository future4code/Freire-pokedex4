import React from "react";
import pokemonlogo from "../assets/img/PokemonLogo.png"
import { DivTop } from "./styled";
import { Button } from "./styled";
import { useNavigate } from "react-router-dom";




export const Header = () => {
    const navigate = useNavigate();
    
    const goToPokedex = () => {
        navigate("/pokedex");
      };
    const goToHome = () => {
        navigate("/");
      };
    
    return(
        <DivTop>
            <img src={pokemonlogo} alt="Pokemon Api Logo"/>
            <Button onClick= {goToPokedex} >Ir para Pokédex</Button> 
            <Button onClick={goToHome}>Home</Button> 
            
        </DivTop>
    );
}; 