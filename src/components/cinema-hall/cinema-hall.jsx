import CurrentTicketContext from "../../context/ticketContext"
import { useEffect, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import ModalWindow from "../modal-window"
import "./cinema-hall.css"


function CinemaHall() {

    const ticket = useContext(CurrentTicketContext)

    const [session, setSession] = useState(ticket.currentTicket)
    const [seats, setSeats] = useState([])
    const [showModal, setShowModal] = useState(false)
    

    const handleShow = () => setShowModal(true);

    const createSeats = (rows, seatsQ) => {
        let seats = []
        for (let i = 1; i < rows + 1; i++) {
            for (let j = 1; j < seatsQ + 1; j++) {
                let row = i;
                let seat = j;
                let reserved = false;
                let random = Math.floor(1 + Math.random() * seatsQ)
                let place = `Row: ${i} Seat: ${j}`

                if (j === random) {
                    reserved = true
                }
                seats.push({ row, seat, reserved, place })
            }
        }
        return seats
    }

    const chooseSeat = (e) => {
        const { film, date, time, price, seatSession } = session
        let total = seatSession.length * price

        if (e.target.classList.contains("seat-reserved")) return;

        if (e.target.classList.contains("seat-chosen")) {
            setSession({
                film,
                date,
                time,
                price,
                seatSession: seatSession.filter(el => el.place != e.target.attributes[1].nodeValue),
                total: total - price
            })
        } else {
            setSession({
                film,
                date,
                time,
                price,
                seatSession: [...seatSession, seats.filter(el => el.place == e.target.attributes[1].nodeValue)[0]],
                total: price + total
            })
        }

        e.target.classList.toggle("seat-chosen")
    }

    const buyTicket = () => {
        ticket.setPrevSessions([...ticket.prevSessions, session])
        handleShow()
    }

    useEffect(() => {
        setSeats(createSeats(10, 14))
    }, [])

    return (
        <>
            <div className="ticket__cinema-hall">
                <div className="cinema-hall__screen">
                    SCREEN
                </div>
                <div className="cinema-hall__seats">
                    {seats.map(el => {
                        return (
                            <div
                                onClick={(e) => chooseSeat(e)}
                                className={el.reserved ? "seat seat-reserved" : "seat"}
                                key={`${el.row}+${el.seat}`}
                                place={el.place}
                            >
                                {el.seat}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="ticket__session-info">
                <h3 className="session-info__header">Session details</h3>
                <div className="session-info__film-title"><span>Movie title:</span> {session.film.title}</div>
                <div className="session-info__film-title"><span>Date:</span> {session.date}</div>
                <div className="session-info__film-title"><span>Time:</span> {session.time}</div>
                <div className="session-info__film-price"><span>Price:</span> {session.price}  ₴</div>
                <div className="session-info__seats">
                    <span>Places:</span>
                    {Array.isArray(session.seatSession) && session.seatSession.length > 0 ?
                        session.seatSession.map((session, i) => {
                            return <div key={`#${i}place`}>{session.place}</div>
                        }) :
                        <div>Please choose the seats</div>
                    }
                </div>
                {session.seatSession.length > 0 &&
                    <div className="session-info__film-total"><span>Total:</span> {session.total}  ₴</div>
                }
                {session.seatSession.length > 0 &&
                    <Button onClick={buyTicket} variant="light" className='buy-a-ticket__btn' >Buy a ticket</Button>
                }
            </div>
            {
                showModal && <ModalWindow showModal={showModal}></ModalWindow>
            }
            
        </>
    )
}

export default CinemaHall