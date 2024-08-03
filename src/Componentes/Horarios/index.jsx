import './style.css';
import local from  '../../img/local.png';

export default function Horarios() {
  return (
    <main className='secao-tabela limitar-secao'>
      <h2>Atendimento: Araçatuba e Birigui</h2>
      <div className='cards-horario'>
      <section className='table1'>
        <table>
          <caption>Food Truck</caption>
          <tr>
            <td className='dia-da-semana'>SEGUNDA</td>
            <td></td>
            <td className='horarios'>FECHADO</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>TERÇA</td>
            <td className='endereco'> <img src={local} alt="local"/> Praça Paraíso</td>
            <td className='horarios'>17:00 <span>-</span> 23:30</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>QUARTA</td>
             <td className='endereco'><img src={local} alt="local"/> Praça Paraíso</td>
            <td className='horarios'>17:00 <span>-</span> 23:30</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>QUINTA</td>
            <td className='endereco'><img src={local} alt="local"/> Praça Paraíso</td>
            <td className='horarios'>17:00 <span>-</span> 23:30</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>SEXTA</td>
            <td className='endereco'><img src={local} alt="local"/> Praça Paraíso</td>
            <td className='horarios'>17:00 <span>-</span> 23:30</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>SÁBADO</td>
            <td className='endereco'><img src={local} alt="local"/> Praça Paraíso</td>
            <td className='horarios'>07:00 <span>-</span> 23:30</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>DOMINGO</td>
            <td className='endereco'><img src={local} alt="local"/> Praça Paraíso</td>
            <td className='horarios'>17:00 <span>-</span> 23:30</td>
          </tr>
        </table>
      </section>

      <section className='table2'>
        <table>
          <caption>Feiras Livre em Araçatuba</caption>
          <tr>
            <td className='dia-da-semana'>SEGUNDA</td>
            <td></td>
            <td className='horarios'>FECHADO</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>TERÇA</td>
            <td></td>
            <td className='horarios'>FECHADO</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>QUARTA</td>
            <td className='endereco'><img src={local} alt="local"/> R. Tabajaras, 1000</td>
            <td className='horarios'>07:00 <span>-</span> 12:30</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>QUINTA</td>
            <td className='endereco'><img src={local} alt="local"/> Praça São João</td>
            <td className='horarios'>07:00 <span>-</span> 12:30</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>SEXTA</td>
            <td className='endereco'><img src={local} alt="local"/> R. Marcondes Salgado, 280</td>
            <td className='horarios'>07:00 <span>-</span> 12:30</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>SÁBADO</td>
            <td className='endereco'><img src={local} alt="local"/> Praça Paraíso</td>
            <td className='horarios'>07:00 <span>-</span> 12:30</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>DOMINGO</td>
            <td></td>
            <td className='horarios'>FECHADO</td>
          </tr>
        </table>
      </section>

      <section className='table3'>
        <table >
          <caption>Feiras Livre em Birigui</caption>
          <tr>
            <td className='dia-da-semana'>SEGUNDA</td>
            <td></td>
            <td className='horarios'>FECHADO</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>TERÇA</td>
            <td className='endereco'><img src={local} alt="local"/>R. Edgar Ajax dos Réis, 999</td>
            <td className='horarios'>16:00 <span>-</span> 21:00</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>QUARTA</td>
            <td className='endereco'><img src={local} alt="local"/>R. José Moimas, 2200</td>
            <td className='horarios'>16:00 <span>-</span> 22:00</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>QUINTA</td>
            <td className='endereco'><img src={local} alt="local"/>Praça Bairro Alto</td>
            <td className='horarios'>16:00 <span>-</span> 22:00</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>SEXTA</td>
            <td className='endereco'><img src={local} alt="local"/>R. Wagih Rahal, 100</td>
            <td className='horarios'>16:00 <span>-</span> 22:00</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>SÁBADO</td>
            <td className='endereco'><img src={local} alt="local"/>Praça Bíblia-Thereza barbieri</td>
            <td className='horarios'>07:00 <span>-</span> 13:00</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>DOMINGO</td>
            <td></td>
            <td className='horarios'>FECHADO</td>
          </tr>
        </table>
      </section>
      </div>

    </main>
  )

}