const express = require("express");

const app = express();

app.get("/alunos", (request, response) => {

    // http://127.0.0.1:8080/alunos?filtro="Guilherme"
    const filtro = request.query.filtro;
    
    console.log(filtro);

    const alunos = [
        { id: 1, nome: "Guilherme" },
        { id: 2, nome: "Eduardo" },
        { id: 3, nome: "Maria" },
        { id: 4, nome: "Leticia" },
        { id: 5, nome: "Luiz" },
        { id: 6, nome: "José" }
    ];
    
    response.send(alunos);
});

app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080");
});

// ENVIANDO UMA QUERY 
// http://127.0.0.1:8080/alunos?filtro="Guilherme"


