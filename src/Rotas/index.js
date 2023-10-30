import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../Pages/Home';
import Cardapio from '../Pages/Cardapio';
import Sobre from '../Pages/Home';

export default function Rotas() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cardapio' element={<Cardapio />}/>
        <Route path='/sobre' element={<Sobre />}/>
      </Routes>
    </BrowserRouter>
    )
}