export const goToHomePage = (navigate) => {
    navigate("/")
}
export const goBack = (navigate) => {
    navigate(-1)
}
export const goToListTripsPage = (navigate) => {
    navigate("/viagens")
}
export const goToAdminHomePage = (navigate) => {
    navigate("/admin")
}
export const goToApplicationFormPage = (navigate) => {
    navigate("/inscrever")
}
export const goToCreateTripPage= (navigate) => {
    navigate("/criar")
}
export const goToLoginPage= (navigate) => {
    navigate("/login")
}
export const goToTripDetailsPage= (navigate, id) => {
    navigate(`/detalhes/${id}`)
}