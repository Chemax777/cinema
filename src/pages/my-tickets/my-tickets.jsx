import NavMenu from "../../components/nav-menu"
import TicketsInfo from "../../components/tickets-info"
import Footer from "../../components/footer"

function MyTickets() {
    
    return (
        <div className="my-tickets__page">
            <NavMenu></NavMenu>
            <TicketsInfo></TicketsInfo>
            <Footer></Footer>
        </div>
    )

}

export default MyTickets