import { Routes, Route, Navigate } from "react-router-dom"
import { ClientProvider } from "../context/ClientProvider"
import { RegisterPage } from "../pages/RegisterPage"
import { ClientsPage } from "../pages/ClientsPage"
import { Navbar } from "../components/layout/Navbar"

export const ClientRoutes = () => {

    return (
        <>
            <ClientProvider>
                <Navbar />
                <Routes>
                    <Route path="clients" element={<ClientsPage />} />

                    <Route path="clients/register" element={<RegisterPage />} />

                    <Route path="clients/edit/:id" element={<RegisterPage />} />

                    <Route path="/*" element={<Navigate to="/clients" />} />
                </Routes>
            </ClientProvider>
        </>
    )
}
