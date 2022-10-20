import React, { useState } from "react"
import "./PopularMoviesPage.css"
import MovieCard from "../../components/MovieCard/MovieCard"
import { useRequestData } from "../../hooks/useRequestData"

export default function PopularMoviesPage() {
    const [page, setPage] = useState(1)

    const totalPages = 6

    const pages = Array.from(Array(totalPages), (item, index) => {
        if ((index + 1) === page) {
            return <button className="Current-page" key={index} onClick={() => setPage(index + 1)}>
                <strong>{index + 1}</strong>
            </button>
        } else {
            return <button className="Pages-index" key={index} onClick={() => setPage(index + 1)}>
                <strong>{index + 1}</strong>
            </button>
        }
        
    })

    const movies = useRequestData([], '/movie/popular', `&page=${page}`)

    return <div className="Movies-container">
        <div className="Tags">
            <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
        </div>
        <div className="Popular-movies">
            {movies.results && movies.results.map(movie => {
            return <MovieCard movie={movie} />
            })}
        </div>
        <div className="Pagination">
            {pages}
        </div>
    </div>
}