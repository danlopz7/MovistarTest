import { useContext } from "react";
import { ClientForm } from "./ClientForm";
import { ClientContext } from "../context/ClientContext";

export const ClientModalForm = () => {

    const { clientSelected, handlerCloseForm } = useContext(ClientContext);

    return (
        <div className="abrir-modal animacion fadeIn">
            <div className="modal " style={{ display: "block" }} tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {clientSelected.id > 0 ? 'Edit' : 'Create'} Modal Clients
                            </h5>
                        </div>
                        <div className="modal-body">
                            <ClientForm
                                clientSelected={clientSelected}
                                handlerCloseForm={handlerCloseForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
