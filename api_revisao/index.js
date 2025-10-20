import express from "express";
import knex from "knex";

const conn = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '',
        database: 'escola',
    },
});

const app = express();

app.use(express.json());

app.get("/", (request, response) => {

    const data = conn().select().from("alunos");

    console.log(data[0]);

    response.send("Olá Mundo!");
});

app.post("/aluno", [validaNome, validaRa], (request, response) => {
    const { nome, ra } = request.body;
    console.log({ nome, ra });
    response.send({ nome, ra });
});

function validaNome(req, res, next) {
    const { nome } = req.body;

    if (!nome) {
        res.send({
            msg: "É obrigatorio enviar o campo nome no body!"
        });
    }

    next();
}

function validaRa(req, res, next) {
    const { ra } = req.body;

    if (!ra) {
        res.send({
            msg: "É obrigatorio o envio do campo ra no body!"
        });
    }
    next();
}



app.listen(8080, () => {
    console.log(`O servidor está rodando na porta 8080! 🚀`);
})