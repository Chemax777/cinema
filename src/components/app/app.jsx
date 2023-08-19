import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./app.css"

import { getData, getFilms, getHeroes } from "../../methods"
import { useEffect, useState } from "react"
import Home from "../../pages/home"
import FilmDetails from "../../pages/film-details"
import Page404 from "../../pages/page404"
import ActorDetails from "../../pages/actor-details"
import Ticket from "../../pages/ticket"
import CurrentTicketContext from "../../context/ticketContext"
import MyTickets from "../../pages/my-tickets"



function App() {
    const [films, setFilms] = useState([])
    const [stars, setStars] = useState([])

    const [currentTicket, setCurrentTicket] = useState({
        film: 'Please choose the film on the home page',
        date: '',
        time: '',
        price: '',
        seatSession: []
    })

    const [prevSessions, setPrevSessions] = useState([])

    let value = {
        currentTicket,
        setCurrentTicket,
        prevSessions,
        setPrevSessions
    }

    useEffect(() => {
        // fetch data about films
        getData('https://api.themoviedb.org/3/discover/movie')
            .then((data) => {
                setFilms(getFilms(data.results))
            })
            .catch((err) => {
                localStorage.error = err
            })
        // fetch data about persons
        getData('https://api.themoviedb.org/3/person/popular')
            .then((data) => {
                setStars(getHeroes(data.results))
            })
            .catch((err) => {
                localStorage.error = err
            })
    }, [])
    return (
        <>
            <CurrentTicketContext.Provider value={value}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home filmsInfo={films} starsInfo={stars}></Home>}></Route>
                        <Route path="/film-details/:id" element={<FilmDetails films={films}></FilmDetails>}></Route>
                        <Route path="/actor-details/:id" element={<ActorDetails stars={stars}></ActorDetails>}></Route>
                        <Route path="/ticket" element={<Ticket></Ticket>}></Route>
                        <Route path="/my-tickets" element={<MyTickets></MyTickets>}></Route>
                        <Route path="*" element={<Page404></Page404>}></Route>
                    </Routes>
                </BrowserRouter>
            </CurrentTicketContext.Provider>
        </>
    )
}

export default App