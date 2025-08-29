import express from "express";

const app = express();

app.use(express.json());

const pessoas = [];
var countID = 0;

app.get("/", (request, response) => {
    return response.send(pessoas);
});

app.post("/cadastro", (request, response) => {
    const nome = request.body.nome;
    const telefone = request.body.telefone;

    pessoas.push({
        id: countID++,
        nome,
        telefone
    });

    return response.send({ nome, telefone });
});

app.get("/listar:nome", (request, response) => {
    const { nome } = request.params;
    return response.send({nome});
})

app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080");
});

// http://localhost:8080    