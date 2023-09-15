import "./nav-menu.css"
import Search from "./search"
import { Link } from "react-router-dom"

function NavMenu() {

    const toggle = () => {
        const menu = document.querySelector('.nav-menu__items')
        const menuBtn = document.querySelector('.menu-btn')
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
    }

    return (
        <nav className="nav-menu" id="up">
            <div className="nav-menu-logo-btn">
                <Link to={`/`}>
                    <div className="nav-menu__logo">Vilm</div>
                </Link>
                <div className="btn-container">
                    <div className="menu-btn" onClick={toggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="nav-menu__items">
                <Link to={`/my-tickets`}>
                    <div className="nav-menu__my-tickets">My Tickets</div>
                </Link>
                <Search></Search>
            </div>
        </nav>
    )
}

export default NavMenu