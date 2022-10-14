import React from "react"
import "./PopularMoviesPage.css"
import MovieCard from "../../components/MovieCard/MovieCard"
import { useRequestData } from "../../hooks/useRequestData"

export default function PopularMoviesPage() {
    const movies = useRequestData([], '/movie/popular')

    return <div className="Movies-container">
        <div className="Tags">
            <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
        </div>
        <div className="Popular-movies">
            {movies.results && movies.results.map(movie => {
            return <MovieCard movie={movie} />
            })}
        </div>
    </div>
}