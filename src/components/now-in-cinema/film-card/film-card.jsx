import "./film-card.css"
import { Link } from "react-router-dom"

function FilmCard({ filmInfo }) {
    const { id, image, name, date } = filmInfo
    return (
        <Link key={id} to={`film-details/${id}`}>
            <div className="film-card">
                <div className="film-card__poster">
                    <img src={image} alt={name} />
                </div>
                <div className="film-card__name">
                    {name}
                </div>
                <div className="film-card__date">
                    {date}
                </div>
            </div>
        </Link>
    )
}

export default FilmCard