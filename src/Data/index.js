import bolBacalhau from '../img/bol-bacalhau.jpg';
import bolQueijo from '../img/bol-queijo.jpg';
import coxCarne from '../img/coxinha-carne.jpg';
import coxFrango from '../img/coxinha-frango.jpg';
import kibeQueijo from '../img/kibe-queijo.jpg';
import kibeCarne from '../img/kibe-carne.jpg';
import massinha from '../img/massinha.jpg';
import massa from '../img/massa.jpg;'

import atum from '../img/pastel-atum.jpg';
import bacalhau from '../img/pastel-bacalhau.jpg';
import banana from '../img/pastel-banana.jpg';
import brocolis from '../img/pastel-brocolis.jpg';
import calabresa from '../img/pastel-calabresa.jpg';
import carneSeca from '../img/pastel-carne-seca.jpg';
import doce from '../img/pastel-doce.jpg';
import especial from '../img/pastel-especial.jpg';
import lombo from '../img/pastel-lombo.jpg';
import palmito from '../img/pastel-palmito.jpg';
import palmitoCatupiry from '../img/pastel-palmito-catupiry.jpg'
import camarao from '../img/pastel-camarao.jpg';
import carne from '../img/pastel-carne.jpg';
import queijo from '../img/pastel-queijo.jpg';
import frango from '../img/pastel-frango.jpg';
import pizza from '../img/pastel-pizza.jpg';
import bauru from '../img/pastel-bauru.jpg';
import romeu from '../img/pastel-romeu.jpg';



export const produtos = [
    {
        id: 1,
        nome: "Bolinho de bacalhau",
        categoria: "Salgados",
        preco: 6.00,
        descricao: "Bolinho com massa de batata recheado com bacalhau",
        imagem: bolBacalhau,
    },
    {
        id: 2,
        nome: "bolQueijo",
        categoria: "Salgados",
        preco: 2.00,
        descricao: "Bolinho com massa de mandioca recheado com queijo",
        imagem: bolQueijo,
    },
    {
        id: 3,
        nome: "Coxinha de carne",
        categoria: "Salgados",
        preco: 2.00,
        descricao: "Coxinha com massa de mandioca recheado com carne",
        imagem: coxCarne,
    },
    {
        id: 4,
        nome: "Coxinha de frango",
        categoria: "Salgado",
        preco: 2.00,
        descricao: "Coxinha com massa de batata recheado com frango",
        imagem: coxFrango,
    },
    {
        id: 5,
        nome: "Kibe de queijo",
        categoria: "Salgados",
        preco: 6.00,
        descricao: "Massa de kibe recheado com queijo",
        imagem: kibeQueijo,
    },
    {
        id: 6,
        nome: "Kibe de carne",
        categoria: "Salgados",
        preco: 6.00,
        descricao: "Massa de kibe recheado com carne",
        imagem: kibeCarne,
    },
    {
        id: 7,
        nome: "Massinha",
        categoria: "Massa",
        preco: 7.00,
        descricao: "pacote com mini massinhas de pastel",
        imagem: massinha,
    },
    {
        id: 8,
        nome: "Massa",
        categoria: "Massa",
        preco: 22.00,
        descricao: "Rolo da massa de pastel",
        imagem: massa,
    },
    {
        id: 9,
        nome: "Atum com catupiry",
        categoria: "Pastel",
        preco: 15.00,
        descricao: "Pastel com recheio de atum desfiado e catupiry",
        imagem: atum,
    },
    {
        id: 10,
        nome: "Bacalhau",
        categoria: "Pastel",
        preco: 15.00,
        descricao: "Pastel com recheio de bacalhau temperado e uma azeitona preta",
        imagem: bacalhau,
    },
    {
        id: 11,
        nome: "Banana",
        categoria: "Pastel",
        preco: 12.00,
        descricao: "Pastel com recheio de banana com açucar e canela ao redor do pastel",
        imagem: banana,
    },
    {
        id: 12,
        nome: "Brócolis",
        categoria: "Pastel",
        preco: 15.00,
        descricao: "Pastel com recheio de brócolis, queijo e catupiry",
        imagem: brocolis,
    },
    {
        id: 13,
        nome: "Calabresa",
        categoria: "Pastel",
        preco: 12.00,
        descricao: "Pastel com recheio de calabresa, queijo e uma rodela de tomate",
        imagem: calabresa,
    },
    {
        id: 14,
        nome: "Carne seca",
        categoria: "Pastel",
        preco: 20.00,
        descricao: "Pastel recheado com carne seca desfiada, catupiry e uma rodela de tomate",
        imagem: carneSeca,
    },
    {
        id: 15,
        nome: "Doce",
        categoria: "Pastel",
        preco: 12.00,
        descricao: "Pastel recheado com chocolate e doce de leite",
        imagem: doce,
    },
    {
        id: 16,
        nome: "Especial",
        categoria: "Pastel",
        preco: 20.00,
        descricao: "Pastel recheado com carne moiada, queijo, presunto, ovo cozido e uma azeitona",
        imagem: especial,
    },
    {
        id: 17,
        nome: "Lombo Canadense",
        categoria: "Pastel",
        preco: 15.00,
        descricao: "Pastel recheado com lombo canadense",
        imagem: lombo,
    },
    {
        id: 18,
        nome: "Palmito",
        categoria: "Pastel",
        preco: 12.00,
        descricao: "Pastel recheado com palmito e cebolinha",
        imagem: palmito,
    },
    {
        id: 19,
        nome: "Palmito Catupiry",
        categoria: "Pastel",
        preco: 15.00,
        descricao: "Pastel recheado com palmito, catupiry e cebolinha",
        imagem: palmitoCatupiry,
    },
    {
        id: 20,
        nome: "Camarão",
        categoria: "Pastel",
        preco: 20.00,
        descricao: "Pastel recheado com camarão e catupiry ",
        imagem: camarao,
    },
    {
        id: 21,
        nome: "Carne",
        categoria: "Pastel",
        preco: 12.00,
        descricao: "Pastel recheado com carne moida",
        imagem: carne,
    },
    {
        id: 22,
        nome: "Queijo",
        categoria: "Pastel",
        preco: 12.00,
        descricao: "Pastel recheado com queijo",
        imagem: queijo,
    },
    {
        id: 23,
        nome: "Frango",
        categoria: "Pastel",
        preco: 12.00,
        descricao: "Pastel recheado com frango desfiado e catupiry",
        imagem: frango,
    },
    {
        id: 24,
        nome: "Pizza",
        categoria: "Pastel",
        preco: 12.00,
        descricao: "Pastel recheado com queijo, oregano e uma rodela de tomate",
        imagem: pizza,
    },
    {
        id: 25,
        nome: "Bauru",
        categoria: "Pastel",
        preco: 12.00,
        descricao: "Pastel recheado com presunto, queijo e tomate",
        imagem: bauru,
    },
    {
        id: 26,
        nome: "Romeu e julieta",
        categoria: "Pastel",
        preco: 12.00,
        descricao: "Pastel recheado com goiabada e queijo ",
        imagem: romeu,
    },
];