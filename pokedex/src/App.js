import React, { useEffect, useState } from "react";
import PokedexContext from "./PokedexContext";
import { Router } from "./Routes/Router";

function App() {
  const qtdPokemins = 24;

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const fetchPokemons = async (index) => {
    const body = await (
      await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
    ).json();
    const pokemon = {};
    pokemon["name"] = body.name;
    pokemon["skills"] = body.types.map((slot) => slot.type.name);
    pokemon["img"] = body.sprites.other["official-artwork"].front_default.slice(57);
    pokemon["img_front"] = body.sprites.front_default.slice(57);
    pokemon["img_back"] = body.sprites.back_default.slice(57);
    pokemon["moves"] = body.moves.map((moves) => moves.move.name);
    pokemon["stats"] = body.stats.map((stats) => [
      stats.stat.name,
      stats.base_stat,
    ]);
    pokemon["inPokedex"] = false;
    return pokemon;
  };

  const getPokemons = () => {
    const pokeMonsPromise = new Array(qtdPokemins).fill({});
    for (let index = 0; index < qtdPokemins; index++) {
      pokeMonsPromise[index] = fetchPokemons(index + 1);
    }
    Promise.all(pokeMonsPromise)
      .then((poke) => {
        setPokemons(poke);
      })
      .catch((error) => console.log(error));
  };



  

  const addPokedex = (index) => {
    const tmp = [...pokemons];
    tmp[index].inPokedex = true;
    setPokemons(tmp);
    // alert ("Pokemon adicionado")
  };

  const removePokedex = (index) => {
    const tmp = [...pokemons];
    tmp[index].inPokedex = false;
    setPokemons(tmp);
    // alert ("Pokemon removido")
  };

  return (
    <div className="App">
      <PokedexContext.Provider
        value={{
          pokemons,
          removePokedex,
          addPokedex,
        }}
      >
        <Router />
      </PokedexContext.Provider>
    </div>
  );
}

export default App;
