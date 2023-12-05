import CartWidget from "./CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return (
        <div id="navbar">
            <h1>MultiMarca</h1>
            <ul>
                <li>
                    <a href="">Mujer</a>
                </li>
                <li>
                    <a href="">Hombre</a>
                </li>
                <li>
                    <a href="">Niños</a>
                </li>
                <li>
                    <a href="">Deportes</a>
                </li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar