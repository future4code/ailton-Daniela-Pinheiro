import React from "react"
import "./UserRatings.css"

export default function UserRatings(props) {
    const movie = props.movie

    const ratings = (movie.vote_average * 10).toFixed(0)

    let ratingsId

    if(ratings >= 70) {
        ratingsId = "Ratings-high"
    }

    if(ratings < 70 && ratings >= 50) {
        ratingsId = "Ratings-medium"
    }

    if(ratings < 50) {
        ratingsId = "Ratings-low"
    }

    return <div className="Ratings-container">
        <div className="Ratings">
            <h3 id={ratingsId}>{ratings}%</h3>
        </div>
        <p>Avaliação dos usuários</p>
    </div>
}