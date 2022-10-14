import React, { useState } from "react"
import "./PopularMoviesPage.css"
import MovieCard from "../../components/MovieCard/MovieCard"
import { useRequestData } from "../../hooks/useRequestData"

export default function PopularMoviesPage() {
    const [page, setPage] = useState(1)

    const onClickPage = (number) => {
        setPage(number)
    }

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
            <p onClick={() => onClickPage(1)}><strong>1</strong></p>
            <p onClick={() => onClickPage(2)}><strong>2</strong></p>
            <p onClick={() => onClickPage(3)}><strong>3</strong></p>
            <p onClick={() => onClickPage(4)}><strong>4</strong></p>
        </div>
    </div>
}