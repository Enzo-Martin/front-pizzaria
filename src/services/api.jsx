import axios from "axios";


const api = axios.create({
 
    baseURL: "https://172.19.9.49/pizzariateste/api/v1",
    timeout: 100000, //tempo maximo de resposta (10 segundos)
})

export default api

//Utilize em baseURL

//https://172.19.9.49/pizzariateste/api/v1  -> api do professor "só funciona na escola

//https://localhost:8080/endereco_da_sua_api -> sua api respondendo na porta 8080 "rodar seu back-end local"