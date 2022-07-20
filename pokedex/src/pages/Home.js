import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PokedexContext from "../PokedexContext";

export const Home = () => {
  const navigate = useNavigate();

  const goDetailPage = () => {
    navigate("/detail");
  };

  const goToPokedex = () => {
    navigate("/pokedex");
  };

  const { pokemons, removePokedex, addPokedex } = useContext(PokedexContext)

  return (
    <div>
      <p>Home</p>
      <br />
      <br />
      <div>
        {pokemons.map((p, index) => (
          <span key={index}>
            <img src={p.img} width={50} height={50} />
            <p>
              {p.name}
            </p>
            <p>{p.skills.map(s => " " + s + " ")}</p>
            {!p.inPokedex ? <button onClick={() => addPokedex(index)}>Adicionar à Pokedex</button> :
              <button onClick={() => removePokedex(index)}>Remover da Pokedex</button>}
            <br />
            <br />
          </span>
        ))}
      </div>
      <button onClick={goToPokedex}>ir para pokedex</button>
      <button onClick={goDetailPage}>página de detalhe</button>
    </div>
  );
};
