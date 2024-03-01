import React, { useState } from 'react';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [kilometerError, setKilometerErro]= useState("");
  const [averageError,  setAverageError] = useState("");

  const validateUser = () => {
    let username = document.getElementById("username").value;
    let userid = document.getElementById("userid").value;

    if (username === "Admin" && userid === "1234") {
      setIsAuthenticated(true);
      alert("Credenciais corretas!");
    } else {
      alert("Usuario incorreto. Tente novamente!");
    }
  };

    const handleKilometerChange = (event) => {
      const value = event.target.value;
      if (parseInt(value, 10) > 1000) {
        setKilometerErro("O valor máximo é 1000.");
      } else {
        setKilometerErro("");
      }
    };

    const handlerAverageChange =(event) => {
      const value = event.target.value;
      if (parseInt(value, 10) > 50) {
        setAverageError("O valor máximo é 50.");
      } else {
        setAverageError("");
      }
    };

  const renderCalculator = () => {
    return (
      <div>
        <label htmlFor="kilometer">Informe a distância que seu veículo vai percorrer (em km)</label>
        <input type="number" id="kilometer" min={0} max={1000} required onChange={handleKilometerChange} />
        <span style={{color: "red"}}>{kilometerError && kilometerError}</span>
        
        <label htmlFor="average">Informe a média de consumo do seu veículo (em km/l)</label>
        <input type="number" id="average" min={0} max={50} required onChange={handlerAverageChange}/>
        <span style={{color:"red"}}>{averageError && averageError}</span>
        
        <label htmlFor="price">Informe o preço do combustível (por litro)</label>
        <input type="number" id="price" min={0} step={0.01} required/>
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
          <label htmlFor="username">Nome de usuário:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="userid">Senha de acesso</label>
          <input type="password" id="userid" name="userid" required />
          <input type="button" value="Entrar" onClick={validateUser} />
        </div>
      )}
    </main>
  );
}

export default App;
