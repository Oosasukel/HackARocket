import { mensagemContato } from "./models/contato.model";
import { mensagemTexto } from "./models/mensagem.model";
import { redisClient } from "./redis/redisClient";
import { empresa } from "./models/empresa.model";
import connection from "./database/connection";
import { extrairCliente } from "./utils";
import { templates, getEstado } from "./messageTemplates";

const redis = new redisClient();
var dbConnection = connection;

const dados: empresa = {
  descricao: "Pastelaria",
  numero: "5515997332831",
  cep: "18195000",
  nome: "Ex-Force Pasteis",
};

dbConnection
  .insert(dados)
  .into("empresas")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

const textoExemplo: mensagemTexto = {
  from: "tall-leader",
  to: "5515997332834",
  contents: [
    {
      type: "text",
      text: "Testando a mensagem",
    },
  ],
};

export function processarRequisicao(requisicao: any) {
  const cliente = extrairCliente(requisicao);

  if (cliente.numero != "") {
    const estado = getEstado(cliente.numero);

    if (estado == "0") {
      templates["0"].funcao(cliente);
    } else if (estado == "1") {
      templates["1"].funcao(cliente);
    } else if (estado == "2") {
      templates["2"].funcao(cliente);
    } else if (estado == "3") {
      templates["3"].funcao(cliente);
    } else if (estado == "4") {
      templates["4"].funcao(cliente);
    } else if (estado == "5") {
      templates["5"].funcao(cliente);
    } else if (estado == "6") {
      templates["6"].funcao(cliente);
    } else if (estado == "7") {
      templates["7"].funcao(cliente);
    } else if (estado == "8") {
      templates["8"].funcao(cliente);
    } else if (estado == "9") {
      templates["9"].funcao(cliente);
    } else if (estado == "10") {
      templates["10"].funcao(cliente);
    }
  }
}
