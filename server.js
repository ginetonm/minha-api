const express = require('express');
const app = express();
const port = 3000;

// Lista estática de filmes
const filmes = [
    { id: 1, titulo: "Interestelar", descricao: "Uma viagem pelo espaço-tempo." },
    { id: 2, titulo: "Inception", descricao: "Um mundo dentro dos sonhos." },
    { id: 3, titulo: "O Senhor dos Anéis", descricao: "Uma jornada épica pela Terra Média." }
];

// Rota raiz
app.get('/', (req, res) => {
    res.send('Olá, bem-vindo à minha API!');
});

// Rota para listar os filmes
app.get('/filmes', (req, res) => {
    res.json(filmes);
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
