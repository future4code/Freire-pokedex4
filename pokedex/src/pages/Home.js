import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import PokedexContext from "../PokedexContext";

import { Background } from "./styled";



export const Home = () => {
  const navigate = useNavigate();


  const goDetailPage = (index) => {
    navigate(`/detail/${index}`);
  };

  const goToPokedex = () => {
    navigate("/pokedex");
  };

  const { pokemons, removePokedex, addPokedex } = useContext(PokedexContext)

  

  // const allpkms = pkms.map((pkms,key) => <p key={key}>{pkms?.name}</p> )



  

  return (
    <Background>
      {/* {allpkms} */}
      <p>Home</p>

      <br />
      <br />
      {/* <button onClick={goToPokedex}>Ir para pokedex</button> mudar botao botão chato */}
      <div>
        {pokemons.map((p, index) => (
          <span key={index}>
            <img src={p.img} width={50} height={50} alt="" /> {/* imagem do pokemon*/}
            <p>
              {p.name}
            </p>
            <p>{p.skills.map(s => " " + s + " ")}</p> {/* map para skills dos pokemons*/}
            {!p.inPokedex ? <button onClick={() => addPokedex(index)}>Adicionar à Pokedex</button> :
              <button onClick={() => removePokedex(index)}>Remover da Pokedex</button>}
              <button onClick={() => goDetailPage(index)}>página de detalhe</button>
            <br />
            <br />
          </span>
        ))}
      </div>
      
    

      <button onClick={goToPokedex}>ir para pokedex</button>
      <button onClick={goDetailPage}>página de detalhe</button>
    </Background>

  );
};
