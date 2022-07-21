import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import PokedexContext from "../PokedexContext";

import { Background,CardPkm } from "./styled";


export const Pokedex = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goDetailPage = (index) => {
    navigate(`/detail/${index}`);
  };

  const {pokemons,removePokedex} = useContext(PokedexContext)

  useEffect(() => {
    
  },[])

  return (
    <Background>
      <p>Pokedex</p>
      <button onClick={goToHome}>Home</button>
      <br />
      <br />
      <CardPkm>
        {pokemons.map((p, index) => (
          <span key={index} hidden={!p.inPokedex}>
            <img src={p.img} width={50} height={50} alt="" />
            <p>
              {p.name}
            </p>
            <p>{p.skills.map(s => " " + s + " ")}</p>
             <button onClick={() => removePokedex(index)}>Remover da Pokedex</button>
             <button onClick={() => goDetailPage(index)}>página de detalhe</button>
            <br />
            <br />
          </span>
        ))}
      </CardPkm>
      
    </Background>
  );
};
