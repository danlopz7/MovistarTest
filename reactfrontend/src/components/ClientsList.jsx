import { useContext } from "react";
import { ClientRow } from "./ClientRow"
import { ClientContext } from "../context/ClientContext";

export const ClientsList = () => {

    const { clients } = useContext(ClientContext);

    return (
        <table className="table table-hover table-striped">
            <thead className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Usuario</th>
                    <th>Correo</th>
                    <th>Teléfono</th>
                    <th>Actualizar</th>
                    <th>Detalles</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    clients.map(({ id, username, email, phone }) => (
                        <ClientRow
                            key={id}
                            id={id}
                            username={username}
                            email={email}
                            phone={phone}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}
