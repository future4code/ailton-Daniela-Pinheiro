import React from "react"
import "./MovieCard.css"
import { IMG_BASE_URL } from "../../constants/urls"

export default function MovieCard(props) {
    const movie = props.movie
    const releaseDate = new Date(movie.release_date).toLocaleDateString()

    return <div className="Movie-card">
        <img className="Poster" src={IMG_BASE_URL + movie.poster_path} />
        <div className="Title-card">
            <h4 className="Movie-title">{movie.title}</h4>
            <h4 className="Release-date">{releaseDate}</h4>
        </div>
    </div>
}