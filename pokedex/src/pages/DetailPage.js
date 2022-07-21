import React from "react";
import { useNavigate } from "react-router-dom";
import { Background } from "./styled";

export const DetailPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <Background>
      <p>Página de Detalhes</p>
      <button onClick={goToHome}>Home</button>
    </Background>
  );
};
