import React from "react"
import { useParams } from "react-router-dom"
import { IMG_BASE_URL } from "../../constants/urls"
import { useRequestData } from "../../hooks/useRequestData"

export default function MovieDetailsPage() {
    const params = useParams()

    const movie = useRequestData({}, `/movie/${params.id}`)

    return <div>
        {movie && <div>
            <h3>{movie.title}</h3>
            <img src={IMG_BASE_URL + movie.poster_path} alt={movie.title} />
            <p>{movie.overview}</p>
        </div>}
    </div>
}