import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home.js";
import { DetailPage } from "../pages/DetailPage/DetailPage.js";
import { Pokedex } from "../pages/Pokedex.js";
import { Header } from "../Components/Header/Header.js";


export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
};
