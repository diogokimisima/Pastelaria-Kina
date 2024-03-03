//SALGADOS
import bolBacalhau from '../img/bol-bacalhau.jpg';
import bolQueijo from '../img/bol-queijo.jpg';
import coxCarne from '../img/coxinha-carne.jpg';
import coxFrango from '../img/coxinha-frango.jpg';
import kibeQueijo from '../img/kibe-queijo.jpg';
import kibeCarne from '../img/kibe-carne.jpg';
import massinha from '../img/massinha.jpg';
import massa from '../img/massa.jpg';

//PASTEIS
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
import carneQueijo from '../img/pastel-carne-queijo.jpg';
import queijo from '../img/pastel-queijo.jpg';
import frango from '../img/pastel-frango.jpg';
import pizza from '../img/pastel-pizza.jpg';
import bauru from '../img/pastel-bauru.jpg';
import romeu from '../img/pastel-romeu.jpg';
import quatroQueijo from '../img/pastel-4queijo.jpg';
import pastelVento from '../img/icone-pastel.png';

//BEBIDAS
import cocaLata from '../img/coca-lata.png';
import guaranaLata from '../img/guarana-lata.png';
import cocaZeroLata from  '../img/coca-zero-lata.png'; 
import spriteLata from '../img/sprite-lata.png';
import sweppsLata from '../img/swepps-lata.png';
import fantaUva from '../img/fanta-uva.png';
import fantaLaranja from '../img/fanta-laranja.png';
import dellVallePessego from '../img/dellvale-pessego.png';
import dellValleUva from '../img/dellvale-uva.png';
import sucoNatural from '../img/suco-natural.png';
import coca600 from '../img/coca-600.png';
import coca600Zero from '../img/coca-600-zero.png';
import guarana600 from '../img/guarana-600.png';
import guarana600Zero from '../img/guarana-600-zero.png';
import sprite600 from '../img/sprite-600.png';
import h2oLimao from '../img/h2o-limao.png';
import h2oLimoneto from '../img/h2o-limoneto.png';
import spriteLemon from '../img/sprite-lemon.png';
import agua from '../img/agua.png';
import aguaGas from '../img/agua-gas.png';
import brahma from '../img/brahma.png'
import skol from '../img/skol.png';
import heineken from '../img/heineken.png';




