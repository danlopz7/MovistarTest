import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClientForm } from "../components/ClientForm"
import { ClientContext } from "../context/ClientContext";


export const RegisterPage = () => {

    const { clients = [], initialClientForm, handlerClientSelectedForm, clientSelected } = useContext(ClientContext);

    //const [clientSelected, setClientSelected] = useState(initialClientForm);
    
    // todo depende de este id que se pasa por parametro si es que existe para reutilizar el ClientForm
    // ya sea para registro o para actualizar por medio de modal o ruta
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        if (id) {
            handlerClientSelectedForm(id, false)
            //const client = clients.find(u => u.id == id) || initialClientForm;
            //setClientSelected(client);
        }
    }, [id])

    return (
        <div className="container my-4">
            <h4>{clientSelected.id > 0 ? 'Editar' : 'Registrar'} Cliente</h4>
            <div className="row">
                <div className="col">
                    <ClientForm clientSelected={clientSelected} />
                </div>
            </div>
        </div>
    )
}
