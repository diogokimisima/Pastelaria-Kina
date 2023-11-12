import './style.css';
import local from  '../../img/local.png';

export default function Horarios() {
  return (
    <main className='secao-tabela limitar-secao'>
      <h2>Locais e Horários</h2>
      <div className='cards-horario'>
      <section className='table1'>
        <table>
          <caption>Food Truck</caption>
          <tr>
            <td className='dia-da-semana'>TERÇA a DOMINGO</td>
            <img src={local} alt="local"/> <td className='praca-paraiso'>Praça Paraíso</td>
            <td className='horarios'>17:00 <span>-</span> 23:30</td>
          </tr>
        </table>
      </section>

      <section className='table2'>
        <table>
          <caption>Feiras Livre em Araçatuba</caption>
          <tr>
            <td className='dia-da-semana'>QUARTA</td>
            <td><img src={local} alt="local"/> R. Tabajaras, 1000 - Jardim Sumaré</td>
            <td className='horarios'>07:00 <span>-</span> 13:00</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>QUINTA</td>
            <td><img src={local} alt="local"/> Praça São João</td>
            <td className='horarios'>07:00 <span>-</span> 13:00</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>SEXTA</td>
            <td><img src={local} alt="local"/> R. Marcondes Salgado, 280 - Santana</td>
            <td className='horarios'>07:00 <span>-</span> 13:00</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>SÁBADO</td>
            <td><img src={local} alt="local"/> Praça Bairro Paraíso</td>
            <td className='horarios'>07:00 <span>-</span> 13:00</td>
          </tr>
        </table>
      </section>

      <section className='table3'>
        <table >
          <caption>Feiras Livre em Birigui</caption>
          <tr>
            <td className='dia-da-semana'>TERÇA</td>
            <td><img src={local} alt="local"/> R. Edgar Ajax dos Réis, 999 - Jardim Toselar</td>
            <td className='horarios'>16:00 <span>-</span> 22:00</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>QUARTA</td>
            <td><img src={local} alt="local"/> R. José Moimas, 2200 - Silvares</td>
            <td className='horarios'>16:00 <span>-</span> 22:00</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>QUINTA</td>
            <td><img src={local} alt="local"/> R. Anchieta, 341 - Praça Bairro Alto</td>
            <td className='horarios'>16:00 <span>-</span> 22:00</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>SEXTA</td>
            <td><img src={local} alt="local"/> R. Wagih Rahal, 100 - Rodoviária Nova</td>
            <td className='horarios'>16:00 <span>-</span> 22:00</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>SÁBADO</td>
            <td><img src={local} alt="local"/> Av. das Rosas - Praça da Bíblia- Thereza Maria Barbieri</td>
            <td className='horarios'>08:00 <span>-</span> 13:00</td>
          </tr>
        </table>
      </section>
      </div>

    </main>
  )

}