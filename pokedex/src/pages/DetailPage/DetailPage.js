import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PokedexContext from "../../PokedexContext";
import { ContainerDiv ,BackgroundDetail, BaseStats } from "./styled";

export const DetailPage = () => {
  const { pokemons } = useContext(PokedexContext);

  const { id } = useParams();

  return (
    <ContainerDiv>
      <p>Página de Detalhes</p>
      <BackgroundDetail>
        

       
        <div>
        <img src={pokemons[id].img} width={150} height={150} alt="" />
        </div>
        <p>{pokemons[id].name}</p>
        <p>{pokemons[id].skills.map((s) => " " + s + " ")}</p>
        <div>
          <img src={pokemons[id].img_front} width={100} height={100} alt="" />
        </div>
        <div>
          <img src={pokemons[id].img_back} width={100} height={100} alt="" />
        </div>
        <BaseStats>
          <p>Base stats</p>
          {pokemons[id].stats.map((s, i) => (
            <span key={i}>
              <p>{`${s[0]}: ${s[1]}`}</p>
            </span>
          ))}
        </BaseStats>
      
      <div>
        <p>{`Total: ${pokemons[id].stats
          .map((s) => s[1])
          .reduce((i, j) => i + j)}`}</p>
      </div>
      </BackgroundDetail>
    </ContainerDiv>
  );
};
