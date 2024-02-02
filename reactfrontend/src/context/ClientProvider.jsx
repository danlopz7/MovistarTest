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
        getClients,
        //handleAddAddress,
        //handleAddressChange
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
                getClients,
                //handleAddAddress,
                //handleAddressChange
            }
        }>
            {children}
        </ClientContext.Provider>
    )
}
