import { useContext, useEffect, useState } from "react"
import { ClientContext } from "../context/ClientContext";
import { NavLink } from "react-router-dom";

export const ClientForm = ({ clientSelected, handlerCloseForm }) => {

    const { initialClientForm, handlerAddClient, errors } = useContext(ClientContext);

    const [clientForm, setClientForm] = useState(initialClientForm)

    const { id, username, name, lastname, identification, email, phone } = clientForm;

    useEffect(() => {
        setClientForm({
            ...clientSelected,
            //password: '',
        });
    }, [clientSelected]);

    const onInputChange = ({ target }) => {
        // console.log(target.value)
        const { name, value } = target;
        setClientForm({
            ...clientForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();

        console.log(clientForm)
        handlerAddClient(clientForm);
        setClientForm(initialClientForm);
    }

    const onCloseForm = () => {
        handlerCloseForm();
        setClientForm(initialClientForm);
    }


    return (
        <form onSubmit={onSubmit}>
            <input
                className="form-control my-3 w-50"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange} />
            <p className="text-danger">{errors?.username}</p>

            <input
                className="form-control my-2 w-50"
                placeholder="Name"
                name="name"
                value={name}
                onChange={onInputChange} />
            <p className="text-danger">{errors?.name}</p>

            <input
                className="form-control my-3 w-50"
                placeholder="Last name"
                name="lastname"
                value={lastname}
                onChange={onInputChange} />
            <p className="text-danger">{errors?.lastname}</p>

            <input
                className="form-control my-3 w-50"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange} />
            <p className="text-danger">{errors?.email}</p>

            <input
                className="form-control my-3 w-50"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={onInputChange} />
            <p className="text-danger">{errors?.phone}</p>

            <input
                className="form-control my-3 w-50"
                placeholder="Identification"
                name="identification"
                value={identification}
                onChange={onInputChange} />
            <p className="text-danger">{errors?.identification}</p>

            <input type="hidden"
                name="id"
                value={id} />

            <button
                className="btn btn-primary"
                type="submit">
                {id > 0 ? 'Editar' : 'Crear'}
            </button>

            {handlerCloseForm ? <button
                className="btn btn-primary mx-2"
                type="button"
                onClick={() => onCloseForm()} >
                Cerrar
            </button>
                :
                <NavLink className="btn btn-primary mx-2" to="/clients"
                    onClick={() => onCloseForm()}>
                    Volver
                </NavLink>
            }
        </form>
    )
}
