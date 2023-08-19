import { useContext } from "react"
import CurrentTicketContext from "../../context/ticketContext"
import { Link } from "react-router-dom"

import "./tickets-info.css"

function TicketsInfo() {
    const allTickets = useContext(CurrentTicketContext)

    return (
        <div className="my-ticket__ticket-info">
            {
                Array.isArray(allTickets.prevSessions) && allTickets.prevSessions.length > 0 ?
                allTickets.prevSessions.map((ticket, i) => {
                    const { date, time, price, seatSession, total, film } = ticket
                    return (
                        <div key={i} className="ticket-info__item">
                            <div className="session-info">
                                <div className="session-info__date">
                                    <span>Date:</span> {date}
                                </div>
                                <div className="session-info__time">
                                    <span>Time:</span> {time}
                                </div>
                                <div className="session-info__price">
                                    <span>Price:</span> {price}
                                </div>
                                <div className="session-info__places">
                                    <span>Places:</span>
                                    {seatSession.map(seat => {
                                        return <div>{seat.place}</div>
                                    })}
                                </div>
                                <div>
                                    <div className="session-info__total">
                                        <span>Total:</span> {total}
                                    </div>
                                </div>
                            </div>
                            <div className="film-info">
                                <div className="film-info__poster">
                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${film.poster_path}`} alt={`${film.title} poster`} />
                                </div>
                                <div className="film-info__title">
                                    {film.title}
                                </div>
                            </div>
                        </div>
                    )
                }) : 
                <div className="no-tickets">You haven't bought a ticket yet. You can see current sessions on the <Link to={'/'}>main page.</Link></div>
            } 
        </div>
    )
}

export default TicketsInfo