import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "../pages/HomePage"
import ListTripsPage from "../pages/ListTripsPage"
import AdminHomePage from '../pages/AdminHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import CreateTripPage from '../pages/CreateTripPage'
import LoginPage from '../pages/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage'


export const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="viagens" element={<ListTripsPage />} />
            <Route path="admin" element={<AdminHomePage />} />
            <Route path="inscrever" element={<ApplicationFormPage />} />
            <Route path="login" element={<LoginPage />} />
            {/* <Route path="" element={} /> */}
        </Routes>
    </BrowserRouter>
}