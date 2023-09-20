import React, { useState, useEffect } from 'react';
import './style.css';
import AtributosPrincipais from '../components/atributosPrincipais/index.js';
import AtributosSecundarios from '../components/atributosSecundarios/index.js';
import Reliquias from '../components/reliquias/index.js';
import Itens from '../components/itens/index.js';
import ordenarNome from '../utils/sort.js';

export default function App() {
  const [ficha, setFicha] = useState();
  const [personagem, setPersonagem] = useState("zenith beifong d'weller");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://anxious-puce-cloak.cyclic.cloud/chars/${personagem}`)
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
        <a onClick={() => setPersonagem('lukas hysi')}>Lukas Hysi</a>
        <a onClick={() => setPersonagem('nicole freitas')}>Nicole Freitas</a>
        <a onClick={() => setPersonagem('rafael dewitt')}>Rafael DeWitt</a>
        <a onClick={() => setPersonagem('violet müller bohn')}>
          Violet Müller Bohn
        </a>
        <a onClick={() => setPersonagem('zophise monchèrt')}>
          Zophise Monchèrt
        </a>
      </nav>
      <AtributosPrincipais ficha={ficha} valoresExtras={valoresTotal} />
      <AtributosSecundarios ficha={ficha} valoresExtras={valoresTotal} />
      <Reliquias ficha={ficha} />
      <Itens ficha={ficha} />
    </>
  );
}
