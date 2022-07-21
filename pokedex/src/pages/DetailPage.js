
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PokedexContext from "../PokedexContext";
import { Background } from "./styled";


export const DetailPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const { id } = useParams()

  const { pokemons, removePokedex, addPokedex } = useContext(PokedexContext)

  useEffect(() => {

  }, [])


  return (
    <Background>
      <p>Página de Detalhes</p>
      <br />
      <button onClick={goToHome}>Home</button>

      <br />
      <br />
      <br />
      {!pokemons[id].inPokedex ? <button onClick={() => addPokedex(id)}>Adicionar à Pokedex</button> :
        <button onClick={() => removePokedex(id)}>Remover da Pokedex</button>}
      <br />
      <img src={pokemons[id].img} width={150} height={150} />
      <p>
        {pokemons[id].name}
      </p>
      <p>{pokemons[id].skills.map(s => " " + s + " ")}</p>
      <img src={pokemons[id].img_front} width={80} height={80} />
      <img src={pokemons[id].img_back} width={80} height={80} />
      <p>Base stats</p>
      {pokemons[id].stats.map((s,i) => (
        <span key={i}>
          <p>{`${s[0]}: ${s[1]}`}</p>
        </span>
      ))}
      <p>{`Total: ${pokemons[id].stats.map(s => s[1]).reduce((i,j) => i+j)}`}</p>
    </div>

    </Background>

  );
};
