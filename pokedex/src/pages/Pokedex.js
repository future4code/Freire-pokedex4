import React from "react";
import { useNavigate } from "react-router-dom";

export const Pokedex = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goDetailPage = () => {
    navigate("/detail");
  };
  return (
    <div>
      <p>Pokedex</p>
      <button onClick={goDetailPage}>página de detalhe</button>
      <button onClick={goToHome}>Home</button>
    </div>
  );
};
