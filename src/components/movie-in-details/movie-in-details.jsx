import { Button } from 'react-bootstrap'

import './movie-in-details.css'

import startIcon from "../../img/star-icon.svg"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CurrentTicketContext from '../../context/ticketContext';

function MovieInDetails({ movie, curSessions }) {
    const today = new Date()

    const {setCurrentTicket} = useContext(CurrentTicketContext)

    const { title, backdrop_path, overview, poster_path, vote_average, release_date, runtime, genres } = movie

    const [isChoose, setIsChoose] = useState(false);

    const chooseSession = (e) => {
        const sessionInfo = {
            date: `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`,
            time: '',
            price: '',
            film: '',
            seatSession: [],
        };

        sessionInfo.time = e.target.innerText.slice(0, 5)
        sessionInfo.price = parseInt(e.target.innerText.slice(8, 11))
        sessionInfo.film = movie

        document.querySelectorAll('.info__session').forEach(el => {
            if (el.classList.contains('chosen-session')) {
                el.classList.remove('chosen-session')
            }
        })

        e.target.classList.toggle("chosen-session")
        setCurrentTicket(sessionInfo)
        setIsChoose(true)
    }

    return (
        <div className="film-details__container">
            {backdrop_path ?
            <div className="film-details__banner">
                <img src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} alt={`${title} banner`} />
            </div> : null}
            <div className="film-details__info">
                <div className={`${backdrop_path ? 'film-details__poster' : 'film-details__poster no-marg'}`}>
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`} alt={`${title} poster`} />
                </div>
                <div className="film-details__info-text">
                    <h3 className="info-text__title">{title}</h3>
                    <div className="info-text__sub-title">
                        <ul>
                            <li className="sub-title__rating"> <img src={startIcon} alt="star icon" />{vote_average} </li>
                            <li className="sub-title__release-date">Release-date: {release_date} </li>
                            <li className="sub-title__runtime">Duration: {runtime} minutes</li>
                            <li className="sub-title__genres">
                                Genres: {Array.isArray(genres) && genres.map((genre, i) => <span key={`#${i}genre`}>{genre.name}/</span>)}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="film-details__overview">
                <h3 className="overview__title">Overview</h3>
                <p className='overview__text'>{overview}</p>
            </div>
            <div className='film-details__sessions'>
                <h3 className="sessions__title">Available sessions {`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`}</h3>
                <div className="sessions__info">
                    {
                        Array.isArray(curSessions) && curSessions.length > 0 ?
                        curSessions.map(session => {
                            return (
                                session.map((el, i) => {
                                    return (
                                        <div key={`#${i}session`} className='info__session' onClick={(e) => { chooseSession(e) }}>
                                            {el.time} : {el.price} ₴
                                        </div>
                                    )
                                })
                            )
                        }) :
                        <div className='info__no-sessions'> Unfortunately, there are no sessions for this movie today. You can watch the actual movie on the  
                            <Link to={`/`}> main page</Link>
                        </div>
                    }
                </div>
            </div>
            <div className='buy-a-ticket'>
                {
                    isChoose ?
                        <Link to={'/ticket'}>
                            <Button variant="light" className='buy-a-ticket__btn' >Buy a ticket</Button>
                        </Link>
                        : null
                }
            </div>
        </div>

    )
}

export default MovieInDetails