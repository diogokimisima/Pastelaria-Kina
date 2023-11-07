import './style.css';

export default function Horarios(){
    return (
        <section className='secao-tabela limitar-secao' id='horarios'>
            <h2>Locais e Horários</h2>
        <table className='table1'>
          <caption>Food Truck</caption>
          <tr>
            <td className='dia-da-semana'>TERÇA a DOMINGO</td>
            <td>R. Imaculado Coração de Maria - Praça Paraíso</td>
            <td className='horarios'>17:00 <span>-</span> 23:30</td>
          </tr>
        </table>

        <table className='table2'>
          <caption>Feiras Livre em Araçatuba</caption>
          <tr>
            <td className='dia-da-semana'>QUARTA</td>
            <td>R. Tabajaras, 1000 - Jardim Sumaré</td>
            <td className='horarios'>07:00 <span>-</span> 12:00</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>QUINTA</td>
            <td>R. Siqueira Campos, 426 - Praça São João - Vila Carvalho</td>
            <td className='horarios'>07:00 <span>-</span> 12:00</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>SEXTA</td>
            <td>R. Marcondes Salgado, 280 - Santana</td>
            <td className='horarios'>07:00 <span>-</span> 12:00</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>SÁBADO</td>
            <td>R. Imaculado Coração de Maria - Praça Bairro Paraíso</td>
            <td className='horarios'>07:00 <span>-</span> 12:00</td>
          </tr>
        </table>

        <table className='table3'>
          <caption>Feiras Livre em Birigui</caption>
          <tr>
            <td className='dia-da-semana'>TERÇA</td>
            <td>R. Edgar Ajax dos Réis, 999 - Jardim Toselar</td>
            <td className='horarios'>16:00 <span>-</span> 22:00</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>QUARTA</td>
            <td>R. José Moimas, 2200 - Silvares</td>
            <td className='horarios'>16:00 <span>-</span> 22:00</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>QUINTA</td>
            <td>R. Anchieta, 341 - Praça Bairro Alto</td>
            <td className='horarios'>16:00 <span>-</span> 22:00</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>SEXTA</td>
            <td>R. Wagih Rahal, 100 - Rodoviária Nova</td>
            <td className='horarios'>16:00 <span>-</span> 22:00</td>
          </tr>
          <tr>
            <td className='dia-da-semana'>SÁBADO</td>
            <td>Av. das Rosas - Praça da Bíblia- Thereza Maria Barbieri</td>
            <td className='horarios'>08:00 <span>-</span> 13:00</td>
          </tr>
        </table>
      </section>
    )

}