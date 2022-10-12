export const goToPopularMoviesPage = (navigate) => {
    navigate("/")
}

export const goToMovieDetailsPage = (navigate, id) => {
    navigate(`/filme/${id}`)
}