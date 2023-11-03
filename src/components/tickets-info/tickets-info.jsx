import { useContext, useEffect, useState } from "react"
import CurrentTicketContext from "../../context/ticketContext"
import { Link } from "react-router-dom"
import { nanoid } from "nanoid"

import "./tickets-info.css"

function TicketsInfo() {
    const allTickets = useContext(CurrentTicketContext)

    const [ticketsData, setTicketsData] = useState([])

    useEffect(() => {
        const localTickets = JSON.parse(localStorage.getItem('localTickets'))
        localTickets ? setTicketsData(localTickets) : setTicketsData(allTickets)
    }, [])
    return (
        <div className="my-ticket__ticket-info">
            {
                Array.isArray(ticketsData.prevSessions) && ticketsData.prevSessions.length > 0 ?
                    ticketsData.prevSessions.map((ticket, i) => {
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
                                            const seatId = nanoid()
                                            return <div key={seatId}>{seat.place}</div>
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