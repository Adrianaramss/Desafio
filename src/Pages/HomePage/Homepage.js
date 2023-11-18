import React, { useState } from 'react';
import { Container, Title, Label, Button, Input, Result } from "./styled";

function calcularSomatorio(numero) {
  let soma = 0;

  for (let i = 1; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
  }

  return soma;
}

function Homepage() {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');

  const handleClick = () => {
    const numero = parseInt(valor, 10);

    if (!isNaN(numero) && numero > 0) {
      const soma = calcularSomatorio(numero);

      if (soma > 0) {
        setResultado(`${soma}, resultante do somatório dos números menores que ${numero}.`);
      } else {
        setResultado(`Não há números menores que ${numero} divisíveis por 3 ou 5.`);
      }
    } else {
      setResultado('Erro! Digite um número inteiro positivo válido.');
    }
  };

  return (
    <Container>
      <Title>Desafio</Title>
      <Label>
        Digite um número:
        <Input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <Button onClick={handleClick}>Calcular Somatório</Button>
      </Label>
      <Result>{resultado}</Result>
    </Container>
  );
}

export default Homepage;
