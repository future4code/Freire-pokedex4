import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PokedexContext from "../PokedexContext";


export const DetailPage = (id) => {
  const { pokemons, removePokedex, addPokedex } = useContext(PokedexContext) ;
   const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <div>
        <p>Página de Detalhes</p>
        <button onClick={goToHome}>Home</button>
        <br />
        <br />
        <br />
        {!pokemons[id].inPokedex ? <button onClick={() => addPokedex(id)}>Adicionar à Pokedex</button> :
          <button onClick={() => removePokedex(id)}>Remover da Pokedex</button>}
        <br />
        <img src={pokemons[id].img} width={150} height={150} alt="" />
        <p>
          {pokemons[id].name}
        </p>
        <p>{pokemons[id].skills.map(s => " " + s + " ")}</p>
        <img src={pokemons[id].img_front} width={80} height={80} alt="" />
        <img src={pokemons[id].img_back} width={80} height={80} alt="" />
        <p>Base stats</p>
        {pokemons[id].stats.map((s, i) => (
          <span key={i}>
            <p>{`${s[0]}: ${s[1]}`}</p>
          </span>
        ))}
      </div>
      <div>
        <p>{`Total: ${pokemons[id].stats.map(s => s[1]).reduce((i, j) => i + j)}`}</p>
      </div>
    </div>
  );
};
