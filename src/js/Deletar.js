import { Api } from "./Api.js";


class Deletar{
    


    static async gerarListaNomes(){
        const lista = await Api.listarClientes();
        console.log(lista)
        const listaNomes =  lista.map((cliente) =>cliente.nome)
        console.log(listaNomes)
        this.criarListaSelect(listaNomes)
    }

    static criarListaSelect(listaNomes) {
        let output = '';
        const SelectInput = document.querySelector('#buscarCliente');

        listaNomes.forEach((nome) =>{
            output += `<option value="${nome}">${nome}</option>`
        })

        console.log(output)
        SelectInput.innerHTML = output;


        this.eventButtonDelet();
    }


    /**Evento Botão */


    static eventButtonDelet(){
        const btnDeletar = document.querySelector('.btn_deletar')

        btnDeletar.addEventListener('click', (event)=>{
            event.preventDefault();
            const inputValue = document.querySelector('#buscarCliente').value;
            console.log(inputValue)
            this.buscarCliente(inputValue)
        })
        
    }

    static async buscarCliente(name){
        const clientes = await Api.listarClientes()
        const clienteSelecionado = clientes.find((cliente) => cliente.nome == name)

        console.log(clienteSelecionado.id)
        Api.deletarCliente(clienteSelecionado.id)
    }
}

Deletar.gerarListaNomes();