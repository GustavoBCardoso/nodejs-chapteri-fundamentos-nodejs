const express = require('express');

const app = express();

app.use(express.json());

/* 
  TIPO DE PARÂMETROS
  Route Params => Identificar um recurso editar/deletar/buscar 
  Query Params => Paginação/Filtro 
  Body Params => Os objetos inserção/alteração
*/

const courses = ["Curso 1", "Curso 2", "Curso 3", "Curso 4"];
app.get('/courses', (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(courses);
});

app.post('/courses', (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(courses);
});

app.put('/courses/:id', (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json(courses);
});

app.patch('/courses/:id', (request, response) => {
  return response.json(courses);
});

app.delete('/courses/:id', (request, response) => {
  return response.json(courses);
});

app.listen(3333);