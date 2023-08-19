import { Link } from "react-router-dom"

import "./footer.css"

function Footer() {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer__copyright">
                    <h2 className="copyright__header"><span className="copyright__logo">Vilm</span> © 2021</h2>
                    <span className="copyright__team">powered by <span>tmdb</span></span>
                </div>
                <div className="footer__links">
                    <ul>
                        <Link to={'/my-tickets'}>
                            <li className="links__item">
                                My tickets
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer