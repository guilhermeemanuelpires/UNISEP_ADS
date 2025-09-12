import express from "express";

const app = express();

app.use(express.json());

app.post("/cadastro", [validaModelo, validaCor, validaAno], (request, response) => {
    const { modelo, cor, ano } = request.body;

    return response.send({ modelo, cor, ano });
});

function validaModelo(request, response, next) {

    const { modelo } = request.body;

    if (!modelo) {
        return response.send({ msg: "O campo modelo é obrigatorio!" });
    }
    return next();
}

function validaCor(request, response, next) {

    const { cor } = request.body;

    if (!cor) {
        return response.send({ msg: "O campo cor é obrigatorio!" });
    }

    return next()
}

function validaAno(request, response, next) {

    const { ano } = request.body;

    if (!ano) {
        return response.send({ msg: "O campo ano é obrigatorio!" });
    }

    return next()
}

app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080!");
});