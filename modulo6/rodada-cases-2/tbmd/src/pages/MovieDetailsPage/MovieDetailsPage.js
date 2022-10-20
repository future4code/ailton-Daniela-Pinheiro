import React from "react"
import "./MovieDetailsPage.css"
import { useParams } from "react-router-dom"
import { IMG_BASE_URL, YOUTUBE_BASE_URL } from "../../constants/urls"
import { useRequestData } from "../../hooks/useRequestData"
import MovieCard from "../../components/MovieCard/MovieCard"
import CastCard from "../../components/CastCard/CastCard"
import CrewCards from "../../components/CrewCards/CrewCards"
import TechnicalInfo from "../../components/TechnicalInfo/TechnicalInfo"
import UserRatings from "../../components/UserRatings/UserRatings"

export default function MovieDetailsPage() {
    const params = useParams()

    const movie = useRequestData({}, `/movie/${params.id}`)    
    const releaseYear = movie && new Date(movie.release_date).getFullYear()

    const releaseDates = useRequestData([], `/movie/${params.id}/release_dates`)
    const technicalInfo = movie && releaseDates && releaseDates.results && <TechnicalInfo
        movie={movie}
        releaseDates={releaseDates.results}
    />

    const credits = useRequestData({}, `/movie/${params.id}/credits`)
    const cast = credits && credits.cast && credits.cast.map(item => {
        return <CastCard cast={item} />
    })
    const crew = credits && credits.crew && <CrewCards crew={credits.crew} />

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
                    {technicalInfo}
                </div>
                {movie && <UserRatings movie={movie} />}
                <h3>Sinopse</h3>
                <p id="Details-overview">{movie.overview}</p>
                <div className="Crew-container">
                    {crew}
                </div>
            </div>

            
            <div className="Movie-cast">
                <h2 id="Cast-title">Elenco original</h2>
                <div className="Cast-container">
                    {cast}
                </div>
            </div>

            {videoKey && <div className="Movie-trailer">
                <h2 id="Trailer-title">Trailer</h2>
                <iframe
                    width="560"
                    height="315"
                    src={videoUrl}
                    title="Trailer"
                    frameborder="0"
                />
            </div>}

            <div className="Recommendations">
                <h2 id="Rec-title">Recomendações</h2>
                <div className="Rec-container">
                    {recommendedMovies}
                </div>
                
            </div>
        </div>
}