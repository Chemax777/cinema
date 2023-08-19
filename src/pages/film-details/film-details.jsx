import { useState, useEffect } from "react";
import NavMenu from "../../components/nav-menu";
import { useParams } from "react-router-dom";
import { getData } from "../../methods";
import MovieInDetails from "../../components/movie-in-details";
import Footer from "../../components/footer";

function FilmDetails({films}) {
    const { id } = useParams()

    const [currentMovie, setCurrentMovie] = useState({})
    const [currentSessions, setCurrentSessions] = useState([])


    useEffect(() => {
        getData(`https://api.themoviedb.org/3/movie/${id}`)
            .then(data => {
                setCurrentMovie(data)
            })
    }, [])

    useEffect(() => {
        setCurrentSessions(films.filter(film => film.id == id)
        .map(el => el.sessions)
        )
    }, [films])

    return (
        <div className="film-details-page">
            <NavMenu></NavMenu>
            <MovieInDetails movie={currentMovie} curSessions={currentSessions}></MovieInDetails>
            <Footer></Footer>
        </div>
    )
}

export default FilmDetails