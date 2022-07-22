import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PokedexContext from "../../PokedexContext";
import { ContainerDiv,AlignDiv, H1  ,BackgroundDetail, BaseStats,GlassImageOne } from "./styled";

export const DetailPage = () => {
  const { pokemons } = useContext(PokedexContext);

  const { id } = useParams();

  return (
    <ContainerDiv>
      <AlignDiv>
      <H1>Detalhes</H1>
      <BackgroundDetail>
        

       
        <div>
        <img src={pokemons[id].img} width={150} height={150} alt="" />
        </div>
        <p>{pokemons[id].name}</p>
        <p>{pokemons[id].skills.map((s) => " " + s + " ")}</p>
        <GlassImageOne>
          <img src={pokemons[id].img_front} width={120} height={120} alt="" />
        </GlassImageOne>
        <GlassImageOne>
          <img src={pokemons[id].img_back} width={120} height={120} alt="" />
        </GlassImageOne>
        <BaseStats>
          <p>Base stats</p>
          {pokemons[id].stats.map((s, i) => (
            <span key={i}>
              <p>{`${s[0]}: ${s[1]}`}</p>
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
