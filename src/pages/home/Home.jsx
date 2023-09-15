import NavMenu from "../../components/nav-menu"
import NowInCinema from "../../components/now-in-cinema"
import PopularFilmStar from "../../components/popular-film-star/popular-film-star"
import { Carousel } from "react-bootstrap"

import './home.css'
import starIcon from '../../img/star-icon.svg'
import { useEffect, useState } from "react"
import { getData, getFilms } from "../../methods"
import Footer from "../../components/footer"
import UpBtn from "../../components/up-btn/up-btn"


function Home({ filmsInfo, starsInfo }) {
    const [randomMovies, setRandomMovies] = useState([])

    const randomArray = (arr, len) => {
        let randArr = [];
        for (let i = 0; i < len; i++) {
            let ind = Math.floor(Math.random() * arr.length);
            randArr.push(arr.splice(ind, 1)[0]);
        }
        return randArr;
    }

    useEffect(() => {
        getData('https://api.themoviedb.org/3/discover/movie')
            .then((data) => {
                setRandomMovies(randomArray(getFilms(data.results), 3))
            })
    }, [])

    return (
        <div className="home-page">
            <NavMenu />
            <Carousel>
                {Array.isArray(randomMovies) &&
                    randomMovies.map(film => {
                        const { id, name, overview, bgImage, rating } = film
                        return (
                            <Carousel.Item key={id}>
                                <div className="slider__img">
                                    <img src={bgImage} alt={name} />
                                </div>
                                <Carousel.Caption>
                                    <h3 className="slider__title">{name}</h3>
                                    <p className="slider__overview">{overview}</p>
                                    <div className="slider__rating">
                                        <img className="star-icon" src={starIcon} alt="star icon" />
                                        {rating}
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
            <NowInCinema info={filmsInfo}></NowInCinema>
            <PopularFilmStar info={starsInfo}></PopularFilmStar>
            <Footer></Footer>
            <UpBtn></UpBtn>
        </div>
    )
}

export default Home