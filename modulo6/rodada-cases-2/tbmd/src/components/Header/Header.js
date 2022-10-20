import React from "react"
import { useNavigate } from "react-router-dom"
import { goToPopularMoviesPage } from "../../routes/coordinator"
import "./Header.css"

export default function Header() {
    const navigate = useNavigate()

    const onClickTitle = () => {
        goToPopularMoviesPage(navigate)
    }

    return <header>
        <h2 id="title" onClick={onClickTitle}>TBMD</h2>
    </header>
}