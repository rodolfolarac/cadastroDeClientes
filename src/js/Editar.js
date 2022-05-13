import { Api } from "./Api.js";

class Editar {
    static clientes = Api.listarClientes()
    static inputSelect = document.querySelector('#inputSelect')
    static formDados = document.querySelector('.formDados')

    /**Gerar Lista de nomes */

    static async gerarListaClientes(clientes) {



        let listaNomes = await clientes.map((cliente) => {
            return cliente.nome
        })

        this.criarOptions(listaNomes)


    }
    /**Criar as Options do Select */

    static criarOptions(listaNomes) {
        let output = ''
        listaNomes.forEach((nome) => {
            return output += `<option   option value="${nome}">${nome}</option>`
        })


        this.inputSelect.innerHTML = output
    }


    /**Botão de busca */
    static eventoBtnBuscar() {
        const btnBuscar = document.querySelector('.btn_buscar')
        btnBuscar.addEventListener('click', (event) => {
            event.preventDefault();
            let nomeCliente = this.inputSelect.value


            this.resgatarCliente(nomeCliente)

        })
    }


    /**Resgatar Cliente */

    static async resgatarCliente(nomeCliente) {
        const clientes = await Editar.clientes;
        let output = clientes.find((cliente) => {
            return nomeCliente == cliente.nome
        })

        this.inserirDados(output)
    }

    static async inserirDados(cliente) {
        
        const inputName = document.querySelector('#inputName')
        const inputDataNasc = document.querySelector('#inputNasc')
        const inputEmail = document.querySelector('#inputEmail')
        const inputCep = document.querySelector('#inputCep')
        const inputRua = document.querySelector('#inputRua')
        const inputNumero = document.querySelector('#inputNumero')
        const inputBairro = document.querySelector('#inputBairro')
        const inputCidade = document.querySelector('#inputCidade')
        const inputTelefone = document.querySelector('#inputTelefone')


        inputName.value = cliente.nome
        inputDataNasc.value = cliente.data_nasc
        inputEmail.value = cliente.email
        inputCep.value = cliente.endereco.cep
        inputRua.value = cliente.endereco.rua
        inputNumero.value = cliente.endereco.numero
        inputBairro.value = cliente.endereco.bairro
        inputCidade.value = cliente.endereco.cidade
        inputTelefone.value = cliente.telefone_fixo


        console.log(cliente)
        this.eventoBtnEditar(cliente)
    }



    /**Evento Botão de Editar */

    static eventoBtnEditar (cliente){
        const btnEditar = this.formDados
        btnEditar.addEventListener('submit', (event)=>{
            event.preventDefault();


            const values = {};
            const id = cliente.id;

            const dadosFormulario = [...event.currentTarget]
            


            dadosFormulario.forEach((informacao) =>{
                values[informacao.name] = informacao.value
                
            })
            console.log(values)

            Api.editarCliente(id, values)
        })
    }

}





await Editar.gerarListaClientes(await Editar.clientes)

Editar.eventoBtnBuscar()


