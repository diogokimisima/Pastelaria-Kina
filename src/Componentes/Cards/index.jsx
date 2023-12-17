import "./style.css";
import { motion } from "framer-motion";

const Cards = ({ produto }) => {
    return (
        <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            
                <figure>
                    <img src={produto.imagem} alt={produto.nome} />
                </figure>
                <div className="container-informacoes">
                    <div>
                        <h3>{produto.nome}</h3>
                        <small>{produto.categoria}</small>
                        <p>{produto.descricao}</p>
                    </div>
                    <div>
                        <span>{new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(produto.preco)}</span>
                    </div>
                </div>
        </motion.div>
    )
}

export default Cards;