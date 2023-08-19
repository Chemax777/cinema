
import NavMenu from "../../components/nav-menu"
import CinemaHall from "../../components/cinema-hall"
import Footer from "../../components/footer"

function Ticket() {
    return (
        <div className="ticket__page">
            <NavMenu></NavMenu>
            <CinemaHall></CinemaHall>
            <Footer></Footer>
        </div>
    )
}

export default Ticket