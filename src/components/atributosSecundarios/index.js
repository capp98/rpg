import React, { useState } from 'react';

export default function AtributosSecundarios({ ficha, valoresExtras }) {
  let { atributos, pericias } = ficha;
  let fields = Object.keys(pericias);
  console.log(valoresExtras);
  let fieldsExtras = Object.keys(valoresExtras);
  console.log(fieldsExtras);
  return (
    <div id="infos">
      <table>
        <thead>
          <tr>
            <th colspan="2">Perícias</th>
          </tr>
        </thead>
        <tbody id="pericias">
          {fields.map((field, i) => (
            <tr key={i} className={field.split('/')[1]}>
              <th>{field.split('/')[0]}</th>
              <td>
                {atributos[field.split('/')[1]] +
                  pericias[field] +
                  (!valoresExtras[field.split('/')[0].toLowerCase()]
                    ? 0
                    : valoresExtras[field.split('/')[0].toLowerCase()]) +
                  (!valoresExtras[field.split('/')[1]]
                    ? 0
                    : valoresExtras[field.split('/')[1]])}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th colspan="2">Extras</th>
          </tr>
        </thead>
        <tbody id="extras">
          {fieldsExtras.map((field, i) => (
            <tr key={i}>
              <th>{field}</th>
              <td id={`extras=${field}`}>{valoresExtras[field]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
