import React from "react"

export default function TechnicalInfo(props) {
    const {movie, releaseDates } = props

    const genres = movie.genres && movie.genres.map(genre => {
        return genre.name
    }).join(", ")

    const releaseDate = releaseDates && releaseDates.find(item => {
        return item.iso_3166_1 === "BR"
    })

    const releaseDateBR = releaseDate && new Date(releaseDate.release_dates[0].release_date).toLocaleDateString()

    const hours = movie.runtime && Math.floor(movie.runtime / 60)

    const minutes = movie.runtime && movie.runtime % 60

    return <>
        <p>{releaseDateBR} (BR)</p>
        <p>{genres}</p>
        <p>{hours}h {minutes}min</p>
    </>
}