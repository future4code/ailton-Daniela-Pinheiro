import React from "react"
import "./MovieDetailsPage.css"
import { useParams } from "react-router-dom"
import { IMG_BASE_URL, YOUTUBE_BASE_URL } from "../../constants/urls"
import { useRequestData } from "../../hooks/useRequestData"
import MovieCard from "../../components/MovieCard/MovieCard"

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

    const crew = []
    if(credits && credits.crew && credits.crew.length <= 5) {
        for(let item of credits.crew) {
            crew.push(item)
        }
    } else {
        const characters = credits && credits.crew && credits.crew.find(item => {
            return item.job === "Characters"
        })
        characters && crew.push(characters)

        const director = credits && credits.crew && credits.crew.find(item => {
            return item.job === "Director"
        })
        director && crew.push(director)

        const screenplay = credits && credits.crew && credits.crew.find(item => {
            return item.job === "Screenplay"
        })
        screenplay && crew.push(screenplay)

        if(crew.length < 5) {
            const producer = credits && credits.crew && credits.crew.find(item => {
                return item.job === "Producer"
            })
            producer && crew.push(producer)
        }
    }

    const crewCard = crew.map(item => {
        return <div className="Crew-card">
            <h4 className="Crew-title">{item.name}</h4>
            <p>{item.job}</p>
        </div>
    })

    const genres = movie && movie.genres && movie.genres.map(genre => {
        return genre.name
    }).join(", ")

    const recommendations = useRequestData([], `/movie/${params.id}/recommendations`)
    const recommendedMovies = recommendations && recommendations.results && recommendations.results.map(item => {
        return <MovieCard movie={item} />
    })

    const videos = useRequestData([], `/movie/${params.id}/videos`)
    const videoKey = videos && videos.results && videos.results[0] && videos.results[0].key
    const videoUrl = videoKey && `${YOUTUBE_BASE_URL}${videoKey}`

    return movie && <div className="Details-container">
            <div className="Details-background" />

            <img className="Details-poster" src={IMG_BASE_URL + movie.poster_path} alt={movie.title} />
            
            <div className="Movie-details">
                <h2 id="Movie-title">{movie.title} ({releaseYear})</h2>
                <div className="Technical-info">
                    <p>{movie.vote_average}</p>
                    <p>{releaseDateBR} (BR)</p>
                    <p>{genres}</p>
                    <p>{movie.runtime} min</p>
                </div>
                <h3>Sinopse</h3>
                <p id="Details-overview">{movie.overview}</p>
                <div className="Crew-container">
                    {crewCard}
                </div>
            </div>

            
            <div className="Movie-cast">
                <h2 id="Cast-title">Elenco original</h2>
                <div className="Cast-container">
                    {cast}
                </div>
            </div>

            <div className="Movie-trailer">
                <h2 id="Trailer-title">Trailer</h2>
                {videoKey?
                <iframe
                    width="560"
                    height="315"
                    src={videoUrl}
                    title="Trailer"
                    frameborder="0"
                />
                : <p>Não há trailer para este filme.</p>}
            </div>

            <div className="Recommendations">
                <h2 id="Rec-title">Recomendações</h2>
                <div className="Rec-container">
                    {recommendedMovies}
                </div>
                
            </div>
        </div>
}