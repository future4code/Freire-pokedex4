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
  GlassImageOne, BarraDeProgesso,Types,ContainerNameTypes,
} from "./styled";

export const DetailPage = () => {
  const { pokemons } = useContext(PokedexContext);

  const { id } = useParams();

  return (
    <ContainerDiv>
      <AlignDiv>
        <H1>Detalhes</H1>
        <BackgroundDetail>
        <ContainerNameTypes> <H2>{pokemons[id].name}</H2> {pokemons[id].skills.map((s) => <Types backgroundColor={s}> {s} </Types> )}</ContainerNameTypes>
          <div>
            <img src={pokemons[id].img} width={250} height={250} alt="" />
          </div>
          
          
          <GlassImageOne>
            <img src={pokemons[id].img_front} width={120} height={120} alt="" />

            <img src={pokemons[id].img_back} width={120} height={120} alt="" />
          </GlassImageOne>
          <BaseStats>
            <h2>Base stats</h2>
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
