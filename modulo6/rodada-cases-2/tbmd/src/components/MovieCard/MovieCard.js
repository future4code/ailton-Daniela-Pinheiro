import React from "react"
import "./MovieCard.css"
import { IMG_BASE_URL } from "../../constants/urls"
import { useRequestData } from "../../hooks/useRequestData"

export default function MovieCard() {

    const fc = useRequestData({}, '/movie/550')

    return <div className="Movie-card">
        <img className="Poster" src={IMG_BASE_URL + fc.poster_path} />
        <div className="Title-card">
            <h4 className="Movie-title">{fc.title}</h4>
            <h4 className="Release-date">{fc.release_date}</h4>
        </div>
    </div>
}