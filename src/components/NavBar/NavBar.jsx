import CartWidget from "./CartWidget"
import "./NavBar.scss"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-black bg-dark text-white">
            <div className="container-fluid">
                <a className="navbar-brand text-warning fs-2" href="#">MultiMarca</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link text-white" href="#">Mujer</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Hombre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Niños</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Deportes</a>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar