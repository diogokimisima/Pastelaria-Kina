import './style.css';
import local from '../../img/local.png';

const HorarioCard = ({ titulo, linhas }) => (
  <section className="card-horario">
    <h3 className="card-horario-titulo">{titulo}</h3>
    <ul className="lista-horario">
      {linhas.map(({ dia, endereco, inicio, fim }) => (
        <li key={dia} className={`linha-horario${inicio ? '' : ' fechado'}`}>
          <span className="linha-dia">{dia}</span>
          <span className="linha-endereco">
            {endereco && (
              <>
                <img src={local} alt="" />
                {endereco}
              </>
            )}
          </span>
          <span className="linha-status">
            {inicio ? <>{inicio} <i>–</i> {fim}</> : 'Fechado'}
          </span>
        </li>
      ))}
    </ul>
  </section>
);

const foodTruck = [
  { dia: 'SEGUNDA' },
  { dia: 'TERÇA', endereco: 'Praça Paraíso', inicio: '17:00', fim: '23:30' },
  { dia: 'QUARTA', endereco: 'Praça Paraíso', inicio: '17:00', fim: '23:30' },
  { dia: 'QUINTA', endereco: 'Praça Paraíso', inicio: '17:00', fim: '23:30' },
  { dia: 'SEXTA', endereco: 'Praça Paraíso', inicio: '17:00', fim: '23:30' },
  { dia: 'SÁBADO', endereco: 'Praça Paraíso', inicio: '07:00', fim: '23:30' },
  { dia: 'DOMINGO', endereco: 'Praça Paraíso', inicio: '17:00', fim: '23:30' },
];

const feirasAracatuba = [
  { dia: 'SEGUNDA' },
  { dia: 'TERÇA' },
  { dia: 'QUARTA', endereco: 'R. Tabajaras, 1000', inicio: '07:00', fim: '12:30' },
  { dia: 'QUINTA', endereco: 'Praça São João', inicio: '07:00', fim: '12:30' },
  { dia: 'SEXTA', endereco: 'R. Marcondes Salgado, 280', inicio: '07:00', fim: '12:30' },
  { dia: 'SÁBADO', endereco: 'Praça Paraíso', inicio: '07:00', fim: '12:30' },
  { dia: 'DOMINGO' },
];

const feirasBirigui = [
  { dia: 'SEGUNDA' },
  { dia: 'TERÇA', endereco: 'R. Edgar Ajax dos Réis, 999', inicio: '16:00', fim: '21:00' },
  { dia: 'QUARTA', endereco: 'R. José Moimas, 2200', inicio: '16:00', fim: '22:00' },
  { dia: 'QUINTA', endereco: 'Praça Bairro Alto', inicio: '16:00', fim: '22:00' },
  { dia: 'SEXTA', endereco: 'R. Wagih Rahal, 100', inicio: '16:00', fim: '22:00' },
  { dia: 'SÁBADO', endereco: 'Praça Bíblia-Thereza Barbieri', inicio: '08:00', fim: '13:00' },
  { dia: 'DOMINGO' },
];

export default function Horarios() {
  return (
    <main className="secao-tabela limitar-secao">
      <h2>Atendimento: Araçatuba e Birigui</h2>
      <div className="cards-horario">
        <HorarioCard titulo="Food Truck" linhas={foodTruck} />
        <HorarioCard titulo="Feiras Livre em Araçatuba" linhas={feirasAracatuba} />
        <HorarioCard titulo="Feiras Livre em Birigui" linhas={feirasBirigui} />
      </div>
    </main>
  );
}
