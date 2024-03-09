import React, { useState } from 'react';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [kilometerError, setKilometerError] = useState("");
  const [averageError, setAverageError] = useState("");
  const [priceError, setPriceError] = useState("");

  const validateUser = () => {
    let username = document.getElementById("username").value;
    let userid = document.getElementById("userid").value;

    if (username === "Admin" && userid === "Admin") {
      setIsAuthenticated(true);
      alert("Credenciais corretas!");
    } else {
      alert("Usuario incorreto. Tente novamente!");
    }
  };

  const handleKilometerChange = (event) => {
    const value = event.target.value;
    const numericRegex = /^\d+$/;
    if (!numericRegex.test(value)) {
      setKilometerError("Entrada inválida. Por favor, insira um número.");
    } else if (parseInt(value, 10) > 1000) {
      setKilometerError("O valor máximo é 1000.");
    } else {
      setKilometerError("");
    }
  };

  const handleAverageChange = (event) => {
    const value = event.target.value;
    const numericRegex = /^\d+$/;
    if (!numericRegex.test(value)) {
      setAverageError("Entrada inválida. Por favor, insira um número.");
    } else if (parseInt(value, 10) > 50) {
      setAverageError("O valor máximo é 50.");
    } else {
      setAverageError("");
    }
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    const numericRegex = /^\d*\.?\d+$/;
    if (!numericRegex.test(value)) {
      setPriceError("Entrada inválida. Por favor, insira um número.");
    } else if (parseFloat(value, 0.01) > 10.) {
      setPriceError("O valor máximo é 10");
    } else {
      setPriceError("");
    }
  };

  const renderCalculator = () => {
    return (
      <div>
        <div>
          <label htmlFor="kilometer">Informe a distância que seu veículo vai percorrer (em km)</label>
          <input type="number" id="kilometer" min={0} max={1000} required onChange={handleKilometerChange} />
          <span style={{ color: "red" }}>{kilometerError && kilometerError}</span>
        </div>

        <div>
          <label htmlFor="average">Informe a média de consumo do seu veículo (em km/l)</label>
          <input type="number" id="average" min={0} max={50} required onChange={handleAverageChange} />
          <span style={{ color: "red" }}>{averageError && averageError}</span>
        </div>

        <div>
          <label htmlFor="price">Informe o preço do combustível (por litro)</label>
          <input type="number" id="price" min={0} step={0.01} max={10.00} required onChange={handlePriceChange} />
          <span style={{color: "red" }}>{priceError && priceError}</span>
        </div>
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
            <input type="text" id="username" name="username" required />
          </div>

          <div>
            <label htmlFor="userid">Senha de acesso</label>
            <input type="password" id="userid" name="userid" required />
          </div>

          <input type="button" value="Entrar" onClick={validateUser} />
        </div>
      )}
    </main>
  );
}

export default App;
