import "./popular-film-star.css"
import StarCard from "./star-card"

function PopularFilmStar({ info }) {
    return (
        <div className="popular-stars">
            <h2 className="popular-stars__header header">Popular movie stars</h2>
            <div className="popular-stars__info">
                {Array.isArray(info) &&
                    info.map(star => {
                        return (
                            <StarCard key={star.id} starInfo={star}></StarCard>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PopularFilmStar