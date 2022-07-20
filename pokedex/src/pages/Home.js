import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const goToPokedex = () => {
    navigate("/pokedex");
  };
  const goDetailPage = () => {
    navigate("/detail");
  };

  const qtdPokemins = 20


  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons()
  }, [])

  const fetchPokemons = async (index) => {
    const body = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)).json()
    const pokemon = {}
    pokemon["name"] = body.name
    pokemon["skills"] = body.types.map((slot) => slot.type.name)
    pokemon["img"] = body.sprites.other["official-artwork"].front_default
    pokemon["inPokedex"] = false
    return pokemon
  }



  const getPokemons = () => {
    const pokeMonsPromise = new Array(qtdPokemins).fill({});
    for (let index = 0; index < qtdPokemins; index++) {
      pokeMonsPromise[index] = fetchPokemons(index + 1)
    }
    Promise.all(pokeMonsPromise).then((poke) => {
      setPokemons(poke)
    }).catch((error) => console.log(error))

  }

  const addPokedex = (index) => {
    const tmp = [...pokemons]
    tmp[index].inPokedex = true
    setPokemons(tmp)
  }

  const removePokedex = (index) => {
    const tmp = [...pokemons]
    tmp[index].inPokedex = false
    setPokemons(tmp)
  }

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
