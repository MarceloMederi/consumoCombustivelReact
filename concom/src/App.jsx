import React, { useState } from 'react';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  const renderCalculator = () => {
    return (
      <div>
        <h2>Calculadora</h2>
        <label htmlFor="km">Informe o km atual do seu carro</label>
        <input type="num" id="km" required/>
      </div>
    );
  };

  return (
    <main>
      <h1>Controle de abastecimento</h1>

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
