class Api {
    static URL = "https://atividade-api-clientes.herokuapp.com/clientes/";

    static async listarClientes(){
        

        const response = await fetch("https://atividade-api-clientes.herokuapp.com/clientes")
        const data     = await response.json()

        return data

    }

    static async cadastrarCliente(data){
        const response = await fetch(`${this.URL}`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })

    }

    static async editarCliente(id, data){

        let response = await fetch("https://atividade-api-clientes.herokuapp.com/clientes/"+id, {
                  method: "PATCH",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body:JSON.stringify(data)
        })
    }

    static async deletarCliente(id){
        
        const response = await fetch("https://atividade-api-clientes.herokuapp.com/clientes/"+id, {
            method: "DELETE",
        })


    }

}

export {Api}