import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getData } from "../../methods"
import NavMenu from "../../components/nav-menu"
import ActorInDetails from "../../components/actor-in-details"
import Footer from "../../components/footer"
import Loader from "../../components/loader"
import UpBtn from "../../components/up-btn/up-btn"

function ActorDetails({stars}) {
    const { id } = useParams()

    const [loading, setLoading] = useState(true)

    const [currentActor, setCurrentActor] = useState({})
    const [actorFilms, setActorFilms] = useState([])

    useEffect(() => {
        getData(`https://api.themoviedb.org/3/person/${id}`)
            .then(data => {
                setCurrentActor(data)
            })
    setLoading(false)
    }, [])


    return (
        loading ? <Loader/> :
        <div className="actor-details__page">
            <NavMenu></NavMenu>
            <ActorInDetails currentActor={currentActor} stars = {stars}></ActorInDetails>
            <Footer></Footer>
            <UpBtn></UpBtn>
        </div>
        
    )
}

export default ActorDetails