import React from "react";
import pokemonlogo from "../../assets/img/PokemonLogo.png"
import { useNavigate } from "react-router-dom";
import { Button,DivTop } from "./styled";

export const Header = () => {
  const navigate = useNavigate();

  const goToPokedex = () => {
    navigate("/pokedex");
  };
  const goToHome = () => {
    navigate("/");
  };

  return (
    <DivTop>
      <Button onClick={goToHome}>Home</Button>
      <img src={pokemonlogo} alt="Pokemon Api Logo" />
      <Button onClick={goToPokedex}>Pokédex</Button>
    </DivTop>
  );
};
