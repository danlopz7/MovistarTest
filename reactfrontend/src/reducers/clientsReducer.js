
export const clientsReducer = (state = [], action) => {

    switch (action.type) {
        case 'addClient':

            return [
                ...state,
                {
                    ...action.payload
                }
            ];

        case 'removeClient':
            return state.filter(client => client.id !== action.payload);

        case 'updateClient':
            return state.map(u => {
                if (u.id === action.payload.id) {
                    return {
                        ...action.payload
                    };
                }
                return u;
            })

        case 'loadingClients':
            return action.payload;

        default:
            return state;
    }
}