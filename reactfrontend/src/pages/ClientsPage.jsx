import { useContext, useEffect } from "react";
import { ClientModalForm } from "../components/ClientModalForm";
import { ClientsList } from "../components/ClientsList";
import { ClientContext } from "../context/ClientContext";

export const ClientsPage = () => {

    const {
        clients,
        visibleForm,
        handlerOpenForm,
        getClients,
    } = useContext(ClientContext);

    useEffect(() => {
        getClients();
    }, []);

    return (
        <>
            {!visibleForm ||
                <ClientModalForm />}

            <div className='container my-4'>
                <h2>Manejo de clientes</h2>
                <div className="row">
                    <div className="col">
                        {visibleForm ||
                            <button
                                className="btn btn-primary my-3"
                                type="button"
                                onClick={handlerOpenForm}>
                                Nuevo Cliente
                            </button>}
                        {
                            clients.length === 0
                                ? <div className="alert alert-warning">No hay clientes en el sistema!</div>
                                : <ClientsList />
                        }
                    </div>
                </div>
            </div>
            
        </>
    )
}
