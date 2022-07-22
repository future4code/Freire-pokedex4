import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PokedexContext from "../PokedexContext";
import { BaseStats } from "./styled";

export const DetailPage = () => {
  const { pokemons, removePokedex, addPokedex } = useContext(PokedexContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <div>
        <p>Página de Detalhes</p>
       
        <br />
        <br />
        <br />
        
        {!pokemons[id].inPokedex ? (
          <button onClick={() => addPokedex(id)}>Adicionar à Pokedex</button>
        ) : (
          <button onClick={() => removePokedex(id)}>Remover da Pokedex</button>
        )}
        <br />
        <img src={pokemons[id].img} width={150} height={150} alt="" />
        <p>{pokemons[id].name}</p>
        <p>{pokemons[id].skills.map((s) => " " + s + " ")}</p>
        <img src={pokemons[id].img_front} width={100} height={100} alt="" />
        <img src={pokemons[id].img_back} width={100} height={100} alt="" />
        <BaseStats>
          <p>Base stats</p>
          {pokemons[id].stats.map((s, i) => (
            <span key={i}>
              <p>{`${s[0]}: ${s[1]}`}</p>
            </span>
          ))}
        </BaseStats>
      </div>
      <div>
        <p>{`Total: ${pokemons[id].stats
          .map((s) => s[1])
          .reduce((i, j) => i + j)}`}</p>
      </div>
    </div>
  );
};
