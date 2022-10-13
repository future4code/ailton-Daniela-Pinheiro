import React from "react"
import MovieCard from "../../components/MovieCard/MovieCard"
import { IMG_BASE_URL } from "../../constants/urls"
import { useRequestData } from "../../hooks/useRequestData"

export default function PopularMoviesPage() {
    // const movies = useRequestData([], '/movie/popular')
    // const fc = useRequestData({}, '/movie/550')

    // const movie = movies.results && movies.results.map(movie => {
    //     return <div key={movie.id}>{movie.title}</div>
    // })

    return <MovieCard />
    // <div>

    // </div>
}