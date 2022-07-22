import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PokedexContext from "../../PokedexContext";
import {
  ContainerDiv,
  AlignDiv,
  H1,
  H2,
  BackgroundDetail,
  BaseStats,
  GlassImageOne, BarraDeProgesso
} from "./styled";

export const DetailPage = () => {
  const { pokemons } = useContext(PokedexContext);

  const { id } = useParams();

  return (
    <ContainerDiv>
      <AlignDiv>
        <H1>Detalhes</H1>
        <BackgroundDetail>
        <H2>{pokemons[id].name}</H2> <p>{pokemons[id].skills.map((s) => " " + s + " ")}</p>
          <div>
            <img src={pokemons[id].img} width={200} height={200} alt="" />
          </div>
          
          
          <GlassImageOne>
            <img src={pokemons[id].img_front} width={120} height={120} alt="" />

            <img src={pokemons[id].img_back} width={120} height={120} alt="" />
          </GlassImageOne>
          <BaseStats>
            <p>Base stats</p>
            {pokemons[id].stats.map((s, i) => (
              <span key={i}>
                <p>{`${s[0]}: ${s[1]}`}</p>
                <BarraDeProgesso width={s[1]}/>
              </span>
            ))}

            <div>
              <p>{`Total: ${pokemons[id].stats
                .map((s) => s[1])
                .reduce((i, j) => i + j)}`}</p>
            </div>
          </BaseStats>
        </BackgroundDetail>
      </AlignDiv>
    </ContainerDiv>
  );
};
