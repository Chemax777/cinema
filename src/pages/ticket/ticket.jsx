import { useState } from "react"
import NavMenu from "../../components/nav-menu"
import CinemaHall from "../../components/cinema-hall"
import Footer from "../../components/footer"
import Loader from "../../components/loader"

function Ticket() {
    const [loading, setLoading] = useState(true)
    useState(() => {
        setLoading(false)
    }, [])
    return (
        loading ? <Loader /> :
            <div className="ticket__page">
                <NavMenu></NavMenu>
                <CinemaHall></CinemaHall>
                <Footer></Footer>
            </div>
    )
}

export default Ticket