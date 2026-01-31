import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/Home"

export const RoutesPages = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<h1>About Page</h1>} />
            </Routes>
        </>
    )
}