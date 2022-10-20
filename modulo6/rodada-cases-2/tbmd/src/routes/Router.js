import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage"
import PopularMoviesPage from "../pages/PopularMoviesPage/PopularMoviesPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import Header from "../components/Header/Header"

export default function Router() {
    return <BrowserRouter>
        <Header />
        <Routes>
            <Route index element={<PopularMoviesPage />} />
            <Route path="/filme/:id" element={<MovieDetailsPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
}