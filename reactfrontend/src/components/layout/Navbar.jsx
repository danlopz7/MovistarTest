import { NavLink } from "react-router-dom";
import { BASE_URL } from "../../services/clientService";

export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">ClientsApp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link nav-link-custom mx-2" to="/clients" >
                                Clientes
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav-link-custom" to="/clients/register">
                                Registrar Cliente
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="collapse navbar-collapse justify-content-end">
                    <a href={BASE_URL + "/report"} className="btn btn-outline-success">Exportar Csv</a>
                </div>
            </div>
        </nav>
    );
}