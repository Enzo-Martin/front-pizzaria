import CredentialUser from "../components/CredentialUser"
import Menufuncionario from "../Menufuncionario/Menufuncionario"
 
const Homefuncionario = () => {
 
    return (
        <div className="container">
           
            <Menufuncionario/>
            <CredentialUser title="Home Page Funcionário"/>

            <p>Home Funcionário</p>
 
        </div>
    )
 
 
 
}
 
export default Homefuncionario