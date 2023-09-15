import NavMenu from "../../components/nav-menu"
import TicketsInfo from "../../components/tickets-info"
import Footer from "../../components/footer"
import Loader from "../../components/loader"
import { useEffect, useState } from "react"
import UpBtn from "../../components/up-btn/up-btn"

function MyTickets() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    })
    return (
        loading ? <Loader /> :
            <div className="my-tickets__page">
                <NavMenu></NavMenu>
                <TicketsInfo></TicketsInfo>
                <Footer></Footer>
                <UpBtn></UpBtn>
            </div>
    )

}

export default MyTickets