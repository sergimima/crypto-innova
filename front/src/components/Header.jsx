import { Link } from "react-router-dom";

export function Header () {
return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light " id="navbarToggleExternalContent">
            <div className="container-fluid collapse">
                <a className="navbar-brand" href="#">Inicio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse lateral-left" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/news">Noticias</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/projects">Proyectos</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/balance">Formacion</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
                <div class="d-grid gap-2 d-md-block">
                    <Link className="btn btn-link" aria-current="page" to="/login">Iniciar sesión</Link>
                </div>
            </div>
        </nav>
    )
}