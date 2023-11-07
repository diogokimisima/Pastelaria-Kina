import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../Pages/Home';
import Cardapio from '../Pages/Cardapio';


export default function Rotas() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Cardapio' element={<Cardapio />}/>
      </Routes>
    </BrowserRouter>
    )
}