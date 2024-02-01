import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { ClientContext } from "../context/ClientContext";

export const ClientRow = ({ id, username, email, phone }) => {

    const { handlerClientSelectedForm, handlerRemoveClient } = useContext(ClientContext);

    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    //supongamos que puedo pasar solo el id
                    onClick={() => handlerClientSelectedForm(
                        id, true
                        //username,
                        //email,
                        //phone
                    )}
                >
                    update
                </button>
            </td>
            <td>
                <NavLink className={'btn btn-secondary btn-sm'}
                    to={'/clients/edit/' + id}>
                    Ver Detalle
                </NavLink>

            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handlerRemoveClient(id)}
                >
                    remover
                </button>
            </td>
        </tr>
    )
}
