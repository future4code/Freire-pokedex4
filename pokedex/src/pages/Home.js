import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const goToPokedex = () => {
    navigate("/pokedex");
  };
  const goDetailPage = () => {
    navigate("/detail");
  };

  return (
    <div>
      <p>Home</p>
      <br />
      <br />
      <div>
        {pokemons.map((p, index) => (
          <span key={index}>
            <img src={p.img} width={50} height={50} /> {/* imagem do pokemon*/}
            <p>
              {p.name}
            </p>
            <p>{p.skills.map(s => " " + s + " ")}</p> {/* o pokemon precisa sumir do home*/}
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

    </div>
  );
};
