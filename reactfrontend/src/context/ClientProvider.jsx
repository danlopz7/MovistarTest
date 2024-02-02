import { useClients } from "../hooks/useClients";
import { ClientContext } from "./ClientContext";

export const ClientProvider = ({ children }) => {

    const {
        clients,
        clientSelected,
        initialClientForm,
        visibleForm,
        errors,
        handlerAddClient,
        handlerRemoveClient,
        handlerClientSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        getClients
    } = useClients();

    return (
        <ClientContext.Provider value={
            {
                clients,
                clientSelected,
                initialClientForm,
                visibleForm,
                errors,
                handlerAddClient,
                handlerRemoveClient,
                handlerClientSelectedForm,
                handlerOpenForm,
                handlerCloseForm,
                getClients
            }
        }>
            {children}
        </ClientContext.Provider>
    )
}
