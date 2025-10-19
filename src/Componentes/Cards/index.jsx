import "./style.css";
import { motion } from "framer-motion";
import { useState } from "react";

const Cards = ({ produto }) => {
    const [zoom, setZoom] = useState(false);

    return (
        <>
            <motion.div
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <figure onClick={() => setZoom(true)} style={{ cursor: "zoom-in" }}>
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
            {zoom && (
                <div className="modal-zoom" onClick={() => setZoom(false)}>
                    <img src={produto.imagem} alt={produto.nome} className="img-zoom" />
                </div>
            )}
        </>
    )
}

export default Cards;