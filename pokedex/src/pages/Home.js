import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PokedexContext from "../PokedexContext";
import {
  Background,
  CardPkm,
  CaptureDiv,
  ButtonCapture,
  SearchDiv,
  Types,
} from "./styled";





export const Home = () => {
  const navigate = useNavigate();

  const goDetailPage = (index) => {
    navigate(`/detail/${index}`);
  };

  const { pokemons, removePokedex, addPokedex } = useContext(PokedexContext);

  // chamas os types do slot 1 para renderizar a cor  vem dentrod e 1 array não consegui acessar
  const teste =  pokemons.map((p) => p.skill.map(s => s.type.name));
 
  

  return (
    <div >
      <SearchDiv>
        <h2>Todos os Pokemons!</h2>
        <div>
          <input placeholder="Buscar Pokemon"></input>
          <button>Buscar</button>
        </div>
      </SearchDiv>

      <Background >
        {pokemons.map((p, index) => (
         <CardPkm key={index} backGroundColor='steel' >
            {}
            <img src={p.img} width={150} height={150} alt="" />
            {/* imagem do pokemon*/}
            <p>{p.name}</p>
            <div>
              {p.skills.map((s) => (
                <Types backgroundColor={s}>{s}</Types>
              ))}
            </div>
            {/* o pokemon precisa sumir do home*/}
            <CaptureDiv>
              {!p.inPokedex ? (
                <ButtonCapture onClick={() => addPokedex(index)}>
                  Capturar
                </ButtonCapture>
              ) : (
                <ButtonCapture onClick={() => removePokedex(index)}>
                  Remover
                </ButtonCapture>
              )}
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
