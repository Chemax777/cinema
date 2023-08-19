import { Link } from "react-router-dom"
import "./star-card.css"

function StarCard({ starInfo }) {
    const { id, image, name, role } = starInfo
    return (
        <Link to={`/actor-details/${id}`}>
            <div className="star-card">
                <div className="star-card__poster">
                    <img src={image} alt={name} />
                </div>
                <div className="star-card__name">
                    {name}
                </div>
                <div className="star-card__role">
                    {role}
                </div>
            </div>
        </Link>
    )
}

export default StarCard