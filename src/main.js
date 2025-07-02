import { deportes } from './variables.js';
import Handlebars from 'handlebars';

const plantilla = `
  <table border="1">
    <thead>
      <tr>
        <th>Deporte</th>
        <th>Descripción</th>
        <th>Requerimientos</th>
        <th>Ranking (1-5)</th>
      </tr>
    </thead>
    <tbody>
      {{#each deportes}}
        <tr>
          <td>{{nombre}}</td>
          <td>{{descripcion}}</td>
          <td>{{requerimientos}}</td>
          <td>{{ranking}}</td>
        </tr>
      {{/each}}
    </tbody>
  </table>
`;

const template = Handlebars.compile(plantilla);
document.getElementById('contenido').innerHTML = template({ deportes });
