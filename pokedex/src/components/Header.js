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
    
    return(
        <DivTop>
            <img src={pokemonlogo} alt="Pokemon Api Logo"/>
            <Button onClick= {goToPokedex} >Ir para Pokédex</Button> {/*botão não funciona */}
        </DivTop>
    );
}; 