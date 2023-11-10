import { produtos } from '../Data/';


export const filtrarProdutos = (categoria) => {
    return produtos.filter (
        (produto) => produto.categoria === categoria

    );
};

export const produtosEntradas = filtrarProdutos("Pastel");



    
