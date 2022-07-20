import React from "react";
import pokemonlogo from "../assets/img/PokemonLogo.png"
import { DivTop } from "./styled";
import { Button } from "./styled";

export const Header = () => {
    
    return(
        <DivTop>
            <img src={pokemonlogo} alt="Pokemon Api Logo"/>
            <Button>Pokédex</Button>
        </DivTop>
    )
}