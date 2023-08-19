import './actor-in-details.css'
import starIcon from '../../img/star-icon.svg'
import { Link } from 'react-router-dom'

function ActorInDetails({ currentActor, stars }) {
    const { id, name, birthday, biography, place_of_birth, popularity, profile_path, imdb_id } = currentActor
    return (
        <div className="actor-details__container">
            <div className="actor-details__info">
                <div className="info__poster">
                    <img src={`https://image.tmdb.org/t/p/w780${profile_path}`} alt={name} />
                </div>
                <div className="info__text">
                    <ul>
                        <li className="text__name">{name}</li>
                        <li className="text__birthday"><span>Birthday: </span>{birthday ? birthday : 'no data'}</li>
                        <li className="text__place-of-birth"><span>Place of birth: </span>{place_of_birth ? place_of_birth : 'no data'}</li>
                        <li className="text__popularity"><span>Popularity: </span>{popularity}</li>
                        <li className="text__imdb-link">
                            <a href={`https://www.imdb.com/name/${imdb_id}/`} target="_blank" rel="noopener noreferrer">
                                <img src="https://1000logos.net/wp-content/uploads/2023/01/IMDb-logo.png" alt="imdb logo" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="actor-details__biography">
                <h2 className="biography__header">Biography</h2>
                <p className="biography__text">{biography}</p>
            </div>
            <div className="actor-details__films">
                <h2 className="films__header">Popular films</h2>
                <div className='films__info'>
                    {Array.isArray(stars) ?
                        stars.filter(star => star.id === id)
                            .map(star => {
                                return (
                                    star.films.map(film => {
                                        return (
                                            <Link key={film.id} to={`/film-details/${film.id}`}>
                                                <div key={film.id} className="film-card details">
                                                    <div className="film-card__poster">
                                                        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${film.poster_path}`} alt={film.title} />
                                                    </div>
                                                    <div className="film-card__name">
                                                        {film.title || film.name}
                                                    </div>
                                                    <div className="film-card__date">
                                                        {film.release_date || film.first_air_date}
                                                    </div>
                                                    <div className="film-card__rating">
                                                        <img src={starIcon} alt="star icon" /><span> {film.vote_average}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })
                                )
                            }) :
                        null
                    }
                </div>
            </div>
        </div>
    )
}

export default ActorInDetails