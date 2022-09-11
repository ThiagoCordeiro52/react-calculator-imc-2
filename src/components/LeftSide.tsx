import { ChangeEvent, createContext, useContext } from 'react';
import FormStore from '../store/FormStore';
import { observer } from 'mobx-react-lite';

export const LeftSide = observer(() => {
  const formStore = useContext(FormStore);
  const { heightField, setHeightField, weightField, setWeightField } =
    formStore;
  function handleCalculateButton(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    if (heightField && weightField) {
    } else {
      alert('Digite todos os campos');
    }
  }

  return (
    <div className="leftSide">
      <h1>Calcule o seu IMC.</h1>
      <p>
        IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
        Organização Mundial da Saúde para calcular o peso ideal de cada pessoa.
      </p>

      <form>
        <input
          type="number"
          placeholder="Digite a sua altura. Ex: 1.5 (em m)"
          value={heightField > 0 ? heightField : ''}
          onChange={(event) => setHeightField(parseFloat(event.target.value))}
        />
        <input
          type="number"
          placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
          value={weightField > 0 ? weightField : ''}
          onChange={(event) => setWeightField(parseFloat(event.target.value))}
        />
        <button onClick={handleCalculateButton}>Calcular</button>
      </form>
    </div>
  );
});
