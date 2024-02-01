import { Route, Routes } from "react-router-dom";
import { ClientRoutes } from "./routes/ClientRoutes";

export const ClientsApp = () => {

    return (
        <Routes>
            <Route path='/*' element={<ClientRoutes />} />
        </Routes>
    )
}
