import React from "react";
import { useNavigate } from "react-router-dom";
import { Background } from "./styled";

export const Pokedex = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goDetailPage = () => {
    navigate("/detail");
  };
  return (
    <Background>
      <p>Pokedex</p>
      <button onClick={goDetailPage}>página de detalhe</button>
      <button onClick={goToHome}>Home</button>
    </Background>
  );
};
