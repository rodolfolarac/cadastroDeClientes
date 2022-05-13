import { Api } from './Api.js'

class Cadastrar {
    static formCadastrar = document.querySelector('#formCadastrar')

    static adicionarEvento(){
        
        this.formCadastrar.addEventListener('submit', (event)=>{
            event.preventDefault();
            const values = {
                nome: "",
                idade: 72,
                cpf: 12345678912,
                data_nasc: "",
                sexo: "",
                email: "",
                endereco: {
                  cep: "",
                  rua: "",
                  numero: "",
                  bairro: "",
                  cidade: "",
                  estado: ""
                },
                telefone_fixo: ""
              }
            const formItens = [...event.currentTarget]

            
            formItens.forEach((informacao) =>{
                // console.log(informacao)

                if(!values.endereco[informacao.name]){
                    values.endereco[informacao.name] = informacao.value
                }
                if(informacao.name !== ''){
                    values[informacao.name] = informacao.value;
                    
                }
                
                
            })
            console.log(values)
            Api.cadastrarCliente(values)
        })
        
    }
}







Cadastrar.adicionarEvento()






console.log( await Api.listarClientes())







export { Cadastrar }
