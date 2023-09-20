import React, { useState } from 'react';

export default function Reliquias({ ficha }) {
  let { reliquias } = ficha;
  let reliquiasComEfeitos = reliquias.filter((reliquia) => !!reliquia.efeitos);
  return (
    <div id="reliquias">
      <table>
        <thead>
          <tr>
            <th colspan="3">Relíquias</th>
          </tr>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Efeito</th>
          </tr>
        </thead>
        <tbody id="table-reliquias">
          {reliquiasComEfeitos.map((item, index) =>
            item.efeitos.map((efeito, efeitoIndex) => (
              <tr key={index + '-' + efeitoIndex}>
                {efeitoIndex === 0 ? (
                  <td rowSpan={item.efeitos.length}>{item.nome}</td>
                ) : null}
                <td>{efeito.descrição}</td>
                <td>{efeito.dados}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
