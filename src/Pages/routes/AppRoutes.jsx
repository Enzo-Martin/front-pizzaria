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
import EditarProduto from "../EditarProduto/EditarProduto"

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
 
          <Route
          path="/produtos/editar/:id"
          element={<EditarProduto/>}
          />
 
        </Routes>
     </HashRouter>
    )
}
 
export default AppRoutes