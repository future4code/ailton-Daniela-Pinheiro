import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import PostPage from "../pages/PostPage/PostPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route index element={<FeedPage />} />
            <Route path="/entrar" element={<LoginPage />} />
            <Route path="/cadastrar" element={<SignUpPage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
}