import { BrowserRouter, Routes, Route } from 'react-router-dom';

//IMPORTAR AS PAGES AQUI 
//EXEMPLO: 
//import { HomePage } from "../pages/HomePage"

export const Router = () => {
  return(
      <BrowserRouter>
      <Routes>
        <Route index="/" element ={<Home/>}/>    
        <Route path="   " element ={<DetailPage/>}/>    
        <Route path="  " element ={<Pokedex/>}/>

      </Routes>
    </BrowserRouter>
  )
}