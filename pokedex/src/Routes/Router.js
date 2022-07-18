import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home.js';
import { DetailPage } from '../pages/DetailPage.js';
import { Pokedex } from '../pages/Pokedex.js';


export const Router = () => {
  return(
      <BrowserRouter>
        <Routes>
            <Route index="/" element ={<Home/>}/>    
            <Route path="/detail" element ={<DetailPage/>}/>    
            <Route path="/pokedex" element ={<Pokedex/>}/>
        </Routes>
    </BrowserRouter>
  )
}
