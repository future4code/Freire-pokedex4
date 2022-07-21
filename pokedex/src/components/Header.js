import React from "react";
import pokemonlogo from "../assets/img/PokemonLogo.png"

import { Button, ButtonNone, DivTop } from "./styled";



export const Header = () => {
    
    return(
        <DivTop>
            <ButtonNone></ButtonNone>
            <img src={pokemonlogo} alt="Pokemon Api Logo"/>
            <Button>Pokédex</Button> 
        </DivTop>
    )
}