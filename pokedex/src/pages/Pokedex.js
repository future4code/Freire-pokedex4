import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PokedexContext from "../PokedexContext";

export const Pokedex = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goDetailPage = () => {
    navigate("/detail");
  };

  const {pokemons,removePokedex,_} = useContext(PokedexContext)

  useEffect(() => {
    
  },[])

  return (
    <div>
      <p>Pokedex</p>
      <br />
      <br />
      <div>
        {pokemons.filter(p => p.inPokedex).map((p, index) => (
          <span key={index}>
            <img src={p.img} width={50} height={50} />
            <p>
              {p.name}
            </p>
            <p>{p.skills.map(s => " " + s + " ")}</p>
             <button onClick={() => removePokedex(index)}>Remover da Pokedex</button>
            <br />
            <br />
          </span>
        ))}
      </div>
      <button onClick={goDetailPage}>página de detalhe</button>
      <button onClick={goToHome}>Home</button>
    </div>
  );
};
