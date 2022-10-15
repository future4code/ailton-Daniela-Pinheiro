import React from "react"
import "./MovieDetailsPage.css"
import { useParams } from "react-router-dom"
import { IMG_BASE_URL } from "../../constants/urls"
import { useRequestData } from "../../hooks/useRequestData"

export default function MovieDetailsPage() {
    const params = useParams()

    const movie = useRequestData({}, `/movie/${params.id}`)

    const releaseDates = useRequestData([], `/movie/${params.id}/release_dates`)
    const releaseDate = releaseDates && releaseDates.results && releaseDates.results.find(item => {
        return item.iso_3166_1 === "BR"
    })

    const releaseDateBR = releaseDate && new Date(releaseDate.release_dates[0].release_date).toLocaleDateString()

    const releaseYear = movie && new Date(movie.release_date).getFullYear()

    const credits = useRequestData({}, `/movie/${params.id}/credits`)
    const cast = credits && credits.cast && credits.cast.map(item => {
        return <div className="Cast-card">
            <img className="Cast-photo" src={IMG_BASE_URL + item.profile_path} alt={item.name} />
            <h4>{item.name}</h4>
            <p><strong>{item.character}</strong></p>
        </div>
    })

    const genres = movie && movie.genres && movie.genres.map(genre => {
        return genre.name
    }).join(", ")

    return movie && <div className="Details-container">
            <div className="Details-background" />

            <img className="Details-poster" src={IMG_BASE_URL + movie.poster_path} alt={movie.title} />
            
            <div className="Movie-details">
                <h2 id="Movie-title">{movie.title} ({releaseYear})</h2>
                <div className="Technical-info">
                    <p>{movie.vote_average}</p> {/* porcentagem (popularity???) */}
                    <p>{releaseDateBR} (BR)</p>
                    <p>{genres}</p>
                    <p>{movie.runtime} min</p>
                </div>
                <h3>Sinopse</h3>
                <p id="Details-overview">{movie.overview}</p>
            </div>

            
            <div className="Movie-cast">
                <h2 id="Cast-title">Elenco original</h2>
                <div className="Cast-container">
                    {cast}
                </div>
            </div>

            <div className="Movie-trailer">
                <p>Trailer</p>
            </div>

            <div className="Recomendations">
                <p>Recomendações</p>
            </div>
        </div>
}