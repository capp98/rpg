import React, { useState, useEffect } from 'react';
import './style.css';
import AtributosPrincipais from '../components/atributosPrincipais/index.js';
import AtributosSecundarios from '../components/atributosSecundarios/index.js';
import Reliquias from '../components/reliquias/index.js';
import Itens from '../components/itens/index.js';
import ordenarNome from '../utils/sort.js';

export default function App() {
  const [ficha, setFicha] = useState();
  const [personagem, setPersonagem] = useState("Zenith Beifong D'weller");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://anxious-puce-cloak.cyclic.cloud/chars/${personagem.toLowerCase()}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFicha(data[0]);
        setIsLoading(false);
      });
  }, [personagem]);

  if (isLoading) return <h1>Tá Carregando</h1>;

  console.log(ficha);
  let valoresTotal = {};
  ficha.reliquias.sort(ordenarNome);

  ficha.reliquias.forEach(({ atributos }) => {
    if (!atributos) return;
    let values = Object.keys(atributos);
    values.forEach((field) => {
      if (field === 'passivo') return;
      if (!valoresTotal[field]) valoresTotal[field] = 0;
      valoresTotal[field] += atributos[field];
    });
  });

  return (
    <>
      <nav>
        <a onClick={() => setPersonagem('Lukas Hysi')}>Lukas Hysi</a>
        <a onClick={() => setPersonagem('Nicole Freitas')}>Nicole Freitas</a>
        <a onClick={() => setPersonagem('Rafael DeWitt')}>Rafael DeWitt</a>
        <a onClick={() => setPersonagem('Violet Müller Bohn')}>
          Violet Müller Bohn
        </a>
        <a onClick={() => setPersonagem('Zophise Monchèrt')}>
          Zophise Monchèrt
        </a>
        <a onClick={() => setPersonagem("Zenith Beifong D'weller")}>
          Zenith Beifong D'weller
        </a>
      </nav>
      <AtributosPrincipais
        nome={personagem}
        ficha={ficha}
        valoresExtras={valoresTotal}
      />
      <AtributosSecundarios ficha={ficha} valoresExtras={valoresTotal} />
      <Reliquias ficha={ficha} />
      <Itens ficha={ficha} />
    </>
  );
}
