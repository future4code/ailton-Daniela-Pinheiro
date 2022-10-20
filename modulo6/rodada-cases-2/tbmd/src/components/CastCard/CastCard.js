import React from "react"
import "./CastCard.css"
import { IMG_BASE_URL } from "../../constants/urls"

export default function CastCard(props) {
    const cast = props.cast

    return <div className="Cast-card">
        <img className="Cast-photo" src={IMG_BASE_URL + cast.profile_path} alt={cast.name} />
        <h4>{cast.name}</h4>
        <p><strong>{cast.character}</strong></p>
    </div>
}