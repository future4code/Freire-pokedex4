import React from "react";

const PokedexContext = React.createContext({
    pokemons: [],
    removePokedex: (index) => { },
    addPokedex: (index) => { }
});

export default PokedexContext;