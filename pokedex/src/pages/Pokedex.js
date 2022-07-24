import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonCapture, CaptureDiv, SearchDiv,Types } from "./styled";
import PokedexContext from "../PokedexContext";

import { Background, CardPkm } from "./styled";

export const Pokedex = () => {
  const navigate = useNavigate();

  /*   const goToHome = () => {
    navigate("/");
  }; */

  const goDetailPage = (index) => {
    navigate(`/detail/${index}`);
  };

  const { pokemons, removePokedex } = useContext(PokedexContext);

  useEffect(() => {}, []);

  return (
    <div>
      <SearchDiv>
        <h2>Pokedexxx</h2>
      </SearchDiv>
      <Background>
        {pokemons.map((p, index) => (
          <CardPkm key={index} hidden={!p.inPokedex}>
            <img src={p.img} width={100} height={100} alt="" />
            <p>{p.name}</p>
            <div>
              {p.skills.map((s) => (
                <Types backgroundColor={s}>{s}</Types>
              ))}
            </div>
            <CaptureDiv>
              <ButtonCapture onClick={() => removePokedex(index)}>
                Remover
              </ButtonCapture>
              <ButtonCapture onClick={() => goDetailPage(index)}>
                Detalhes
              </ButtonCapture>
            </CaptureDiv>
          </CardPkm>
        ))}
      </Background>
    </div>
  );
};
