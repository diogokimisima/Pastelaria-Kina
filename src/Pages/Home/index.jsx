import './style.css';
import Topo from '../../Componentes/Topo';
import Banner from '../../Componentes/Banner';

const Home = () => {


  return (
    <div className='secao-home'>
      <Topo />

      <Banner />
      <section className='secao-tabela limitar-secao'>
        <table className='table1'>
          <caption>Feiras Livre em Araçatuba</caption>
          <tr>
            <th>DIA</th>
            <th>ENDEREÇO</th>
            <th>HORÁRIO</th>
          </tr>
          <tr>
            <td>QUARTA</td>
            <td>R. Tabajaras, 1000 - Jardim Sumaré</td>
            <td>7h</td>
          </tr>
          <tr>
            <td>QUINTA</td>
            <td>R. Siqueira Campos, 426 - Praça São João - Vila Carvalho</td>
            <td>7h</td>
          </tr>
          <tr>
            <td>SEXTA</td>
            <td>R. Marcondes Salgado, 280 - Santana</td>
            <td>7h</td>
          </tr>
          <tr>
            <td>SÁBADO</td>
            <td>R. Imaculado Coração de Maria - Praça Bairro Paraíso</td>
            <td>7h</td>
          </tr>
        </table>

        <table className='table2'>
          <caption>Feiras Livre em Birigui</caption>
          <tr>
            <th>DIA</th>
            <th>ENDEREÇO</th>
            <th>HORÁRIO</th>
          </tr>
          <tr>
            <td>TERÇA</td>
            <td>R. Edgar Ajax dos Réis, 999 - Jardim Toselar</td>
            <td>16h</td>
          </tr>
          <tr>
            <td>QUARTA</td>
            <td>R. José Moimas, 2200 - Silvares</td>
            <td>16h</td>
          </tr>
          <tr>
            <td>QUINTA</td>
            <td>R. Anchieta, 341 - Praça Bairro Alto</td>
            <td>16h</td>
          </tr>
          <tr>
            <td>SEXTA</td>
            <td>R. Wagih Rahal, 100 - Rodoviária Nova</td>
            <td>16h</td>
          </tr>
          <tr>
            <td>SÁBADO</td>
            <td>Av. das Rosas - Praça da Bíblia- Thereza Maria Barbieri</td>
            <td>8h</td>
          </tr>
        </table>

        <table className='table3'>
          <caption>Food truck</caption>
          <tr>
            <th>DIA</th>
            <th>ENDEREÇO</th>
            <th>HORÁRIO</th>
          </tr>
          <tr>
            <td>TERÇA a DOMINGO</td>
            <td>R. Imaculado Coração de Maria - Praça Bairro Paraíso</td>
            <td>17:00 - 23:30</td>
          </tr>
        </table>
      </section>

      <section className='secao-1'>
      <ul class="lista-horarios">
          <li>
            <h3>SEGUNDA</h3>
            <div>Praça Bairro Paraíso</div>
            <span class="texto-marrom">FECHADO</span>
          </li>
          <li>
            <h3>TERÇA</h3>
            <div></div>
            <p>09:00 - 22:00</p>
          </li>
          <li>
            <h3>QUARTA</h3>
            <div></div>
            <p>09:00 - 22:00</p>
          </li>
          <li>
            <h3>QUINTA</h3>
            <div></div>
            <p>09:00 - 22:00</p>
          </li>
          <li>
            <h3>SEXTA</h3>
            <div></div>
            <p>09:00 - 22:00</p>
          </li>
          <li>
            <h3>SÁBADO</h3>
            <div></div>
            <p>12:00 - 22:00</p>
          </li>
          <li>
            <h3>DOMINGO</h3>
            <div></div>
            <p>12:00 - 22:00</p>
          </li>
        </ul>
      </section>
      
    </div>
  );
};

export default Home;