import React, { useState } from 'react';

export default function Itens({ ficha }) {
  let { reliquias } = ficha;
  let reliquiasComAtributos = reliquias.filter(
    (reliquia) => !!reliquia.atributos
  );
  return (
    <div id="itens">
      <table>
        <thead>
          <tr>
            <th colspan="2">Itens</th>
          </tr>
          <tr>
            <th>Item</th>
            <th>Buff</th>
          </tr>
        </thead>
        <tbody id="table-itens">
          {reliquiasComAtributos.map((reliquia, i) => (
            <tr key={i}>
              <td>{reliquia.nome}</td>
              <td>
                {Object.entries(reliquia.atributos).map(([atributo, valor]) => (
                  <p key={atributo}>
                    <strong>{atributo}:</strong> {valor}
                  </p>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
