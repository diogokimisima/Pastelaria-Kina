import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../Pages/Home';
import Cardapio from '../Pages/Cardapio';
import Sobre from '../Pages/Sobre';

export default function Rotas() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Cardapio' element={<Cardapio />}/>
        <Route path='/Sobre' element={<Sobre />}/>
      </Routes>
    </BrowserRouter>
    )
}