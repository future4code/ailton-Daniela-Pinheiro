import React from "react"
import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route>
                <LoginPage />
            </Route>
        </Routes>
    </BrowserRouter>
}