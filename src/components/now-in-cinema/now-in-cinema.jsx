import FilmCard from "./film-card"

import "./now-in-cinema.css"

function NowInCinema({ info }) {
    return (
        <div className="now-in-cinema">
            <h2 className="now-in-cinema__header header">Now in cinema</h2>
            <div className="now-in-cinema__films-info">
                {Array.isArray(info) &&
                    info.map(film => {
                        return (
                            <FilmCard key={film.id} filmInfo={film}></FilmCard>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NowInCinema