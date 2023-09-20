import React, { useState } from 'react';

export default function AtributosPrincipais({ nome, ficha, valoresExtras }) {
  let { atributos } = ficha;
  let dt = atributos.destreza + 10;

  //VIDA
  let vidaEmPorcentagem =
    1.0 + (valoresExtras['% de vida'] ? valoresExtras['% de vida'] / 100 : 0);

  let hpMaximo =
    (40 + atributos.constituição * 2 + valoresExtras.vida) * vidaEmPorcentagem;

  //SANIDADE
  let sanidadeMaxima = valoresExtras.sanidade
    ? 25 + valoresExtras.sanidade
    : 25;

  //DEFESAS
  let armaduraExtra = valoresExtras.armadura ? valoresExtras.armadura : 0;

  let resistenciaMagicaExtra = valoresExtras['resistência mágica']
    ? valoresExtras['resistência mágica']
    : 0;

  let defesaExtra = valoresExtras.defesa ? valoresExtras.defesa : 0;

  let armadura = armaduraExtra + defesaExtra;
  let resistenciaMagica = resistenciaMagicaExtra + defesaExtra;

  return (
    <div id="atributosPrincipais">
      <img id="foto" src={ficha.foto} alt={`Imagem do ${ficha.nome}`} />
      <div id="status">
        <table>
          <thead>
            <tr>
              <th colspan="3" id="nome">
                {nome}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>DT</th>
              <th>Vida</th>
              <th>Sanidade</th>
            </tr>
            <tr>
              <td id="dt">{dt}</td>
              <td id="hp">
                {`${
                  ficha.hpatual > hpMaximo ? hpMaximo : ficha.hpatual
                } / ${hpMaximo}`}
              </td>
              <td id="sanidade">
                {`${
                  ficha.sanidadeatual > sanidadeMaxima
                    ? ficha.sanidadeatual
                    : ficha.sanidadeatual
                } / ${sanidadeMaxima}`}
              </td>
            </tr>
            <tr>
              <th>Armadura</th>
              <th>Resistência Mágica</th>
              <th>Inspiração</th>
            </tr>
            <tr>
              <td id="armadura">{armadura}</td>
              <td id="resistenciaMagica">{resistenciaMagica}</td>
              <td id="inspiracao">{ficha.inspiracao}</td>
            </tr>
          </tbody>
        </table>
        <table id="atributos">
          <thead>
            <tr>
              <th colspan="2">Atributos</th>
            </tr>
          </thead>
          <tbody>
            <tr className="forca">
              <th>Força</th>
              <td id="forca">
                {!valoresExtras['força']
                  ? atributos['força']
                  : atributos['força'] + valoresExtras['força']}
              </td>
            </tr>
            <tr className="inteligencia">
              <th>Inteligência</th>
              <td id="inteligencia">
                {!valoresExtras['inteligência']
                  ? atributos['inteligência']
                  : atributos['inteligência'] + valoresExtras['inteligência']}
              </td>
            </tr>
            <tr className="destreza">
              <th>Destreza</th>
              <td id="destreza">
                {!valoresExtras.destreza
                  ? atributos.destreza
                  : atributos.destreza + valoresExtras.destreza}
              </td>
            </tr>
            <tr className="sabedoria">
              <th>Sabedoria</th>
              <td id="sabedoria">
                {!valoresExtras.sabedoria
                  ? atributos.sabedoria
                  : atributos.sabedoria + valoresExtras.sabedoria}
              </td>
            </tr>
            <tr className="constituicao">
              <th>Constituição</th>
              <td id="constituicao">
                {!valoresExtras['constituição']
                  ? atributos['constituição']
                  : atributos['constituição'] + valoresExtras['constituição']}
              </td>
            </tr>
            <tr className="carisma">
              <th>Carisma</th>
              <td id="carisma">
                {!valoresExtras.carisma
                  ? atributos.carisma
                  : atributos.carisma + valoresExtras.carisma}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
