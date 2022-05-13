import { Api } from "./Api.js";
import { Inicio } from "./Inicio.js"

const clientes = await Api.listarClientes()

Inicio.templateClientes(clientes)





