import "./nav-menu.css"
import Search from "./search"
import { Link } from "react-router-dom"

function NavMenu() {
    return (
        <nav className="nav-menu">
            <Link to={`/`}>
                <div className="nav-menu__logo">Vilm</div>
            </Link>
            <Link to={`/my-tickets`}>
                <div className="nav-menu__my-tickets">My Tickets</div>
            </Link>
            <Search></Search>
        </nav>
    )
}

export default NavMenu