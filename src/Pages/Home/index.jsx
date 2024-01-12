import './style.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Topo from '../../Componentes/Topo';
import Banner from '../../Componentes/Banner';
import Horarios from '../../Componentes/Horarios';
import Servicos from '../../Componentes/Servicos';
import Rodape from '../../Componentes/Rodape';
import { ScrollToTopButton } from '../../Componentes/VoltarTopo';

const Home = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
  const transition = {
    duration: 0.5,
  };

  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  
  return (
    <div className='secao-home'>
      <Topo />

      <motion.section
        className="secao-banner"
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={variants}
        transition={transition}
        ref={ref1}
      >
        <Banner />
      </motion.section>

       <motion.section
        className="secao-servicos"
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={variants}
        transition={{ ...transition, delay: 0.4 }}
        ref={ref2}
      >
        <Servicos />
      </motion.section>

      <motion.section
        className="secao-horarios"
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={variants}
        transition={{ ...transition, delay: 0.4 }}
        ref={ref3}
      >
        <Horarios />
      </motion.section>

      <ScrollToTopButton/>
      <Rodape />
    </div>
  );
};

export default Home;