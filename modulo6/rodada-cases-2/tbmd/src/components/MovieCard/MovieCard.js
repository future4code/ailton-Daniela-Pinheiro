import React from "react"
import "./MovieCard.css"
import { useNavigate } from "react-router-dom"
import { IMG_BASE_URL } from "../../constants/urls"
import { goToMovieDetailsPage } from "../../routes/coordinator"

export default function MovieCard(props) {
    const movie = props.movie
    const navigate = useNavigate()

    const releaseDate = new Date(movie.release_date).toLocaleDateString()  //arrumar data

    const onClickMovie = (id) => {
        goToMovieDetailsPage(navigate, id)
    }

    return <div className="Movie-card" key={movie.id} onClick={() => onClickMovie(movie.id)}>
        <img className="Poster" src={IMG_BASE_URL + movie.poster_path} alt={movie.title} />
        <div className="Title-card">
            <h4 className="Movie-title">{movie.title}</h4>
            <h4 className="Release-date">{releaseDate}</h4>
        </div>
    </div>
}