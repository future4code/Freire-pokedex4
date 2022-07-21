import React from "react";
import { useNavigate } from "react-router-dom";
import { Background } from "./styled";
import {  useRequestData } from "../Hooks/useRequestData";

export const Home = () => {
  const navigate = useNavigate();

  const goToPokedex = () => {
    navigate("/pokedex");
  };
  const goDetailPage = () => {
    navigate("/detail");
  };

  const pkms = useRequestData();

  // const allpkms = pkms.map((pkms,key) => <p key={key}>{pkms?.name}</p> )



  

  return (
    <Background>
      {/* {allpkms} */}
      <p>Home</p>
      <button onClick={goToPokedex}>ir para pokedex</button>
      <button onClick={goDetailPage}>página de detalhe</button>
    </Background>
  );
};
