import axios from 'axios';

import { useState, useEffect } from 'react';

export const useRequestData = () => {
    const [data, setAbilities] = useState([])


    const GetAbilities = (name) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)

            .then((res) => {
                console.log(res.data)
                setAbilities(res.data);

            })
            .catch((err) => {
                console.log(err);
            });

    }

    useEffect(() => {
        GetAbilities();
    }, [])

    return data;

}

// export const useSprites = () => {

//     const [fotos, setSprites] = useState({})

//     const GetSprites = () => {
//         axios.get(`https://pokeapi.co/api/v2/pokemon/4`)

//             .then((res) => {

//                 setSprites(res.data.sprites)
//             })
//             .catch((err) => {
//                 console.log(err.message);
//             });

//     }

//     useEffect(() => {
//         GetSprites();
//     }, [])

//     return fotos;

// }

// export const useName = () => {

//     const [data, setData] = useState({})

//     const GetData = () => {
//         axios.get(`https://pokeapi.co/api/v2/pokemon/1`)

//             .then((res) => {

//                 setData(res.data.name)
//             })
//             .catch((err) => {
//                 console.log(err.message);
//             });

//     }

//     useEffect(() => {
//         GetData();
//     }, [])

//     return data;

// }

// export const useAllpokemons = () => {

//     const [data, setData] = useState([])

//     const GetData = () => {
//         axios.get(`https://pokeapi.co/api/v2/pokemon/`)

//             .then((res) => {
//                 console.log(res.data.results)
//                 setData(res.data.results)
//             })
//             .catch((err) => {
//                 console.log(err.message);
//             });

//     }

//     useEffect(() => {
//         GetData();
//     }, [])

//     return data;

// }

// export const useMoves = () => {

//     const [data, setData] = useState([])

//     const GetData = () => {
//         axios.get(`https://pokeapi.co/api/v2/pokemon/1`)

//             .then((res) => {

//                 setData(res.data.results)
//             })
//             .catch((err) => {
//                 console.log(err.message);
//             });

//     }

//     useEffect(() => {
//         GetData();
//     }, [])

//     return data;

// }