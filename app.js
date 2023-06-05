const express = require('express') // Importar

const app = express() // Crear el webservice

const data = [
    { id: 1, name: 'jose' },
    { id: 2, name: 'joselito' },
    { id: 3, name: 'josefa' },
    { id: 4, name: 'joselo' },
];

app.get('/', function (req, res) {
    res.send('Hello orld 2')
});

app.get('/users', (request, response) => {
    response.json(data);
});

app.get('/users/:id', (request, response) => {
    const { id } = request.params;

    const user = data.find((u) => u.id === +id);
  
    response.json(user.name);
});

app.post('/users', (request, response) => {
    response.status(201).json('Esto es el Post');
})

app.listen(3000, () => console.log('Running at port 3000'));