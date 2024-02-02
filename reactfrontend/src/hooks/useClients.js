import { useReducer, useState } from "react";
import Swal from "sweetalert2";
import { clientsReducer } from "../reducers/clientsReducer";
import { useNavigate } from "react-router-dom";
import { findAll, remove, save, update } from "../services/clientService";

const initialClients = [];

const initialClientForm = {
    id: 0,
    username: '',
    name: '',
    lastname: '',
    email: '',
    phone: '',
    identification: '',
    addresses: []
}

const initialErrors = {
    username: '',
    name: '',
    lastname: '',
    email: '',
    phone: '',
    identification: ''
}

export const useClients = () => {

    const [clients, dispatch] = useReducer(clientsReducer, initialClients);
    const [clientSelected, setClientSelected] = useState(initialClientForm)
    const [visibleForm, setVisibleForm] = useState(false);
    const [errors, setErrors] = useState(initialErrors)

    const navigate = useNavigate()

    const getClients = async () => {
        const result = await findAll();
        console.log(result);
        dispatch({
            type: 'loadingClients',
            payload: result.data,
        });
    }


    const handlerAddClient = async (client) => {
        let response;

        try {
            if (client.id === 0) {
                response = await save(client);
            } else {
                response = await update(client);
            }

            dispatch({
                type: (client.id === 0) ? 'addClient' : 'updateClient',
                payload: response.data,
            });

            Swal.fire(
                (client.id === 0) ?
                    'Cliente creado' :
                    'Cliente Actualizado',
                (client.id === 0) ?
                    'El Cliente ha sido creado con exito!' :
                    'El Cliente ha sido actualizado con exito!',
                'success'
            );
            handlerCloseForm();
            navigate('/clients');

        } catch (error) {
            if (error.response && error.response.status == 400) {
                setErrors(error.response.data);

            } else if (error.response && error.response.status == 500 &&
                error.response.data?.message?.includes('constraint')) {

                if (error.response.data?.message?.includes('UK_username')) {
                    setErrors({ username: 'El username ya existe!' })
                }
                if (error.response.data?.message?.includes('UK_identification')) {
                    setErrors({ identification: 'El documento ya existe!' })
                }
                if (error.response.data?.message?.includes('UK_phone')) {
                    setErrors({ phone: 'El telefono ya esta tomado!' })
                }
                if (error.response.data?.message?.includes('UK_email')) {
                    setErrors({ email: 'El email ya existe!' })
                }

            } else {
                throw error;
            }
        }

    }

    const handlerRemoveClient = (id) => {

        Swal.fire({
            title: 'Esta seguro que desea eliminar?',
            text: "Cuidado el cliente será eliminado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                remove(id)
                dispatch({
                    type: 'removeClient',
                    payload: id,
                });
                Swal.fire(
                    'Cliente Eliminado!',
                    'El Cliente ha sido eliminado con exito!',
                    'success'
                )
            }
        })

    }

    const handlerClientSelectedForm = (id, showModal) => {
        setErrors({})
        const client = clients.find(u => u.id == id) || initialClientForm;
        setVisibleForm(showModal);
        setClientSelected({ ...client });
    }

    const handlerOpenForm = () => {
        setErrors({})
        setClientSelected(initialClientForm)
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setClientSelected(initialClientForm);
        setErrors({})
    }

    return {
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
}