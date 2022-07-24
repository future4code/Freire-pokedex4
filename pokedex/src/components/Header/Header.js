import React from "react";
import pokemonlogo from "../../assets/img/PokemonLogo.png"
import { useNavigate } from "react-router-dom";
import { Button, Button2,DivTop, ImgLogo } from "./styled";

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
      <Button2 onClick={goToHome}>Home</Button2>
      <ImgLogo src={pokemonlogo} onClick={goToHome} alt="Pokemon Api Logo" />
      <Button onClick={goToPokedex}>Pokédex</Button>
    </DivTop>
  );
};
