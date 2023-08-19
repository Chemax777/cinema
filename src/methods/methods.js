export async function getData(url) {
    const req = await fetch(url, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTYzNzc0MDk5MTkwZTdlZTEyMmRlZTM1MzVlOGU3NSIsInN1YiI6IjY0YjI5ODVkMjNkMjc4MDBjOTNiYTI0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jbemps_MCpCT-LruA9-XfhO2sKJCdCwTF2q_7M7lSgU'
        }
    })
    return await req.json()
}

export function getFilms(dataFrom) {
    const imgUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
    const bigImgUrl = 'https://image.tmdb.org/t/p/w1280'
    let newFilms = dataFrom.map(film => {
        const { id, title, release_date, vote_average, poster_path, backdrop_path, overview } = film
        return {
            id: id,
            name: title,
            date: release_date,
            image: imgUrl + poster_path,
            bgImage: bigImgUrl + backdrop_path,
            rating: vote_average,
            sessions: [
                {
                    time: "10:00",
                    price: 70
                },
                {
                    time: "14:00",
                    price: 90
                },
                {
                    time: "18:00",
                    price: 120
                },
                {
                    time: "22:00",
                    price: 60
                },
            ],
            overview
        }
    })
    return newFilms
}

export function getHeroes(dataFrom) {
    const urlImg = "https://image.tmdb.org/t/p/w220_and_h330_face"
    let heroes = dataFrom.map(hero => {
        const { id, name, profile_path, known_for, popularity, known_for_department } = hero
        return {
            id,
            name,
            image: urlImg + profile_path,
            films: known_for,
            popularity,
            role: known_for_department
        }
    })
    return heroes
}

