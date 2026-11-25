import { produtos } from '../Data/';


export const filtrarProdutos = (categoria) => {
    return produtos.filter (
        (produto) => produto.categoria === categoria

    );
};

export const produtosEntradas = filtrarProdutos("Pastel");


// ---------------- BUSCA ----------------

// Remove acentos, deixa minúsculo e troca pontuação por espaço
const normalizar = (texto = "") =>
    texto
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^a-z0-9]+/g, " ")
        .trim();

// Reduz plural/variações simples: "pasteis" -> "pastel", "ovos" -> "ovo", "queijos" -> "queijo"
const raiz = (palavra) => {
    if (palavra.length <= 3) return palavra;
    if (palavra.endsWith("eis")) return palavra.slice(0, -3) + "el";
    if (palavra.endsWith("oes") || palavra.endsWith("aes")) return palavra.slice(0, -3) + "ao";
    if (palavra.endsWith("s")) return palavra.slice(0, -1);
    return palavra;
};

// Palavras que não ajudam na busca
const IGNORAR = new Set(["de", "da", "do", "das", "dos", "com", "e", "a", "o", "um", "uma", "no", "na", "em", "sem"]);

// Sinônimos: o termo buscado também encontra estas palavras
const SINONIMOS = {
    refri: ["coca", "guarana", "sprite", "fanta", "schweppes", "pepsi", "h2o"],
    refrigerante: ["coca", "guarana", "sprite", "fanta", "schweppes", "pepsi", "h2o"],
    cerveja: ["brahma", "skol", "heineken"],
    breja: ["brahma", "skol", "heineken"],
    suco: ["suco", "dell", "kapo"],
    energetico: ["monster"],
    bebida: ["bebidas"],
    salgado: ["salgados"],
    doce: ["doce", "banana", "romeu", "chocolate", "goiabada"],
    chocolate: ["chocolate", "doce"],
    mussarela: ["mussarela", "queijo"],
    mucarela: ["mussarela", "queijo"],
    muzzarela: ["mussarela", "queijo"],
    frango: ["frango"],
    galinha: ["frango"],
    peixe: ["atum", "bacalhau"],
    frutos: ["camarao"],
    vegetariano: ["queijo", "palmito", "brocolis", "pizza", "banana", "doce", "romeu", "vento"],
    zero: ["zero"],
    lata: ["lata"],
};

// Distância de edição (tolerância a erro de digitação)
const distancia = (a, b) => {
    if (Math.abs(a.length - b.length) > 2) return 99;
    const dp = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) dp[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,
                dp[i][j - 1] + 1,
                dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
            );
        }
    }
    return dp[a.length][b.length];
};

// Índice pré-calculado de cada produto
const indice = produtos.map((produto) => {
    const nome = normalizar(produto.nome);
    const descricao = normalizar(produto.descricao);
    const categoria = normalizar(produto.categoria);
    const palavrasNome = nome.split(" ").filter(Boolean);
    const palavrasResto = `${descricao} ${categoria}`.split(" ").filter(Boolean);
    return {
        produto,
        nome,
        textoCompleto: `${nome} ${descricao} ${categoria}`,
        raizesNome: palavrasNome.map(raiz),
        raizesResto: palavrasResto.map(raiz),
    };
});

// Pontua o quanto um termo bate com o produto (0 = não bate)
const pontuarTermo = (termo, item) => {
    const r = raiz(termo);
    const tolerancia = r.length >= 7 ? 2 : r.length >= 4 ? 1 : 0;

    const pontuarLista = (lista, peso) => {
        let melhor = 0;
        for (const p of lista) {
            if (p === r) melhor = Math.max(melhor, 10 * peso);          // palavra exata
            else if (p.startsWith(r)) melhor = Math.max(melhor, 7 * peso); // começo da palavra
            else if (r.length >= 4 && p.includes(r)) melhor = Math.max(melhor, 4 * peso); // dentro da palavra
            else if (tolerancia && distancia(r, p) <= tolerancia) melhor = Math.max(melhor, 3 * peso); // erro de digitação
        }
        return melhor;
    };

    let pontos = Math.max(pontuarLista(item.raizesNome, 3), pontuarLista(item.raizesResto, 1));

    // Sinônimos
    const sinonimos = SINONIMOS[termo] || SINONIMOS[r];
    if (sinonimos) {
        for (const s of sinonimos) {
            if (item.textoCompleto.includes(s)) pontos = Math.max(pontos, 5);
        }
    }
    return pontos;
};

export const buscarProdutos = (consulta) => {
    const texto = normalizar(consulta);
    if (!texto) return [];

    const termos = texto.split(" ").filter((t) => t && !IGNORAR.has(t));
    if (termos.length === 0) return [];

    return indice
        .map((item) => {
            let total = 0;
            for (const termo of termos) {
                const p = pontuarTermo(termo, item);
                if (p === 0) return null; // todos os termos precisam aparecer
                total += p;
            }
            if (item.nome === texto) total += 50;            // nome idêntico
            else if (item.nome.startsWith(texto)) total += 20; // nome começa com a busca
            else if (item.textoCompleto.includes(texto)) total += 10; // frase inteira encontrada
            return { produto: item.produto, total };
        })
        .filter(Boolean)
        .sort((a, b) => b.total - a.total)
        .map((r) => r.produto);
};
