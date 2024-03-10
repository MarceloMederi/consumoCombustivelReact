import React, { useState } from 'react';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [kilometerError, setKilometerError] = useState("");
  const [averageError, setAverageError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [username, setUsername] = useState("");
  const [userid, setUserid] = useState("");
  const [kilometer, setKilometer] = useState("");
  const [average, setAverage] = useState("");
  const [price, setPrice] = useState("");
  const [calculationResult, setCalculationResult] = useState(null);

  const validateUser = () => {
    if (username === "Admin" && userid === "Admin") {
      setIsAuthenticated(true);
      alert("Credenciais corretas!");
    } else {
      setKilometerError("Usuário ou senha incorretos. Tente novamente.");
    }
  };

  const handleInputChange = (event, setState, setErrorState, maxValue) => {
    const value = event.target.value;
    setState(value);

    const numericRegex = /^\d*\.?\d+$/;
    if (!numericRegex.test(value)) {
      setErrorState("Entrada inválida. Por favor, insira um número.");
    } else if (parseFloat(value) > maxValue) {
      setErrorState(`O valor máximo é ${maxValue}.`);
    } else {
      setErrorState("");
    }
  };

  const calculateData = () => {
    const validKilometer = parseFloat(kilometer);
    const validAverage = parseFloat(average);
    const validPrice = parseFloat(price);

    if (!isNaN(validKilometer) && !isNaN(validAverage) && !isNaN(validPrice)) {
      const result = (validKilometer / validAverage) * validPrice;
      setCalculationResult(result.toFixed(2));
    } else {
      setKilometerError("Por favor, preencha todos os campos corretamente antes de calcular.");
    }
  };

  const renderCalculator = () => {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="kilometer">Informe a distância que seu veículo vai percorrer (em km)</label>
            <input type="text" id="kilometer" required onChange={(e) => handleInputChange(e, setKilometer, setKilometerError, 1000)} />
            <span className="error">{kilometerError && kilometerError}</span>
          </div>

          <div>
            <label htmlFor="average">Informe a média de consumo do seu veículo (em km/l)</label>
            <input type="text" id="average" required onChange={(e) => handleInputChange(e, setAverage, setAverageError, 50)} />
            <span className="error">{averageError && averageError}</span>
          </div>

          <div>
            <label htmlFor="price">Informe o preço do combustível (por litro)</label>
            <input type="text" id="price" required onChange={(e) => handleInputChange(e, setPrice, setPriceError, 10.00)} />
            <span className="error">{priceError && priceError}</span>
          </div>

          <div>
            <button type="button" onClick={calculateData}>Calcular</button>
          </div>
        </form>

        {calculationResult !== null && (
          <div>
            <h2>Resultado do Cálculo:</h2>
            <p>{`R$ ${parseFloat(calculationResult).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <main>
      <h1>Controle de média</h1>

      {isAuthenticated ? (
        renderCalculator()
      ) : (
        <div>
          <div>
            <label htmlFor="username">Nome de usuário:</label>
            <input type="text" id="username" name="username" required onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div>
            <label htmlFor="userid">Senha de acesso</label>
            <input type="password" id="userid" name="userid" required onChange={(e) => setUserid(e.target.value)} />
          </div>

          <input type="button" value="Entrar" onClick={validateUser} />
          <span className="error">{kilometerError && kilometerError}</span>
        </div>
      )}
    </main>
  );
}

export default App;
