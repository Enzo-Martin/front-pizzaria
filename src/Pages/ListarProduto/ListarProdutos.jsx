import React, {useState, useEffect} from "react"
import Menufuncionario from "../Menufuncionario/Menufuncionario"
import api from "../../services/api"
 
const ListarProdutos = () => {

  // useState : é um hook do react que serve para armazenar e controlar o estado de um componente (variáveis)
    // ele permite que você declare variáveis que lembram valores entre renderzações do componente
   
    // Composição const [variável, função para alterar o valor da variável] = (valor inicial da variável)
 
    // Para nosso aplicativo, preciso de uma array de produtos iniciados com um array vazio
    // Por quê? O objetivo é esse array seja preenchido com os produtos da API - Back End
    // No momento em que a página for carregada
 
    const [produtos, setProdutos] = useState([])
 
    // useEffect: é um hook do react que serve para executar códigos que fica fora do controle direto da renderização
    // visual, os chamados "efeitos colaterais"
    // Exemplo: buscar dados de uma API, configurar cronometros, fazer algo quando o usuário aperta uma tecla,
 
    useEffect( () => {
 
        api
            .get("/produtos")
            .then((response) => {
                // deu certo :)
                console.log(response.data.data)
                setProdutos(response.data.data)
            })
            .catch((error) => {
                // deu ruim :(
                console.log("Erro ao buscar a lista de produtos. ", error)
            })
    }, [] )   
    
    /*
    const arrayProdutos = [
        {
            id: 1,
            nome: "Pizza Margherita",
            preco: 25.90,
            descricao: "teste"
        },
        {
            id: 2,
            nome: "Pizza Pepperoni",
            preco: 28.90,
            descricao: "teste"
        }
    ];
    */
 
    return (
        <div className="container">
 
            <Menufuncionario />
 
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-success">
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                            <th>Ações</th> {/* Nova coluna de Ações */}
                        </tr>
                    </thead>
                    <tbody>
 
 
                        {produtos.map((produto) => (
                            <tr key={produto.id}>
                                <td style={{ fontSize: "13px" }}> {produto.nome}</td>
                                <td style={{ fontSize: "13px" }}>
                                    {
                                        new Intl.NumberFormat("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        }).format(produto.preco)
                                    }
                                </td>
                                <td style={{ fontSize: "13px" }}> {produto.descricao} </td>
                                <td className="text-center fs-6" style={{ width: "100px" }}>
                                    {/* Botão de Editar */}
                                    <button
                                        className="btn btn-sm btn-primary me-2">
                                        <i className="fas fa-pencil-alt"></i>{" "}
                                        {/* Ícone de editar */}
                                    </button>
 
                                    {/* Botão de Excluir */}
                                    <button
                                        className="btn btn-sm btn-danger">
                                        <i className="fas fa-trash-alt"></i>{" "}
                                        {/* Ícone de excluir */}
                                    </button>
                                </td>
                            </tr>
                        ))}
 
 
 
                    </tbody>
                </table>
            </div>
        </div>
    )
}
 
export default ListarProdutos