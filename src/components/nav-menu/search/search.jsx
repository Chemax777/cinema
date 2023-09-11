import './search.css'
import SearchIcon from '../../../img/search-icon.svg'
import { useEffect, useState } from 'react'
import { getData } from '../../../methods'
import { Link } from 'react-router-dom'


function Search() {
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const searchMovie = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        getData(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`)
            .then(data => setSearchResult(data.results))
    }, [search])

    return (
        <div className="nav-menu__search">
            <div className='search-bar'>
                <input type="text" placeholder='Enter a movie title' onChange={(e) => searchMovie(e)} />
            </div>
            <div className='icon'>
                <img src={SearchIcon} alt="Search Icon" />
            </div>
            <ul className='search__results'>
                {
                    Array.isArray(searchResult) &&
                    searchResult.map((result, i) => {
                        return (
                            <Link key={`#${i}result`} to={`/film-details/${result.id}`}>
                                <li>{result.title}</li>
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Search