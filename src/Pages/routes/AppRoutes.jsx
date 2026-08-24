import {
    HashRouter,
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
 
import Homefuncionario from "../Homefuncionario/Homefuncionario"
import ListarProdutos from "../ListarProduto/ListarProdutos"
import ListarCategoria from "../ListarCategoria/ListarCategoria"
import NovoProduto from "../NovoProduto/NovoProduto"

// BrowserRouter: recarrega toda pagina
// HashRouter: reccarega somente onecessario das paginas
 
const AppRoutes = () =>{
 
    return (
     <HashRouter>
        <Routes>
         
           <Route
             path="/"
             element={<Homefuncionario/>}
           />
            <Route
             path="/home"
             element={<Homefuncionario/>}
           />
           <Route
             path="/produtos"
             element={<ListarProdutos/>}
           />
           <Route
             path="/categorias"
             element={<ListarCategoria/>}
           />
           <Route
             path="/produtos/novo"
             element={<NovoProduto/>}
           />
 
 
        </Routes>
     </HashRouter>
    )
}
 
export default AppRoutes