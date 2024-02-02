import axios from 'axios'

const BASE_URL = 'http://localhost:8080/clients'

export const findAll = async () => {

    try {
        const response = await axios.get(BASE_URL)
        return response
    } catch (error) {
        console.error(error)
    }

    return null
}

export const save = async ({ username, name, lastname, email, phone, identification, addresses }) => {
    try {
        return await axios.post(BASE_URL, {
            username,
            name,
            lastname,
            email,
            phone,
            identification,
            addresses
        })
    } catch (error) {
        throw error;
    }
}

export const update = async ({ id, username, name, lastname, email, phone, identification, addresses }) => {
    try {
        return await axios.put(`${BASE_URL}/${id}`, {
            username,
            name,
            lastname,
            email,
            phone,
            identification,
            addresses
        })
    } catch (error) {
        throw error;
    }
}

export const remove = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`)
    } catch (error) {
        console.error(error)
    }
}
