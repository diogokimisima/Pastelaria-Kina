import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './style.css';
import Topo from '../../Componentes/Topo';
import Rodape from '../../Componentes/Rodape';
import { ScrollToTopButton } from '../../Componentes/VoltarTopo';
import foodTrucks from '../../img/foodtrucks.jpg';
import vinagrete from '../../img/vinagrete.jpg';
import senha from '../../img/senha-pedidos.jpg';
import ambiente from '../../img/ambiente2.jpg';

const Sobre = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: 0.5,
  };

  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });

  const [ref4, inView4] = useInView({
    triggerOnce: true,
  });

  return (
    <div className='secao-principal-sobre'>
      <Topo />
      <main className='secao-main-sobre limitar-secao'>
        <h1>Sobre nós</h1>

  
        <motion.section
          className="secao-card foodtruck"
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={variants}
          transition={transition}
          ref={ref1}
        >
          <img src={foodTrucks} alt="Food Truck" />
          <div className="texto-cards">
            <h2>Nossas Foods trucks</h2>
            <p>
              Com o tempo investimos em modernos food trucks para atender a um público mais amplo, sempre mantendo a qualidade e eficiência como nossas prioridades.
            </p>
          </div>
        </motion.section>

       
        <motion.section
          className="secao-card secao-vinagrete"
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={variants}
          transition={{ ...transition, delay: 0.2 }}
          ref={ref2}
        >
          <div className="texto-cards">
            <h2>Vinagrete</h2>
            <p>
              Os pasteis são acompanhados por um vinagrete exclusivo. Complementando a massa crocante e o recheio dos pasteis, proporcionando aos clientes uma combinação perfeita
            </p>
          </div>
          <img src={vinagrete} alt="vinagrete" />
        </motion.section>

      
        <motion.section
          className="secao-card secao-senha"
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={variants}
          transition={{ ...transition, delay: 0.4}}
          ref={ref3}
        >
          <img src={senha} alt="senha" />
          <div className="texto-cards">
            <h2> Senhas eletrônicas </h2>
            <p>Implementamos um sistema de senha eletrônica para agilizar o atendimento. Ao fazer um pedido, os clientes recebem uma senha eletrônica que vibra quando o pedido estiver pronto.
            </p>
          </div>
        </motion.section>

      
        <motion.section
          className="secao-card secao-ambiente"
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={variants}
          transition={{ ...transition, delay: 0.2 }}
          ref={ref4}
        >
          <div className="texto-cards">
            <h2> Ambiente </h2>
            <p>Além do pasteis incíveis. Na Pastelaria Kina, o ambiente é todo ao ar livre na Praça Paraíso, é aquele lugar onde você pode relaxar, saborear e curtir com amigos e familiares o ambiente descontraído.
            </p>
          </div>
          <img src={ambiente} alt="ambiente" />
        </motion.section>

      </main>

      <ScrollToTopButton />
      <Rodape />
    </div>
  );
};

export default Sobre;
