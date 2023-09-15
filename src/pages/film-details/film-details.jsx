import { useState, useEffect } from "react";
import NavMenu from "../../components/nav-menu";
import { useParams } from "react-router-dom";
import { getData } from "../../methods";
import MovieInDetails from "../../components/movie-in-details";
import Footer from "../../components/footer";
import Loader from "../../components/loader";
import UpBtn from "../../components/up-btn/up-btn";

function FilmDetails({films}) {
    const { id } = useParams()

    const [loading, setLoading] = useState(true)

    const [currentMovie, setCurrentMovie] = useState({})
    const [currentSessions, setCurrentSessions] = useState([])


    useEffect(() => {
        getData(`https://api.themoviedb.org/3/movie/${id}`)
            .then(data => {
                setCurrentMovie(data)
            })
        setLoading(false)
    }, [])

    useEffect(() => {
        setCurrentSessions(films.filter(film => film.id == id)
        .map(el => el.sessions)
        )
    setLoading(false)
    }, [films])

    return (
        loading ? <Loader/> :
        <div className="film-details-page">
            <NavMenu></NavMenu>
            <MovieInDetails movie={currentMovie} curSessions={currentSessions}></MovieInDetails>
            <Footer></Footer>
            <UpBtn></UpBtn>
        </div>
    )
}

export default FilmDetails