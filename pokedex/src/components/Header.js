import React from "react";
import pokemonlogo from "../assets/img/PokemonLogo.png"
import { useNavigate } from "react-router-dom";
import { Button, ButtonNone, DivTop } from "./styled";




export const Header = () => {
    const navigate = useNavigate();
    
    const goToPokedex = () => {
        navigate("/pokedex");
      };
    
    return(
        <DivTop>
            <ButtonNone></ButtonNone>
            <img src={pokemonlogo} alt="Pokemon Api Logo"/>
            <Button onClick= {goToPokedex} >Ir para Pokédex</Button> {/*botão não funciona */}
        </DivTop>
    );
}; 