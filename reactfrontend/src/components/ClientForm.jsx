import { useContext, useEffect, useState } from "react"
import { ClientContext } from "../context/ClientContext";
import { NavLink } from "react-router-dom";

export const ClientForm = ({ clientSelected, handlerCloseForm }) => {

    const { initialClientForm, handlerAddClient, errors, visibleForm } = useContext(ClientContext);

    const [clientForm, setClientForm] = useState(initialClientForm)

    const { id, username, name, lastname, identification, email, phone, addresses } = clientForm;

    useEffect(() => {
        setClientForm({
            ...clientSelected
        });
    }, [clientSelected]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setClientForm({
            ...clientForm,
            [name]: value,

        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        handlerAddClient(clientForm);
        setClientForm(initialClientForm);
    }


    const onCloseForm = () => {
        handlerCloseForm();
        setClientForm(initialClientForm);
    }

    // Agrega dos nuevos campos de dirección con "Agregar Otra Dirección"
    const handleAddAnotherAddress = () => {
        setClientForm({
            ...clientForm,
            addresses: [...clientForm.addresses, { street: '', number: '' }],
        });
    };

    // modifica una direccion existente
    const handleAddressChange = (index, key, value) => {
        const newAddresses = [...addresses];
        newAddresses[index][key] = value;
        setClientForm({
            ...clientForm,
            addresses: newAddresses,
        });
    };

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

            {!visibleForm && clientForm.addresses.map((address, index) => (
                <div key={index}>

                    <input
                        className="form-control my-3 w-50"
                        placeholder={`Calle ${index + 1}`}
                        name={`street_${index}`}
                        value={address.street}
                        onChange={(e) => handleAddressChange(index, 'street', e.target.value)}
                    />
                    <input
                        className="form-control my-3 w-50"
                        placeholder={`Número ${index + 1}`}
                        name={`number_${index}`}
                        value={address.number}
                        onChange={(e) => handleAddressChange(index, 'number', e.target.value)}
                    />
                </div>
            ))}

            <button
                className="btn btn-primary me-2"
                type="submit">
                {id > 0 ? 'Editar' : 'Crear'}
            </button>

            {visibleForm || <button
                className="btn btn-primary my-2"
                type="button"
                onClick={handleAddAnotherAddress}
            >
                Agregar Otra Dirección
            </button>}

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