export const produtos = [
    {
        id: 1,
        nome: "Coxinha de frango",
        categoria: "Salgados",
        preco: 3.00,
        descricao: "Coxinha com massa de batata recheado com frango",
        imagem: coxFrango,
    },
    {
        id: 2,
        nome: "Bolinha de queijo",
        categoria: "Salgados",
        preco: 3.00,
        descricao: "Bolinho com massa de mandioca recheado com mussarela",
        imagem: bolQueijo,
    },
    {
        id: 3,
        nome: "Coxinha de carne",
        categoria: "Salgados",
        preco: 3.00,
        descricao: "Coxinha com massa de mandioca recheado com carne",
        imagem: coxCarne,
    },

    {
        id: 4,
        nome: "Bolinho de bacalhau",
        categoria: "Salgados",
        preco: 7.00,
        descricao: "Bolinho de bacalhau com batata",
        imagem: bolBacalhau,
    },
    {
        id: 5,
        nome: "Kibe de queijo",
        categoria: "Salgados",
        preco: 7.00,
        descricao: "Massa de kibe recheado com mussarela",
        imagem: kibeQueijo,
    },
    {
        id: 6,
        nome: "Kibe de carne",
        categoria: "Salgados",
        preco: 7.00,
        descricao: "Massa de kibe recheado com carne",
        imagem: kibeCarne,
    },
    {
        id: 7,
        nome: "Massinha",
        categoria: "Massa",
        preco: 8.00,
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
        nome: "Carne com queijo",
        categoria: "Pastel",
        preco: 13.00,
        descricao: "Pastel recheado com carne moída e mussarela",
        imagem: carneQueijo,
    },
    {
        id: 10,
        nome: "Carne",
        categoria: "Pastel",
        preco: 13.00,
        descricao: "Pastel recheado com carne moída",
        imagem: carne,
    },
    {
        id: 11,
        nome: "Queijo",
        categoria: "Pastel",
        preco: 13.00,
        descricao: "Pastel recheado com queijo mussarela",
        imagem: queijo,
    },
    {
        id: 12,
        nome: "Frango catupiry",
        categoria: "Pastel",
        preco: 13.00,
        descricao: "Pastel recheado com frango desfiado e catupiry",
        imagem: frango,
    },
    {
        id: 13,
        nome: "Pizza",
        categoria: "Pastel",
        preco: 13.00,
        descricao: "Pastel recheado com mussarela, orégano e uma rodela de tomate",
        imagem: pizza,
    },
    {
        id: 14,
        nome: "Bauru",
        categoria: "Pastel",
        preco: 13.00,
        descricao: "Pastel recheado com presunto, mussarela e tomate",
        imagem: bauru,
    },
    {
        id: 15,
        nome: "Calabresa",
        categoria: "Pastel",
        preco: 13.00,
        descricao: "Pastel recheado com calabresa, mussarela e uma rodela de tomate",
        imagem: calabresa,
    },
    {
        id: 16,
        nome: "Palmito",
        categoria: "Pastel",
        preco: 13.00,
        descricao: "Pastel recheado com palmito",
        imagem: palmito,
    },
    {
        id: 17,
        nome: "Palmito catupiry",
        categoria: "Pastel",
        preco: 13.00,
        descricao: "Pastel recheado com palmito e catupiry",
        imagem: palmitoCatupiry,
    },
    {
        id: 18,
        nome: "Banana",
        categoria: "Pastel",
        preco: 13.00,
        descricao: "Pastel recheado de banana com açúcar e canela ao redor",
        imagem: banana,
    },
    {
        id: 19,
        nome: "Doce",
        categoria: "Pastel",
        preco: 13.00,
        descricao: "Pastel recheado com chocolate e doce de leite",
        imagem: doce,
    },
    {
        id: 20,
        nome: "Romeu e julieta",
        categoria: "Pastel",
        preco: 13.00,
        descricao: "Pastel recheado com goiabada e mussarela ",
        imagem: romeu,
    },
    {
        id: 21,
        nome: "Brócolis",
        categoria: "Pastel",
        preco: 16.00,
        descricao: "Pastel recheado com brócolis, mussarela e catupiry",
        imagem: brocolis,
    },
    {
        id: 22,
        nome: "Lombo canadense",
        categoria: "Pastel",
        preco: 16.00,
        descricao: "Pastel recheado com lombo canadense, mussarela, catupiry e uma rodela de tomate",
        imagem: lombo,
    },
    {
        id: 23,
        nome: "4 Queijo",
        categoria: "Pastel",
        preco: 16.00,
        descricao: "Pastel recheado com 4 tipos de queijos(mussarela, queijo prato, provolone e catupiry)",
        imagem: quatroQueijo,
    },
    {
        id: 24,
        nome: "Atum catupiry",
        categoria: "Pastel",
        preco: 16.00,
        descricao: "Pastel recheado com atum desfiado e catupiry",
        imagem: atum,
    },
    {
        id: 25,
        nome: "Bacalhau",
        categoria: "Pastel",
        preco: 16.00,
        descricao: "Pastel recheado com bacalhau e uma azeitona preta",
        imagem: bacalhau,
    },


    {
        id: 26,
        nome: "Carne seca",
        categoria: "Pastel",
        preco: 22.00,
        descricao: "Pastel recheado com carne seca desfiada, catupiry e uma rodela de tomate",
        imagem: carneSeca,
    },

    {
        id: 27,
        nome: "Especial",
        categoria: "Pastel",
        preco: 22.00,
        descricao: "Pastel recheado com carne moída, mussarela, presunto, ovo cozido e uma azeitona",
        imagem: especial,
    },
    {
        id: 28,
        nome: "Camarão",
        categoria: "Pastel",
        preco: 22.00,
        descricao: "Pastel recheado com camarão e catupiry ",
        imagem: camarao,
    },

    //bebida
    {
        id: 29,
        nome: "Coca lata",
        categoria: "Bebidas",
        preco: 7.00,
        imagem: cocaLata,
    },
    {
        id:30,
        nome: "Coca zero lata",
        categoria: "Bebidas",
        preco: 7.00,
        imagem: cocaZeroLata,
    },
    {
        id: 31,
        nome: "Guaraná lata",
        categoria: "Bebidas",
        preco: 7.00,
        imagem: guaranaLata,
    },
    {
        id: 32,
        nome: "Sprite lata",
        categoria: "Bebidas",
        preco: 7.00,
        imagem: spriteLata,
    }, 
    {
        id: 33,
        nome: "Fanta uva lata",
        categoria: "Bebidas",
        preco: 7.00,
        imagem: fantaUva,
    }, 
    {
        id: 34,
        nome: "Fanta laranja lata",
        categoria: "Bebidas",
        preco: 7.00,
        imagem: fantaLaranja,
    }, 
    {
        id: 35,
        nome: "Schweppes lata",
        categoria: "Bebidas",
        preco: 7.00,
        imagem: sweppsLata,
    },    
    {
        id: 36,
        nome: "Coca 600ml",
        categoria: "Bebidas",
        preco: 8.00,
        imagem: coca600,
    }, 
    {
        id: 37,
        nome: "Coca 600ml zero",
        categoria: "Bebidas",
        preco: 8.00,
        imagem: coca600Zero,
    }, 
    {
        id: 38,
        nome: "Guaraná 600ml",
        categoria: "Bebidas",
        preco: 8.00,
        imagem: guarana600,
    }, 
    {
        id: 39,
        nome: "Guaraná 600ml zero",
        categoria: "Bebidas",
        preco: 8.00,
        imagem: guarana600Zero,
    },
    {
        id: 40,
        nome: "Sprite 600ml",
        categoria: "Bebidas",
        preco: 8.00,
        imagem: sprite600,
    }, 
    {
        id: 41,
        nome: "H2O limao",
        categoria: "Bebidas",
        preco: 8.00,
        imagem: h2oLimao,
    }, 
    {
        id: 42,
        nome: "H2O limoneto",
        categoria: "Bebidas",
        preco: 8.00,
        imagem: h2oLimoneto,
    }, 
    {
        id: 43,
        nome: "Sprite lemon",
        categoria: "Bebidas",
        preco: 8.00,
        imagem: spriteLemon,
    }, 
    {
        id: 44,
        nome: "Dell Vale pêssego lata",
        categoria: "Bebidas",
        preco: 7.00,
        imagem: dellVallePessego,
    }, 
    {
        id: 45,
        nome: "Dell Vale uva lata",
        categoria: "Bebidas",
        preco: 7.00,
        imagem: dellValleUva,
    }, 
    {
        id: 46,
        nome: "Suco natural de laranja 500ml(sem açúcar)",
        categoria: "Bebidas",
        preco: 10.00,
        imagem:sucoNatural,
    },
    {
        id: 47,
        nome: "Água",
        categoria: "Bebidas",
        preco: 3.00,
        imagem: agua,
    }, 
    {
        id: 48,
        nome: "Água com gás",
        categoria: "Bebidas",
        preco: 3.00,
        imagem: aguaGas,
    }, 
    {
        id: 49,
        nome: "Brahma lata",
        categoria: "Bebidas",
        preco: 6.00,
        imagem: brahma,
    }, 
    {
        id: 50,
        nome: "Skol lata",
        categoria: "Bebidas",
        preco: 6.00,
        imagem: skol,
    }, 
    {
        id: 51,
        nome: "Heineken lata",
        categoria: "Bebidas",
        preco: 8.00,
        imagem: heineken,
    }, 
    {
        id: 52,
        nome: "Pastel de vento",
        categoria: "Massa",
        preco: 8.00,
        descricao: "Pastel sem recheio",
        imagem: pastelVento
    },
    {
        id: 53,
        nome: "Costela com queijo",
        categoria: "Pastel",
        preco: 22.00,
        descricao: "Pastel recheado com costela desfiada e mussarela",
        imagem: carneSeca
    }




 

];